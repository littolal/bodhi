import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  admissionSteps,
  ageGroups,
  facilities,
  galleryItems,
  specialties,
  strengths,
  testimonials,
} from '../data/content'
import { ArrowIcon, ButtonLink, FeatureGrid, PageHero, QuoteBlock, SectionHeading, Seo } from '../components/UI'

const images = {
  home: 'https://images.unsplash.com/photo-1602030028438-4cf153cbae9e?auto=format&fit=crop&w=1400&q=85',
  about: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=85',
  why: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=1200&q=85',
  admission: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=85',
  facilities: 'https://images.unsplash.com/photo-1560785496-3c9d27877182?auto=format&fit=crop&w=1200&q=85',
  gallery: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=1200&q=85',
  contact: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=85',
}

export function HomePage() {
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
            <div className="hero-photo"><img src={images.home} alt="Children learning together in a bright classroom" /></div>
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
            <p>Bodhi is a new generation school empowering young minds to achieve excellence through a foundation of conceptual learning.</p>
            <p>We adopt contemporary and innovative methods that provoke thought, encourage responsibility and develop value-based morale for the challenges of tomorrow.</p>
          </div>
        </div>
      </section>

      <section className="section tinted-section">
        <div className="container">
          <SectionHeading eyebrow="Our specialities" title="A wider world of learning." text="Starting early and starting right is the best foundation we can give the next generation." />
          <FeatureGrid items={specialties} />
        </div>
      </section>

      <section className="section">
        <div className="container testimonial-layout">
          <SectionHeading eyebrow="Parent voices" title="Trust grows in the everyday moments." />
          <div className="testimonial-stack">
            {testimonials.map((item) => <QuoteBlock key={item.name} quote={item.quote} author={item.name} />)}
          </div>
        </div>
      </section>

      <Callout />
    </>
  )
}

