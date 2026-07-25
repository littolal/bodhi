import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export function Seo({ title, description }) {
  useEffect(() => {
    document.title = `${title} | Bodhi School`
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
  }, [description, title])
  return null
}

export function ArrowIcon() {
  return (
    <span className="arrow-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  )
}

export function PhoneContact({ className = '' }) {
  const [showOptions, setShowOptions] = useState(false)
    const containerRef = useRef(null)

  useEffect(() => {
    if (!showOptions) return

    function handlePointerDown(event) {
      if (!containerRef.current?.contains(event.target)) {
        setShowOptions(false)
      }
    }

    document.addEventListener('mousedown', handlePointerDown)
    return () => document.removeEventListener('mousedown', handlePointerDown)
  }, [showOptions])

  function handleClick(event) {
    if (window.matchMedia('(max-width: 780px)').matches) {
      event.preventDefault()
      setShowOptions((value) => !value)
    }
  }

  return (
    <span ref={containerRef} className={className ? `phone-contact ${className}` : 'phone-contact'}>
      <a className="phone-contact-link" href="https://wa.me/919388709700?text=Hi%20there" target="_blank" rel="noreferrer" onClick={handleClick}>
        +91 938 870 9700
      </a>
      {showOptions && (
        <span className="phone-contact-options">
          <a href="tel:+919388709700">Call</a>
          <a href="https://wa.me/919388709700?text=Hi%20there" target="_blank" rel="noreferrer">WhatsApp</a>
        </span>
      )}
    </span>
  )
}

export function ButtonLink({ to, children, secondary = false }) {
  return <Link className={secondary ? 'button button-secondary' : 'button'} to={to}>{children}<ArrowIcon /></Link>
}

export function PageHero({ eyebrow, title, intro, image, children }) {
  return (
    <section className="page-hero">
      <div className="container page-hero-grid">
        <div className="page-hero-copy reveal">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="hero-intro">{intro}</p>
          {children}
        </div>
        {image && (
          <div className="hero-image-wrap reveal reveal-delay">
            <img src={image} alt="" />
            <span className="image-orbit" aria-hidden="true" />
          </div>
        )}
      </div>
    </section>
  )
}

export function SectionHeading({ eyebrow, title, text, align = 'left' }) {
  return (
    <div className={`section-heading section-heading-${align}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  )
}

export function FeatureGrid({ items }) {
  return (
    <div className="feature-grid">
      {items.map((item) => (
        <article className="feature-card" key={item.title}>
          {item.number && <span className="feature-number">{item.number}</span>}
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </article>
      ))}
    </div>
  )
}

export function QuoteBlock({ quote, author }) {
  return (
    <blockquote className="quote-block">
      <span className="quote-mark" aria-hidden="true">“</span>
      <p>{quote}</p>
      {author && <cite>{author}</cite>}
    </blockquote>
  )
}

export function PoperInstagramWidget() {
  useEffect(() => {
    const accountID = '375feabe0f1208b86e17dfd51ffec9d0'
    const scriptId = 'poper-js-script'
    const domain = "bodhischool.vercel.app"

    window.Poper = window.Poper || []
    window.Poper.push({ accountID, domain })

    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script')
      script.id = scriptId
      script.src = `https://app.poper.ai/share/poper.js?accountID=${accountID}&v=ms0p16c3`
      script.defer = true
      script.setAttribute('data-account-id', accountID)
      script.setAttribute('data-domain', domain)
      document.body.appendChild(script)
    }
  }, [])

  return (
    <div className="instagram-widget" aria-label="Latest from Instagram">
      <div className="instagram-widget-head">
        <div>
          <h2>Latest from Instagram</h2>
        </div>
      </div>
      <div className="instagram-widget-card instagram-widget-card-poper">
        <div className="poper-12711" />
      </div>
    </div>
  )
}
