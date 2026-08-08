import galleryHero from '../assets/Photos/hero/IMG_0440.webp'
import { PageHero, PoperInstagramWidget, Seo } from '../components/UI'
import { ExpandableGallery } from '../components/ui/GalleryAnimation'
import { gallerySections } from '../data/gallery'

export default function GalleryPage() {
  return (
    <>
      <Seo title="Gallery" description="See moments from field visits, sports day, annual day, picnics and science exhibitions at Bodhi School." />
      <PageHero eyebrow="Gallery" title="School life, in all its colour." intro="A glimpse of children learning, moving, making and celebrating together." image={galleryHero} />
      <section className="section">
        <ExpandableGallery sections={gallerySections} className="container" />
      </section>
      <section className="gallery-section">
        <div className="container instagram-widget-shell">
          <PoperInstagramWidget />
          <div className="instagram-widget-footer-bar" aria-hidden="true" />
        </div>
      </section>
    </>
  )
}
