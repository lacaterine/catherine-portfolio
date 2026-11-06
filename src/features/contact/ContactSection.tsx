function ContactSection() {
  return (
    <section 
    id = 'contact'
    className="border-t border-gray-200 py-20 md:py-24"
    >
      <div className="mx-auto max-w-4xl px-6">
        <p className="mb-2 text-sm font-medium uppercase tracking-wide text-gray-500">
          Contact
        </p>

        <h2 className="mb-6 text-3xl md:text-4xl font-bold">
          Let’s work together
        </h2>

        <p className="mb-8 text-lg text-gray-600">
          I am currently looking for frontend development opportunities and
          collaborations.
        </p>

        <div className="space-y-4 text-lg">
          <p>
            Email: ladycatherine.ar@gmail.com
          </p>

          <p>
            GitHub: https://github.com/lacaterine
          </p>

          <p>
            LinkedIn: https://www.linkedin.com/in/catherine-ruiz-330b1b353
          </p>
        </div>
      </div>
    </section>
  )
}

export default ContactSection