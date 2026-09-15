export const metadata = {
  title: 'About Velqen',
  description: 'Why Velqen exists and how we approach product development.',
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <p className="text-sm font-semibold uppercase tracking-wide text-[#C1712F]">About Velqen</p>
      <h1 className="mt-3 text-3xl font-bold text-[#16233D] md:text-4xl">
        We&apos;re not inventing a new category. We&apos;re fixing the annoying parts of one that already exists.
      </h1>

      <div className="mt-8 space-y-6 text-base leading-relaxed text-[#5B6472]">
        <p>
          Under-sink organisers already sell well, which told us the demand was real. What we found reading
          through customer complaints was that most of the frustration had nothing to do with looks — it was
          whether the product actually worked in a real cupboard. Poor cabinet fit, pipes getting in the way,
          drawers tipping when pulled out, rails that jam once they&apos;re loaded.
        </p>
        <p>
          So the brief was simple: make it reliable first, then make it look good. That meant an adjustable
          frame instead of a fixed width, a layout designed around the U-bend instead of ignoring it, and rails
          that get tested loaded and off-centre, not just empty.
        </p>
        <p>
          We&apos;re launching carefully. The first production run is small on purpose — we&apos;d rather learn from real
          customers with a modest batch than commit heavily to an idea that hasn&apos;t been tested in real cabinets
          yet. If the product earns its place, we&apos;ll expand from there. If it doesn&apos;t solve the problem properly,
          we&apos;d rather stop and fix it than push volume to defend the original idea.
        </p>
        <p className="font-medium text-[#16233D]">
          Our rule going forward: don&apos;t scale an assumption. Scale evidence.
        </p>
      </div>
    </div>
  );
}