export function AboutPage() {
  const challenges = [
    'Coach each child according to their level',
    'Help children make wise choices in life',
    'Build self-confidence through self-realisation',
    'Learn practical life skills for today’s world',
    'Emphasise physical and emotional well-being',
    'Use technology safely and thoughtfully',
  ]
  return (
    <>
      <Seo title="About us" description="Learn about Bodhi School’s vision, mission, leadership and dedicated teaching team." />
      <PageHero eyebrow="About us" title="A school built around the whole child." intro="Knowledge matters. So do confidence, kindness, resilience and the courage to remain curious." image={images.about} />
      <section className="section">
        <div className="container split-grid">
          <SectionHeading eyebrow="Vision & mission" title="Strong roots for a generous future." />
          <div className="prose">
            <p>Bodhi is a new generation school empowering young minds to achieve excellence through a foundation of conceptual learning.</p>
            <p>Our mission is to prepare children to become self-reliant, strong individuals and help them grow intellectually with social and emotional maturity.</p>
            <p>By providing every child with the right nourishment during their peak growth, we help ensure the self-confidence and prosperity of their future.</p>
          </div>
        </div>
      </section>
      <section className="section tinted-section">
        <div className="container">
          <SectionHeading eyebrow="Core team" title="Experience guided by purpose." />
          <div className="people-grid">
            <article className="person-card"><span className="person-initial">JK</span><div><p className="eyebrow">Director</p><h3>Jayan Krishnan</h3><p>With experience in technology, project management and educational administration, he leads financial administration, operations and innovative teaching methods at Bodhi.</p></div></article>
            <article className="person-card"><span className="person-initial">AD</span><div><p className="eyebrow">Principal</p><h3>Anitha Dorairaj</h3><p>A civil engineer, former technology professional, educator and psychology postgraduate, Anitha brings a rare blend of analytical thought and empathy to primary education.</p></div></article>
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

export function WhyBodhiPage() {
  return (
    <>
      <Seo title="Why Bodhi" description="Discover Bodhi School’s learning philosophy, strengths and approach to early education." />
      <PageHero eyebrow="Why Bodhi" title="Like a tree, a child flourishes with the right care." intro="The name Bodhi evokes enlightenment and the patient work of helping young minds become strong, smart and generous." image={images.why} />
      <section className="section">
        <div className="container split-grid">
          <SectionHeading eyebrow="The meaning of Bodhi" title="A nourishing environment in the early years." />
          <div className="prose"><p>A sapling grows into a well-rooted, strong and giving tree when it receives good care and a favourable environment.</p><p>We work to give children that environment so they grow into capable individuals with a large heart to give back to society and lead the next generation.</p></div>
        </div>
      </section>
      <section className="section tinted-section">
        <div className="container">
          <SectionHeading eyebrow="Our strengths" title="Carefully modern. Deeply human." />
          <div className="strength-grid">{strengths.map((item, index) => <div className="strength-item" key={item}><span>{String(index + 1).padStart(2, '0')}</span><p>{item}</p></div>)}</div>
        </div>
      </section>
      <section className="section">
        <div className="container editorial-grid">
          <article><p className="eyebrow">Choosing a preschool</p><h2>The first classroom shapes what comes next.</h2><p>High-quality preschool supports stronger language, cognitive and social skills. Look beyond crayons and circle time to the quality of attention, environment and teaching.</p></article>
          <article><p className="eyebrow">Choosing a school</p><h2>A small first step into a much bigger future.</h2><p>The right school accepts a child’s strengths and areas for improvement with equal ease, working hand in hand with parents so the child can bloom happily and confidently.</p></article>
        </div>
      </section>
      <Callout />
    </>
  )
}

export function AdmissionPage() {
  return (
    <>
      <Seo title="Admission" description="View Bodhi School’s admission process, age eligibility and enrolment information." />
      <PageHero eyebrow="Admission" title="A thoughtful beginning to your child’s Bodhi journey." intro="Our admission process helps families and teachers understand the child, choose the right placement and begin with confidence." image={images.admission}><ButtonLink to="/contact">Plan a school visit</ButtonLink></PageHero>
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="The process" title="Seven clear steps, one shared goal." />
          <ol className="process-list">{admissionSteps.map((step, index) => <li key={step}><span>{index + 1}</span><p>{step}</p></li>)}</ol>
        </div>
      </section>
      <section className="section tinted-section">
        <div className="container admission-grid">
          <div><p className="eyebrow">Age eligibility</p><h2>Finding the right starting point.</h2><p>Depending on the child’s assessment, an appropriate class may be recommended to keep them engaged and challenged.</p></div>
          <div className="age-table" role="table" aria-label="Minimum age and eligible class">
            {ageGroups.map(([age, grade]) => <div className="age-row" role="row" key={age}><span role="cell">{age}</span><strong role="cell">{grade}</strong></div>)}
            <p>Add one year to the minimum age for every grade increment.</p>
          </div>
        </div>
      </section>
      <section className="section"><div className="container current-students"><p className="eyebrow">Current students</p><h2>Continuity, with care.</h2><p>The school automatically enrols current students who have paid the admission fee for the following year after a compatible placement has been discussed with the parent. Re-enrolment is subject to conduct, academic performance and accounts being in good standing.</p><p className="inclusive-note">All applications are accepted without regard to ethnicity, religion, gender or national origin.</p></div></section>
      <Callout />
    </>
  )
}

export function FacilitiesPage() {
  return (
    <>
      <Seo title="Facilities" description="Explore Bodhi School’s classrooms, learning technology, sports, health and life-skills facilities." />
      <PageHero eyebrow="Facilities" title="Spaces designed for movement, focus and discovery." intro="Our learning environment stays child-friendly and joyful without compromising safety, cleanliness or educational standards." image={images.facilities} />
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="The learning environment" title="Everything has a purpose." text="From the classroom marker to the school van, each detail is considered through the child’s experience." />
          <FeatureGrid items={facilities} />
        </div>
      </section>
      <section className="section facility-band"><div className="container facility-band-grid"><div><span>Beyond the classroom</span><h2>Real life is part of the curriculum.</h2></div><p>Field trips, cooking, cleaning, personal chores and public events connect lessons to the world children see around them.</p></div></section>
      <Callout />
    </>
  )
}

export function GalleryPage() {
  return (
    <>
      <Seo title="Gallery" description="See moments from field visits, sports day, annual day, picnics and science exhibitions at Bodhi School." />
      <PageHero eyebrow="Gallery" title="School life, in all its colour." intro="A glimpse of children learning, moving, making and celebrating together." image={images.gallery} />
      <section className="section"><div className="container gallery-grid">{galleryItems.map((item) => <figure className="gallery-card" key={item.title}><img src={item.image} alt={`${item.title} at Bodhi School`} loading="lazy" /><figcaption>{item.title}</figcaption></figure>)}</div></section>
      <section className="section gallery-social"><div className="container split-grid"><SectionHeading eyebrow="More moments" title="Follow the everyday life of Bodhi." /><a className="text-link" href="https://www.facebook.com/pg/Bodhischool/photos/" target="_blank" rel="noreferrer">Visit our Facebook page <ArrowIcon /></a></div></section>
    </>
  )
}

export function ContactPage() {
  const [sent, setSent] = useState(false)
  function handleSubmit(event) {
    event.preventDefault()
    setSent(true)
    event.currentTarget.reset()
  }
  return (
    <>
      <Seo title="Contact" description="Contact Bodhi School in Pettah, Trivandrum for admissions, visits and general enquiries." />
      <PageHero eyebrow="Contact" title="Let’s begin with a conversation." intro="Ask about admission, arrange a visit or tell us what you would like to know." image={images.contact} />
      <section className="section">
        <div className="container contact-grid">
          <div className="contact-details">
            <p className="eyebrow">Visit or reach us</p><h2>We’d be happy to hear from you.</h2>
            <address>Bodhi Schools<br />PRRAP-21, Puthen Road, Pettah<br />Trivandrum, Kerala 695024</address>
            <a href="tel:+919388709700">+91 938 870 9700</a>
            <a href="mailto:admission@bodhischool.com">admission@bodhischool.com</a>
            <p className="career-note">Love being around children? Send your resume to <a href="mailto:jobs@bodhischool.com">jobs@bodhischool.com</a>.</p>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="field"><label htmlFor="student">Name of student</label><input id="student" name="student" required /></div>
            <div className="form-row"><div className="field"><label htmlFor="age">Age</label><input id="age" name="age" inputMode="decimal" required /></div><div className="field"><label htmlFor="class">Class sought</label><input id="class" name="class" required /></div></div>
            <div className="field"><label htmlFor="parent">Name of parent</label><input id="parent" name="parent" required /></div>
            <div className="form-row"><div className="field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" required /></div><div className="field"><label htmlFor="phone">Mobile number</label><input id="phone" name="phone" type="tel" required /></div></div>
            <div className="field"><label htmlFor="message">Your enquiry</label><textarea id="message" name="message" rows="4" required /></div>
            <button className="button" type="submit">Send enquiry <ArrowIcon /></button>
            {sent && <p className="form-success" role="status">Thank you. This demo form is ready to connect to your final enquiry service.</p>}
          </form>
        </div>
      </section>
      <section className="map-wrap" aria-label="Bodhi School location"><iframe title="Map showing Bodhi School in Pettah, Trivandrum" src="https://www.google.com/maps?q=Pettah%2C%20Thiruvananthapuram%2C%20Kerala%20695024&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></section>
    </>
  )
}

function Callout() {
  return <section className="callout"><div className="container callout-inner"><div><p className="eyebrow">Come meet us</p><h2>See how learning feels at Bodhi.</h2></div><Link className="button button-light" to="/contact">Plan your visit <ArrowIcon /></Link></div></section>
}
