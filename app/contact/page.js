import ContactForm from './contact-form';

export const metadata = {
  title: 'Contact | Velqen',
  description: 'Get in touch with Velqen about an order, fit question, or anything else.',
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-16">
      <p className="text-sm font-semibold uppercase tracking-wide text-[#C1712F]">Contact</p>
      <h1 className="mt-3 text-3xl font-bold text-[#16233D] md:text-4xl">Get in touch</h1>
      <p className="mt-4 text-sm text-[#5B6472]">
        Question about fit, an existing order, or anything else — send a message and we&apos;ll get back to you.
      </p>

      <div className="mt-10">
        <ContactForm />
      </div>
    </div>
  );
}
