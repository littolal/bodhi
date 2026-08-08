import { lazy } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { SiteLayout } from './components/SiteLayout'

const HomePage = lazy(() => import('./pages/HomePage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const WhyBodhiPage = lazy(() => import('./pages/WhyBodhiPage'))
const AdmissionPage = lazy(() => import('./pages/AdmissionPage'))
const FacilitiesPage = lazy(() => import('./pages/FacilitiesPage'))
const GalleryPage = lazy(() => import('./pages/GalleryPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="whybodhi" element={<WhyBodhiPage />} />
          <Route path="admission" element={<AdmissionPage />} />
          <Route path="facilities" element={<FacilitiesPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="index.html" element={<Navigate to="/" replace />} />
          <Route path="about.html" element={<Navigate to="/about" replace />} />
          <Route path="whybodhi.html" element={<Navigate to="/whybodhi" replace />} />
          <Route path="admission.html" element={<Navigate to="/admission" replace />} />
          <Route path="facilities.html" element={<Navigate to="/facilities" replace />} />
          <Route path="gallery.html" element={<Navigate to="/gallery" replace />} />
          <Route path="contact.html" element={<Navigate to="/contact" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
