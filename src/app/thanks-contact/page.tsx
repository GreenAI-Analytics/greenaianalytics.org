export default function ThanksContactPage() {
  return (
    <section className="pt-32 pb-20 px-6 text-center min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
          Message Sent! 🚀
        </h1>
        <p className="text-2xl text-gray-700 mb-6">
          Thank you for getting in touch.
        </p>
        <p className="text-xl text-gray-600 mb-10 leading-relaxed">
          We’ve received your message and the team at GreenAI Analytics usually replies within a few hours
          (often faster).<br /><br />
          Expect an email from <span className="font-semibold">sales@carbontrackai.com</span> soon!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/"
            className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-10 rounded-lg text-lg inline-flex items-center transition"
          >
            ← Back to Home
          </a>
          <a
            href="/contact"
            className="bg-white text-primary border-2 border-primary font-bold py-4 px-10 rounded-lg text-lg hover:bg-green-50 transition"
          >
            Send Another Message
          </a>
        </div>
      </div>
    </section>
  );
}
