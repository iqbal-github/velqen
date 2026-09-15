const FAQS = [
  {
    q: 'How do I know it will fit my cabinet?',
    a: "Measure the internal width of your cabinet at its narrowest point — not the door opening — along with the usable height and where your pipework sits. The frame adjusts from 360mm to 540mm wide. If you're between sizes, choose the narrower fit, since the frame extends up to its maximum but not beyond it. Full steps are on the product page.",
  },
  {
    q: 'Will it clash with my pipes or the U-bend?',
    a: 'The frame and tray layout are designed with plumbing clearance in mind, for both central and offset U-bends. That said, cabinets vary a lot, so check your pipe position against the specifications before ordering.',
  },
  {
    q: 'Will it tip over when I pull it out fully loaded?',
    a: "A pulled-out drawer acts like a lever, which is where cheaper organisers struggle. Velqen uses a rigid central frame designed to stay stable at full extension under normal household loads.",
  },
  {
    q: 'Do the rails stick or jam once loaded?',
    a: "Cheap slides often work fine empty and become frustrating once loaded. We test the rails under normal and uneven loads, not just empty, specifically because that's where most complaints about competing products come from.",
  },
  {
    q: 'What can I actually store in the trays?',
    a: 'The lower tray is taller, built for bottles, sprays and larger cleaning products. The upper tray is shallower, suited to smaller everyday items. Layout details are on the product specifications.',
  },
  {
    q: 'What is your returns policy?',
    a: "If the organiser doesn't fit or arrives damaged, contact us and we'll sort a return or replacement. See the Contact page to get in touch with your order details.",
  },
  {
    q: 'Is this only available through this website?',
    a: "The organiser is also listed on Amazon UK. Buying here or there gets you the same product — use whichever is more convenient for you.",
  },
];

export const metadata = {
  title: 'FAQ | Velqen',
  description: 'Fit, plumbing, stability and shipping questions about the Velqen under-sink organiser.',
};

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <p className="text-sm font-semibold uppercase tracking-wide text-[#C1712F]">FAQ</p>
      <h1 className="mt-3 text-3xl font-bold text-[#F1EDE4] md:text-4xl">Fit, plumbing &amp; the questions people actually ask</h1>

      <div className="mt-10 divide-y divide-[#262D45] rounded-2xl border border-[#262D45] bg-[#161C2E]">
        {FAQS.map((item) => (
          <details key={item.q} className="group px-6 py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-[#F1EDE4]">
              {item.q}
              <span className="text-[#C1712F] transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-[#98A2B8]">{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
