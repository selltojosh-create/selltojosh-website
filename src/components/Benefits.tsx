export default function Benefits() {
  const items = [
    { title: "No Repairs", body: "Sell as-is. Skip contractors and punch lists." },
    { title: "No Commissions", body: "We buy direct—no agent fees." },
    { title: "Your Timeline", body: "Close in as little as 7–21 days, or when you’re ready." },
    { title: "Local Buyer", body: "Central Texas focused. We know Bell County and beyond." },
    { title: "Simple Process", body: "A few easy steps from offer to closing." },
    { title: "Fair Cash Offer", body: "Transparent numbers—no hidden fees." },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Why Homeowners Choose Sell to Josh
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-xl border border-gray-200 p-5 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-gray-900">{it.title}</h3>
              <p className="mt-2 text-gray-600">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
