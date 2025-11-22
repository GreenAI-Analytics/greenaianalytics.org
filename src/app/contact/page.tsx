export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-600">
            Questions about Compliance Tracker, Carbon Track AI, or OS For Work?<br />
            We reply within a few hours.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-10">
          <form
            action="https://formsubmit.co/sales@carbontrackai.com"
            method="POST"
            className="space-y-6"
          >
            <div>
              <label className="block text-left font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
              />
            </div>

            <div>
              <label className="block text-left font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
              />
            </div>

            <div>
              <label className="block text-left font-medium mb-2">Message</label>
              <textarea
                name="message"
                rows={6}
                required
                placeholder="How can we help you today?"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
              />
            </div>

            <input type="hidden" name="_subject" value="New Contact Form Submission" />
            <input type="hidden" name="_next" value="/thanks-contact" />

            <button type="submit" className="w-full btn-primary text-lg py-4">
              Send Message →
            </button>
          </form>

          <div className="mt-10 text-center text-gray-600">
            <p>Or email us directly: <a href="mailto:sales@carbontrackai.com" className="text-primary font-medium">sales@carbontrackai.com</a></p>
          </div>
        </div>
      </section>
    </>
  );
}
