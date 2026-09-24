"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { galleryCategories } from "@/lib/gallery-data";

async function responseError(response) {
  const data = await response.json().catch(() => ({}));
  return data.error || "Something went wrong. Please try again.";
}

export default function GalleryAdminPage() {
  const [authState, setAuthState] = useState("checking");
  const [items, setItems] = useState([]);
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [busyItemId, setBusyItemId] = useState("");

  const loadGallery = useCallback(async () => {
    const response = await fetch("/api/admin/gallery", { cache: "no-store" });

    if (response.status === 401) {
      setAuthState("signed-out");
      return;
    }

    if (!response.ok) {
      throw new Error(await responseError(response));
    }

    const data = await response.json();
    setItems(data.items || []);
    setAuthState("signed-in");
  }, []);

  useEffect(() => {
    let isActive = true;

    fetch("/api/admin/gallery", { cache: "no-store" })
      .then(async (response) => {
        if (!isActive) {
          return;
        }

        if (response.status === 401) {
          setAuthState("signed-out");
          return;
        }

        if (!response.ok) {
          throw new Error(await responseError(response));
        }

        const data = await response.json();
        setItems(data.items || []);
        setAuthState("signed-in");
      })
      .catch((error) => {
        if (isActive) {
          setMessage(error.message);
          setAuthState("signed-out");
        }
      });

    return () => {
      isActive = false;
    };
  }, []);

  async function handleLogin(event) {
    event.preventDefault();
    setIsLoggingIn(true);
    setMessage("");

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (!response.ok) {
        throw new Error(await responseError(response));
      }

      setPassword("");
      await loadGallery();
    } catch (error) {
      setMessage(error.message);
    } finally {
      setIsLoggingIn(false);
    }
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    setItems([]);
    setMessage("");
    setAuthState("signed-out");
  }

  async function handleUpload(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("published", String(formData.get("published") === "on"));
    setIsUploading(true);
    setMessage("");

    try {
      const response = await fetch("/api/admin/gallery", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(await responseError(response));
      }

      form.reset();
      setMessage("Images added to the gallery.");
      await loadGallery();
    } catch (error) {
      setMessage(error.message);
    } finally {
      setIsUploading(false);
    }
  }

  async function handleSave(event, id) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const update = {
      title: formData.get("title"),
      alt: formData.get("alt"),
      category: formData.get("category"),
      published: formData.get("published") === "on",
    };
    setBusyItemId(id);
    setMessage("");

    try {
      const response = await fetch(`/api/admin/gallery/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(update),
      });

      if (!response.ok) {
        throw new Error(await responseError(response));
      }

      const data = await response.json();
      setItems((currentItems) =>
        currentItems.map((item) => (item.id === id ? data.item : item)),
      );
      setMessage("Gallery item updated.");
    } catch (error) {
      setMessage(error.message);
    } finally {
      setBusyItemId("");
    }
  }

  async function handleDelete(id) {
    if (!window.confirm("Delete this gallery item? This cannot be undone.")) {
      return;
    }

    setBusyItemId(id);
    setMessage("");

    try {
      const response = await fetch(`/api/admin/gallery/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(await responseError(response));
      }

      setItems((currentItems) => currentItems.filter((item) => item.id !== id));
      setMessage("Gallery item deleted.");
    } catch (error) {
      setMessage(error.message);
    } finally {
      setBusyItemId("");
    }
  }

  if (authState === "checking") {
    return (
      <main className="grid min-h-screen place-items-center bg-[#FFFDF8] px-6 text-center">
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#5A4636]/60">
          Loading gallery admin…
        </p>
      </main>
    );
  }

  if (authState !== "signed-in") {
    return (
      <main className="grid min-h-screen place-items-center bg-[#FFFDF8] px-6 py-16">
        <section className="w-full max-w-md border border-[#C9A24A]/30 bg-white p-8 shadow-[0_24px_70px_rgba(90,70,54,0.09)] md:p-10">
          <p className="text-[9px] font-semibold uppercase tracking-[0.32em] text-[#C9A24A]">
            Aarambh Events
          </p>
          <h1 className="mt-5 font-serif text-5xl leading-none text-[#5A4636]">
            Gallery Admin
          </h1>
          <p className="mt-5 text-sm leading-6 text-[#5A4636]/65">
            Sign in to add, edit, hide or delete gallery photos.
          </p>

          <form className="mt-8" onSubmit={handleLogin}>
            <label className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5A4636]" htmlFor="admin-password">
              Password
            </label>
            <input
              id="admin-password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="mt-3 w-full border border-[#C9A24A]/40 bg-[#FFFDF8] px-4 py-3 text-sm text-[#5A4636] outline-none transition focus:border-[#6B0F1A]"
              required
              autoComplete="current-password"
            />
            {message && (
              <p className="mt-4 text-sm leading-6 text-[#6B0F1A]">{message}</p>
            )}
            <button
              type="submit"
              disabled={isLoggingIn}
              className="mt-7 w-full bg-[#6B0F1A] px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#5A4636] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isLoggingIn ? "Signing in…" : "Sign in"}
            </button>
          </form>

          <Link href="/gallery" className="mt-7 inline-block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5A4636] underline decoration-[#C9A24A] underline-offset-8">
            ← View public gallery
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FFFDF8] px-5 py-8 text-[#5A4636] md:px-10 md:py-12">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-col gap-6 border-b border-[#C9A24A]/30 pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.32em] text-[#C9A24A]">
              Aarambh Events
            </p>
            <h1 className="mt-4 font-serif text-5xl leading-none md:text-6xl">
              Gallery Admin
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-6 text-[#5A4636]/65">
              Upload new moments and control exactly what appears in the public gallery.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/gallery" className="border border-[#C9A24A]/50 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] transition hover:border-[#6B0F1A] hover:bg-[#6B0F1A] hover:text-white">
              View gallery
            </Link>
            <button onClick={handleLogout} className="border border-[#5A4636]/30 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] transition hover:border-[#5A4636]">
              Sign out
            </button>
          </div>
        </header>

        <section className="mt-10 border border-[#C9A24A]/30 bg-white p-6 md:p-8">
          <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#C9A24A]">Add photos</p>
              <h2 className="mt-2 font-serif text-3xl">Upload to the gallery</h2>
            </div>
            <p className="text-xs text-[#5A4636]/55">JPG, PNG, WEBP or AVIF · up to 8 MB per image</p>
          </div>

          <form className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-4" onSubmit={handleUpload}>
            <label className="md:col-span-2 xl:col-span-4">
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em]">Photos</span>
              <input name="files" type="file" accept="image/jpeg,image/png,image/webp,image/avif" multiple required className="mt-3 block w-full border border-dashed border-[#C9A24A]/60 bg-[#FFFDF8] px-4 py-4 text-sm file:mr-4 file:border-0 file:bg-[#6B0F1A] file:px-4 file:py-2 file:text-[10px] file:font-semibold file:uppercase file:tracking-[0.16em] file:text-white" />
              <span className="mt-2 block text-xs leading-5 text-[#5A4636]/55">You can add up to 12 photos together. Multiple photos receive names from their filenames.</span>
            </label>

            <label>
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em]">Category</span>
              <select name="category" defaultValue="Wedding" className="mt-3 w-full border border-[#C9A24A]/40 bg-[#FFFDF8] px-4 py-3 text-sm outline-none focus:border-[#6B0F1A]">
                {galleryCategories.map((category) => <option key={category}>{category}</option>)}
              </select>
            </label>

            <label>
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em]">Title (one photo only)</span>
              <input name="title" maxLength="120" className="mt-3 w-full border border-[#C9A24A]/40 bg-[#FFFDF8] px-4 py-3 text-sm outline-none focus:border-[#6B0F1A]" placeholder="e.g. Royal wedding" />
            </label>

            <label>
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em]">Image description</span>
              <input name="alt" maxLength="160" className="mt-3 w-full border border-[#C9A24A]/40 bg-[#FFFDF8] px-4 py-3 text-sm outline-none focus:border-[#6B0F1A]" placeholder="Short accessible description" />
            </label>

            <div className="flex flex-col justify-end gap-4">
              <label className="flex items-center gap-3 text-sm">
                <input name="published" type="checkbox" defaultChecked className="h-4 w-4 accent-[#6B0F1A]" />
                Publish immediately
              </label>
              <button type="submit" disabled={isUploading} className="bg-[#6B0F1A] px-5 py-3.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#5A4636] disabled:cursor-not-allowed disabled:opacity-60">
                {isUploading ? "Uploading…" : "Add photos"}
              </button>
            </div>
          </form>
        </section>

        {message && <p className="mt-6 border-l-2 border-[#C9A24A] bg-white px-4 py-3 text-sm text-[#5A4636]">{message}</p>}

        <section className="mt-12">
          <div className="flex items-baseline justify-between gap-4">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#C9A24A]">Manage photos</p>
              <h2 className="mt-2 font-serif text-3xl">{items.length} gallery moments</h2>
            </div>
          </div>

          <div className="mt-7 grid gap-6 lg:grid-cols-2">
            {items.map((item) => (
              <article key={item.id} className="overflow-hidden border border-[#C9A24A]/30 bg-white md:grid md:grid-cols-[42%_58%]">
                <div className="relative min-h-72 bg-[#5A4636]/10">
                  <Image src={item.image} alt={item.alt} fill sizes="(max-width: 1024px) 100vw, 35vw" className="object-cover" />
                  {!item.published && <span className="absolute left-4 top-4 bg-[#5A4636] px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-white">Hidden</span>}
                </div>

                <form className="p-5" onSubmit={(event) => handleSave(event, item.id)}>
                  <div className="grid gap-4">
                    <label>
                      <span className="text-[9px] font-semibold uppercase tracking-[0.18em]">Title</span>
                      <input name="title" defaultValue={item.title} maxLength="120" required className="mt-2 w-full border border-[#C9A24A]/40 px-3 py-2.5 text-sm outline-none focus:border-[#6B0F1A]" />
                    </label>
                    <label>
                      <span className="text-[9px] font-semibold uppercase tracking-[0.18em]">Description</span>
                      <input name="alt" defaultValue={item.alt} maxLength="160" required className="mt-2 w-full border border-[#C9A24A]/40 px-3 py-2.5 text-sm outline-none focus:border-[#6B0F1A]" />
                    </label>
                    <label>
                      <span className="text-[9px] font-semibold uppercase tracking-[0.18em]">Category</span>
                      <select name="category" defaultValue={item.category} className="mt-2 w-full border border-[#C9A24A]/40 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#6B0F1A]">
                        {galleryCategories.map((category) => <option key={category}>{category}</option>)}
                      </select>
                    </label>
                    <label className="flex items-center gap-3 text-sm">
                      <input name="published" type="checkbox" defaultChecked={item.published} className="h-4 w-4 accent-[#6B0F1A]" />
                      Show in public gallery
                    </label>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <button type="submit" disabled={busyItemId === item.id} className="bg-[#6B0F1A] px-4 py-3 text-[9px] font-semibold uppercase tracking-[0.16em] text-white disabled:opacity-60">
                      {busyItemId === item.id ? "Saving…" : "Save changes"}
                    </button>
                    <button type="button" onClick={() => handleDelete(item.id)} disabled={busyItemId === item.id} className="border border-[#6B0F1A]/40 px-4 py-3 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#6B0F1A] disabled:opacity-60">
                      Delete
                    </button>
                  </div>
                </form>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
