import { createHmac, timingSafeEqual } from "node:crypto";

export const ADMIN_SESSION_COOKIE = "aarambh_admin_session";
const SESSION_DURATION_MS = 1000 * 60 * 60 * 8;

function adminPassword() {
  return process.env.ADMIN_PASSWORD || "";
}

function sessionSecret() {
  return process.env.ADMIN_SESSION_SECRET || "";
}

function sign(value) {
  return createHmac("sha256", sessionSecret()).update(value).digest("hex");
}

function safelyMatches(first, second) {
  const firstBuffer = Buffer.from(first);
  const secondBuffer = Buffer.from(second);

  return (
    firstBuffer.length === secondBuffer.length &&
    timingSafeEqual(firstBuffer, secondBuffer)
  );
}

export function isAdminConfigured() {
  return Boolean(adminPassword() && sessionSecret());
}

export function passwordMatches(password) {
  return isAdminConfigured() && safelyMatches(password || "", adminPassword());
}

export function createAdminSession() {
  const expiresAt = Date.now() + SESSION_DURATION_MS;
  const signature = sign(`gallery-admin:${expiresAt}`);

  return `${expiresAt}.${signature}`;
}

export function isAdminRequest(request) {
  if (!isAdminConfigured()) {
    return false;
  }

  const session = request.cookies.get(ADMIN_SESSION_COOKIE)?.value;
  if (!session) {
    return false;
  }

  const [expiresAt, signature] = session.split(".");
  const expiry = Number(expiresAt);

  if (!Number.isFinite(expiry) || expiry < Date.now() || !signature) {
    return false;
  }

  return safelyMatches(signature, sign(`gallery-admin:${expiresAt}`));
}

export function adminCookieOptions() {
  return {
    httpOnly: true,
    maxAge: SESSION_DURATION_MS / 1000,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  };
}
