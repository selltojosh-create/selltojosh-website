import Link from "next/link";

export default function Header() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-blue-800 focus:font-semibold focus:shadow-lg"
      >
        Skip to main content
      </a>
      <header className="w-full bg-blue-800 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold hover:underline">
            Sell to Josh
          </Link>
          <nav aria-label="Main navigation" className="space-x-4">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/about" className="hover:underline">
              About
            </Link>
            <Link href="/#lead-form" className="hover:underline">
              Contact
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
