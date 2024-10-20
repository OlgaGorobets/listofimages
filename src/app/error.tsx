"use client";

import Link from "next/link";


export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-800 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-gray-100">
            Oops! Something went wrong.
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Error: {error.message}
          </p>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Digest: {error.digest}
          </p>
        </div>
        <div className="space-y-2">
          <button className="w-full"  onClick={() => reset()}>
            Try again
          </button>
          <Link
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            href="/"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </main>
  );
}
