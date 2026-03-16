export default function Steps() {
  const steps = [
    {
      n: 1,
      h: "Tell us about the property",
      p: "Share the address and a quick overview—no long forms.",
    },
    {
      n: 2,
      h: "Get a fair cash offer",
      p: "We review, ask a few clarifying questions, and present a clear offer.",
    },
    {
      n: 3,
      h: "Close when it works for you",
      p: "Pick the date. We handle typical seller closing costs and paperwork.",
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          How It Works
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="rounded-xl bg-white p-6 shadow-sm">
              <div className="h-10 w-10 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold">
                {s.n}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{s.h}</h3>
              <p className="mt-2 text-gray-600">{s.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
