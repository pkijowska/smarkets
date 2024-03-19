"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    // Log the error to an error reporting service like Sentry?
    console.error(error);
  }, [error]);

  return (
    <>
      <h2 className="error">Something went wrong!</h2>
      <p className="error">{error.message}</p>
    </>
  );
}
