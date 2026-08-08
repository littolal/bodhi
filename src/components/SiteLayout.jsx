import { Suspense, useEffect, useRef, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import footerLogo from '../assets/Bodhi Logo Big Footer.webp'
import facebookLogo from '../assets/Facebook_Logo_Secondary.webp'
import instagramLogo from '../assets/Instagram_Glyph_White.svg'
import whatsappLogo from '../assets/Whatsapp white.svg'
import { navItems } from '../data/content'
import { PhoneContact } from './UI'

function Header() {
  const [open, setOpen] = useState(false)
  const headerRef = useRef(null)
  const toggleRef = useRef(null)
  const navRef = useRef(null)

  useEffect(() => {
    function handlePointerDown(event) {
      if (!open) {
        return
      }

      const target = event.target
      if (headerRef.current?.contains(target) && !navRef.current?.contains(target) && !toggleRef.current?.contains(target)) {
        setOpen(false)
      } else if (!headerRef.current?.contains(target)) {
        setOpen(false)
      }
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  return (
    <header className="site-header" ref={headerRef}>
      <div className="container header-inner">
        <Link className="brand" to="/" aria-label="Bodhi School home">
          <img src={footerLogo} alt="Bodhi School" width={900} height={219} decoding="async" />
        </Link>
        <button
          ref={toggleRef}
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="menu-toggle-bar" />
          <span className="menu-toggle-bar" />
          <span className="menu-toggle-bar" />
          <span className="sr-only">Toggle navigation</span>
        </button>
        <nav ref={navRef} id="primary-navigation" className={open ? 'primary-nav is-open' : 'primary-nav'} aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'} onClick={() => setOpen(false)}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <PhoneContact className="header-call" />
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <img className="footer-logo" src={footerLogo} alt="Bodhi School" />
          <p>Empowering young minds through a foundation of conceptual learning.</p>
        </div>
        <div>
          <p className="footer-label">Explore</p>
          <nav className="footer-nav" aria-label="Footer navigation">
            {navItems.slice(1).map((item) => <Link key={item.to} to={item.to}>{item.label}</Link>)}
          </nav>
        </div>
        <div>
          <p className="footer-label">Visit us</p>
          <address>PRRAP-21, Puthen Road, Pettah<br />Trivandrum, Kerala 695024</address>
          <a href="mailto:admission@bodhischool.com">admission@bodhischool.com</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Bodhi School</span>
        <div className="social-links">
          <a href="https://www.facebook.com/Bodhischool/" target="_blank" rel="noreferrer" aria-label="Facebook">
            <img className="social-icon" src={facebookLogo} alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/_bodhischool_/" target="_blank" rel="noreferrer" aria-label="Instagram">
            <img className="social-icon" src={instagramLogo} alt="Instagram" />
          </a>
          <a href="https://wa.me/919388709700?text=Hi%20there" target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <img className="social-icon" src={whatsappLogo} alt="WhatsApp" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export function SiteLayout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content">
        <Suspense fallback={<div className="route-fallback" role="status" aria-live="polite">Loading…</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
