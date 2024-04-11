import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <main id="main-404">
        <h1>404 - Page not found</h1>
        <h4>
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.
        </h4>
        <Link href={"/"}>
          <button>Go to homepage</button>
        </Link>
      </main>
    </>
  );
}
