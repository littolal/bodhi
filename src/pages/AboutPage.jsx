import aboutHero from '../assets/Photos/hero/IMG_9776.webp'
import { Callout } from '../components/Callout'
import { PageHero, SectionHeading, Seo } from '../components/UI'

const challenges = [
  'Coach each child according to their level',
  'Help children make wise choices in life',
  'Build self-confidence through self-realisation',
  'Learn practical life skills for today’s world',
  'Emphasise physical and emotional well-being',
  'Use technology safely and thoughtfully',
]

export default function AboutPage() {
  return (
    <>
      <Seo title="About us" description="Learn about Bodhi School’s vision, mission, leadership and dedicated teaching team." />
      <PageHero eyebrow="About us" title="A school built around the whole child." intro="Knowledge matters. So do confidence, kindness, resilience and the courage to remain curious." image={aboutHero} />
      <section className="section">
        <div className="container split-grid">
          <SectionHeading eyebrow="Vision & mission" title="Strong roots for a generous future." />
          <div className="prose">
            <p>We believe that every child begins as a blank canvas.
              With the right guidance, environment, and encouragement, they can grow
              into confident, capable, and compassionate individuals.
            </p>
            <p>At Bodhi, we go
              beyond traditional teaching. Our approach is inspired by the work of
              child development experts like Jean Piaget and Lev Vygotsky, which means
              your child doesn’t just listen and memorize, but actively explores,
              questions, and understands.</p>
            <p>Our teachers don’t simply instruct—they
              guide, support, and nurture each child based on their unique pace and
              learning style.</p>
          </div>
        </div>
      </section>
      <section className="section tinted-section">
        <div className="container">
          <SectionHeading eyebrow="Core team" title="Experience guided by purpose." />
          <div className="people-grid">
            <article className="person-card"><span className="person-initial">JK</span><div><p className="eyebrow">Director</p><h3>Jayan Krishnan</h3><p>With experience in technology, project management and educational administration, he leads financial administration, operations and innovative teaching methods at Bodhi.</p></div></article>
            <article className="person-card"><span className="person-initial">AD</span><div><p className="eyebrow">Principal</p><h3>Anitha Dorairaj</h3><p>A civil engineer, former technology professional, educator, trainer and psychology postgraduate, she brings a rare blend of analytical thought and empathy to primary education.</p></div></article>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container teacher-grid">
          <div>
            <p className="eyebrow">Our pillar of strength</p>
            <h2>Teachers who guide, listen and delight.</h2>
            <p>Our cheerful, energetic and enthusiastic teachers strive to give children the best environment by being a guide, friend and mentor.</p>
          </div>
          <ul className="check-list">{challenges.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </section>
      <Callout />
    </>
  )
}
