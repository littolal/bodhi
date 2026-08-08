import admissionHero from '../assets/Photos/hero/IMG_0183.webp'
import { Callout } from '../components/Callout'
import { ButtonLink, PageHero, SectionHeading, Seo } from '../components/UI'
import { admissionSteps, ageGroups } from '../data/content'

export default function AdmissionPage() {
  return (
    <>
      <Seo title="Admission" description="View Bodhi School’s admission process, age eligibility and enrolment information." />
      <PageHero eyebrow="Admission" title="A thoughtful beginning to your child’s Bodhi journey." intro="Our admission process helps families and teachers understand the child, choose the right placement and begin with confidence." image={admissionHero}>
        <ButtonLink to="/contact">Plan a school visit</ButtonLink>
      </PageHero>
      <section className="section tinted-section">
        <div className="container split-grid">
          <SectionHeading eyebrow="Academics" title="Conceptual Learning for a Changing World" />
          <div className="prose">
            <p>At Bodhi, we follow the IGCSE (International General
              Certificate of Secondary Education) curriculum, providing a globally
              recognised and concept-based learning approach.</p>
            <p>We proudly offer admissions for learners from Pre-KG through Grade X. Our academic framework focuses on:</p>
            <ul>
              <li>Strong conceptual understanding over rote learning</li>
              <li>Inquiry-based and experiential learning methods</li>
              <li>Developing critical thinking and problem-solving skills</li>
              <li>Encouraging independent learning and curiosity</li>
              <li>Real-world application of knowledge</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="The process" title="Seven clear steps, one shared goal." />
          <ol className="process-list">
            {admissionSteps.map((step, index) => (
              <li key={step}><span>{index + 1}</span><p>{step}</p></li>
            ))}
          </ol>
        </div>
      </section>
      <section className="section tinted-section">
        <div className="container admission-grid">
          <div>
            <p className="eyebrow">Age eligibility</p>
            <h2>Finding the right starting point.</h2>
            <p>Depending on the child’s assessment, an appropriate class may be recommended to keep them engaged and challenged.</p>
          </div>
          <div className="age-table" role="table" aria-label="Minimum age and eligible class">
            {ageGroups.map(([age, grade]) => (
              <div className="age-row" role="row" key={age}>
                <span role="cell">{age}</span>
                <strong role="cell">{grade}</strong>
              </div>
            ))}
            <p>Add one year to the minimum age for every grade increment.</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container current-students">
          <p className="eyebrow">Current students</p>
          <h2>Continuity, with care.</h2>
          <p>The school automatically enrols current students who have paid the admission fee for the following year after a compatible placement has been discussed with the parent. Re-enrolment is subject to conduct, academic performance and accounts being in good standing.</p>
          <p className="inclusive-note">All applications are accepted without regard to ethnicity, religion, gender or national origin.</p>
        </div>
      </section>
      <Callout />
    </>
  )
}
