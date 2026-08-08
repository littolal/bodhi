import homeHero from '../assets/Photos/hero/IMG_0332.webp'
import { Callout } from '../components/Callout'
import { ButtonLink, FeatureGrid, QuoteBlock, SectionHeading, Seo } from '../components/UI'
import { specialties, testimonials } from '../data/content'

export default function HomePage() {
  return (
    <>
      <Seo title="Home" description="Bodhi School empowers young minds through conceptual learning, creativity and care in Trivandrum." />
      <section className="home-hero">
        <div className="container home-hero-grid">
          <div className="home-hero-copy reveal">
            <p className="eyebrow">Bodhi School · Trivandrum</p>
            <h1>Where curious minds <em>take root.</em></h1>
            <p>A new generation school helping children become confident, self-reliant and thoughtful individuals.</p>
            <div className="hero-actions">
              <ButtonLink to="/admission">Explore admission</ButtonLink>
              <ButtonLink to="/about" secondary>Discover our story</ButtonLink>
            </div>
          </div>
          <div className="home-hero-art reveal reveal-delay">
            <div className="hero-photo">
              <img
                src={homeHero}
                alt="Children learning together in a bright classroom"
                width={1600}
                height={1067}
                fetchPriority="high"
                decoding="async"
              />
            </div>
            <div className="hero-note"><strong>Learning with joy</strong><span>Growing with purpose</span></div>
            <svg className="hero-line" viewBox="0 0 360 150" aria-hidden="true"><path d="M3 130C70 18 184 192 357 21" /></svg>
          </div>
        </div>
        <div className="container hero-values" aria-label="Bodhi values">
          <span>Conceptual learning</span><span>Creative confidence</span><span>Emotional maturity</span>
        </div>
      </section>

      <section className="section intro-section">
        <div className="container split-grid">
          <SectionHeading eyebrow="Welcome to Bodhi" title="Education that follows the child’s curiosity." />
          <div className="prose">
            <p className="lead">“What we want is to see the child in pursuit of knowledge, and not knowledge in pursuit of the child.”</p>
            <p>At Bodhi, education is not just about learning—it’s
              about shaping lives. We are a new-generation school committed to
              nurturing young minds through a strong foundation of conceptual
              understanding.</p>
            <p>Every child who walks into Bodhi is seen as full of
              promise, curiosity, and untapped potential, and we take that
              responsibility seriously.</p>
          </div>
        </div>
      </section>

      <section className="section tinted-section">
        <div className="container">
          <SectionHeading eyebrow="Activities & Programs Offered" title="A wider world of learning." text="At Bodhi, learning goes far beyond the classroom. Our carefully curated activities are designed to nurture creativity, confidence, discipline, and essential life skills—helping children grow into well-rounded individuals." />
          <FeatureGrid items={specialties} />
        </div>
      </section>

      <section className="section">
        <div className="container testimonial-layout">
          <SectionHeading eyebrow="Parent voices" title="Trust grows in the everyday moments." />
          <div className="testimonial-carousel" aria-label="Parent testimonials">
            <div className="testimonial-track">
              {[0, 1].map((groupIndex) => (
                <div className="testimonial-group" key={groupIndex} aria-hidden={groupIndex === 1}>
                  {testimonials.map((item) => (
                    <div className="testimonial-slide" key={`${item.name}-${groupIndex}`}>
                      <QuoteBlock quote={item.quote} author={item.name} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Callout />
    </>
  )
}
