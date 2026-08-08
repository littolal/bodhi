import facebookLogo from '../assets/Facebook_Logo_Primary.webp'
import instagramLogo from '../assets/Instagram_Glyph_Gradient.webp'
import contactHero from '../assets/Photos/hero/IMG_9875.webp'
import whatsappLogo from '../assets/Whatsapp Green.svg'
import { MapEmbed } from '../components/MapEmbed'
import { ArrowIcon, PageHero, PhoneContact, Seo } from '../components/UI'

export default function ContactPage() {
  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const message = `
    Dear Admissions Team,

    I would like to enquire about admission to Bodhi School for my child. Please find the details below:

    Student Name: ${formData.get('student')}
    Age: ${formData.get('age')}
    Class Seeking Admission: ${formData.get('class')}

    Parent/Guardian Name: ${formData.get('parent')}
    Email Address: ${formData.get('email')}
    Mobile Number: ${formData.get('phone')}

    Enquiry:
    ${formData.get('message')}

    Kindly review the above information and let me know the admission process, eligibility, and any further steps required.
    Thank you for your time and assistance. I look forward to your response.

  Regards,
  ${formData.get('parent')}
  `.trim()

    const whatsappWindow = window.open(`https://wa.me/919388709700?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
    if (whatsappWindow) {
      whatsappWindow.opener = null
    }
  }

  return (
    <>
      <Seo title="Contact" description="Contact Bodhi School in Pettah, Trivandrum for admissions, visits and general enquiries." />
      <PageHero eyebrow="Contact" title="Let’s begin with a conversation." intro="Ask about admission, arrange a visit or tell us what you would like to know." image={contactHero} />
      <section className="section">
        <div className="container contact-grid">
          <div className="contact-details">
            <p className="eyebrow">Visit or reach us</p>
            <h2>We’d be happy to hear from you.</h2>
            <address>
              Bodhi School<br />
              PRRAP-21, Puthen Road, Pettah<br />
              Trivandrum, Kerala 695024
            </address>
            <PhoneContact />
            <a href="mailto:admission@bodhischool.com">admission@bodhischool.com</a>
            <p>Visit our socials:</p>
            <div className="social-links">
              <a href="https://www.facebook.com/Bodhischool/" target="_blank" rel="noreferrer" aria-label="Facebook">
                <img className="social-icon" src={facebookLogo} alt="" width={128} height={128} loading="lazy" decoding="async" />
              </a>
              <a href="https://www.instagram.com/_bodhischool_/" target="_blank" rel="noreferrer" aria-label="Instagram">
                <img className="social-icon" src={instagramLogo} alt="" width={128} height={128} loading="lazy" decoding="async" />
              </a>
              <a href="https://wa.me/919388709700?text=Hi%20there" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <img className="social-icon" src={whatsappLogo} alt="" width={128} height={128} loading="lazy" decoding="async" />
              </a>
            </div>
            <p className="career-note">Love being around children? Send your resume to <a href="mailto:jobs@bodhischool.com">jobs@bodhischool.com</a>.</p>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="student">Name of student</label>
              <input id="student" name="student" required />
            </div>
            <div className="form-row">
              <div className="field">
                <label htmlFor="age">Age</label>
                <input id="age" name="age" inputMode="decimal" required />
              </div>
              <div className="field">
                <label htmlFor="class">Class sought</label>
                <input id="class" name="class" required />
              </div>
            </div>
            <div className="field">
              <label htmlFor="parent">Name of parent</label>
              <input id="parent" name="parent" required />
            </div>
            <div className="form-row">
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required />
              </div>
              <div className="field">
                <label htmlFor="phone">Mobile number</label>
                <input id="phone" name="phone" type="tel" required />
              </div>
            </div>
            <div className="field">
              <label htmlFor="message">Your enquiry</label>
              <textarea id="message" name="message" rows="4" required />
            </div>
            <button className="button" type="submit">Send enquiry <ArrowIcon /></button>
          </form>
        </div>
      </section>
      <MapEmbed />
    </>
  )
}
