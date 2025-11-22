export default function ThanksPage() {
  return (
    <section className="pt-32 pb-20 px-6 text-center min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
          Thank You! 🎉
        </h1>
        <p className="text-2xl text-gray-700 mb-6">
          You’ve been added to the Carbon Track AI waitlist.
        </p>
        <p className="text-xl text-gray-600 mb-10">
          We’ll email you as soon as early access opens in Q1 2026.<br />
          Get ready — this will save you hundreds of hours on CSRD reporting.
        </p>
        <a
          href="/"
          className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-10 rounded-lg text-lg inline-flex items-center transition"
        >
          ← Back to Home
        </a>
      </div>
    </section>
  );
}
