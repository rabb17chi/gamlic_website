export default function Contact() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black pt-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-zinc-900 dark:text-zinc-100">
              Get in Touch
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6">
              Have a question, collaboration idea, or just want to say hello?
              We'd love to hear from you!
            </p>
          </section>

          <div className="bg-zinc-800 rounded-lg p-6 space-y-4">
            <div>
              <h3 className="font-semibold text-zinc-200 mb-2">Email</h3>
              <p className="text-zinc-400">contact@gamlic.com</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-zinc-200 mb-2">Business Inquiries</h3>
              <p className="text-zinc-400">business@gamlic.com</p>
            </div>
          </div>

          {/* Contact form can be added here later */}
          <div className="bg-zinc-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-zinc-200">
              Send us a Message
            </h3>
            <p className="text-zinc-400">
              Contact form coming soon...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

