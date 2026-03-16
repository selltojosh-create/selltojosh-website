export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="container mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} Sell to Josh. All rights reserved.</p>
      </div>
    </footer>
  );
}
