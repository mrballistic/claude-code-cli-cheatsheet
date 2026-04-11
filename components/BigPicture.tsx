import SectionHeading from './SectionHeading';
import BigPictureGrid from './BigPictureGrid';
import ScrollReveal from './ScrollReveal';

export default function BigPicture() {
  return (
    <section className="px-6 py-16 max-w-4xl mx-auto">
      <ScrollReveal>
        <SectionHeading
          id="big-picture"
          title="The Big Picture"
          subtitle="How all the pieces fit together."
        />
        <BigPictureGrid />
      </ScrollReveal>
    </section>
  );
}
