import Link from "next/link";

export default function notFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="text-center">
        <p className="text-sm uppercase tracking-widest text-gray-500">404</p>
        <h1 className="mt-4 text-4xl font-semibold text-text-main">
          Page not found
        </h1>
        <p className="mt-4 text-text-main/70">
          The page you're looking for doesn't exist.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-black px-6 py-3 text-sm text-white transition-opacity hover:opacity-80"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
