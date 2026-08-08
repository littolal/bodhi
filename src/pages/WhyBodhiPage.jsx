import whyHero from '../assets/Photos/hero/IMG_0099.webp'
import { Callout } from '../components/Callout'
import { PageHero, SectionHeading, Seo } from '../components/UI'
import { strengths } from '../data/content'

export default function WhyBodhiPage() {
  return (
    <>
      <Seo title="Why Bodhi" description="Discover Bodhi School’s learning philosophy, strengths and approach to early education." />
      <PageHero eyebrow="Why Bodhi" title="Like a tree, a child flourishes with the right care." intro="The name Bodhi evokes enlightenment and the patient work of helping young minds become strong, smart and generous." image={whyHero} />
      <section className="section tinted-section">
        <div className="container split-grid">
          <SectionHeading eyebrow="Our Special Focus: Early Childhood Care" title="Starting early and starting right makes all the difference. " />
          <div className="prose">
            <p>The early years are critical in shaping:</p>
            <ul>
              <li>Language and communication skills</li>
              <li>Logical and mathematical thinking</li>
              <li>Emotional strength and confidence</li>
            </ul>
            <p> At Bodhi, we carefully design
              experiences that nurture these abilities during this important stage.
              Through the right environment and meaningful learning opportunities, we
              help children build a strong foundation for lifelong success.</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container split-grid">
          <SectionHeading eyebrow="The meaning of Bodhi" title="A nourishing environment in the early years." />
          <div className="prose">
            <p>A sapling grows into a well-rooted, strong and giving tree when it receives good care and a favourable environment.</p>
            <p>We work to give children that environment so they grow into capable individuals with a large heart to give back to society and lead the next generation.</p>
          </div>
        </div>
      </section>
      <section className="section tinted-section">
        <div className="container">
          <SectionHeading eyebrow="Our strengths" title="Carefully modern. Deeply human." />
          <div className="strength-grid">
            {strengths.map((item, index) => (
              <div className="strength-item" key={item}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container editorial-grid">
          <article>
            <p className="eyebrow">Choosing a preschool</p>
            <h2>The first classroom shapes what comes next.</h2>
            <p>High-quality preschool supports stronger language, cognitive and social skills. Look beyond crayons and circle time to the quality of attention, environment and teaching.</p>
          </article>
          <article>
            <p className="eyebrow">Choosing a school</p>
            <h2>A small first step into a much bigger future.</h2>
            <p>The right school accepts a child’s strengths and areas for improvement with equal ease, working hand in hand with parents so the child can bloom happily and confidently.</p>
          </article>
        </div>
      </section>
      <Callout />
    </>
  )
}
