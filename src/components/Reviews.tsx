export default function Reviews() {
  const quotes = [
    { q: "Smooth and honest from start to finish.", a: "— M. M., Killeen" },
    { q: "Closed on our timeline and bought as-is.", a: "— R. T., Temple" },
    { q: "Clear numbers, no surprises. Recommend.", a: "— L. S., Belton" },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Reviews</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {quotes.map((c, i) => (
            <figure
              key={i}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <blockquote className="text-gray-800">“{c.q}”</blockquote>
              <figcaption className="mt-4 text-sm text-gray-600">{c.a}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
