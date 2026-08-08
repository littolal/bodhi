import facilitiesHero from '../assets/Photos/hero/IMG_8863.webp'
import { Callout } from '../components/Callout'
import { FeatureGrid, PageHero, SectionHeading, Seo } from '../components/UI'
import { facilities } from '../data/content'

export default function FacilitiesPage() {
  return (
    <>
      <Seo title="Facilities" description="Explore Bodhi School’s classrooms, learning technology, sports, health and life-skills facilities." />
      <PageHero eyebrow="Facilities" title="Spaces designed for movement, focus and discovery." intro="Our learning environment stays child-friendly and joyful without compromising safety, cleanliness or educational standards." image={facilitiesHero} />
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="The learning environment" title="Everything has a purpose." text="From the classroom marker to the school van, each detail is considered through the child’s experience." />
          <FeatureGrid items={facilities} />
        </div>
      </section>
      <section className="section facility-band">
        <div className="container facility-band-grid">
          <div>
            <span>Beyond the classroom</span>
            <h2>Real life is part of the curriculum.</h2>
          </div>
          <p>Field trips, cooking, cleaning, personal chores and public events connect lessons to the world children see around them.</p>
        </div>
      </section>
      <Callout />
    </>
  )
}
