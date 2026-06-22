import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export function Seo({ title, description }) {
  useEffect(() => {
    document.title = `${title} | Bodhi School`
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
  }, [description, title])
  return null
}

export function ArrowIcon() {
  return <span aria-hidden="true">↗</span>
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
