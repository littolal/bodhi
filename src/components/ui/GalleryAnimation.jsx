import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

export function ExpandableGallery({ sections, className = '' }) {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(null)
  const closeButtonRef = useRef(null)
  const swipeStartRef = useRef(null)

  const images = useMemo(() => (
    sections.flatMap((section) => (
      section.photos.map((photo) => ({
        image: photo.image,
        section: section.title,
      }))
    ))
  ), [sections])

  const selectedImage = selectedIndex === null ? null : images[selectedIndex]

  const closeImage = useCallback(() => {
    setSelectedIndex(null)
  }, [])

  const showPrevious = useCallback(() => {
    setSelectedIndex((value) => (value - 1 + images.length) % images.length)
  }, [images.length])

  const showNext = useCallback(() => {
    setSelectedIndex((value) => (value + 1) % images.length)
  }, [images.length])

  function getFlexValue(index) {
    if (hoveredIndex === null) return 1
    return hoveredIndex === index ? 2 : 0.62
  }

  function handlePointerDown(event) {
    event.currentTarget.setPointerCapture(event.pointerId)
    swipeStartRef.current = {
      pointerId: event.pointerId,
      x: event.clientX,
      y: event.clientY,
    }
  }

  function releasePointer(event) {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
  }

  function handlePointerUp(event) {
    const start = swipeStartRef.current
    swipeStartRef.current = null

    if (!start || start.pointerId !== event.pointerId) return

    const deltaX = event.clientX - start.x
    const deltaY = event.clientY - start.y

    releasePointer(event)

    if (Math.abs(deltaX) < 50 || Math.abs(deltaX) < Math.abs(deltaY)) return
    if (deltaX < 0) {
      showNext()
      return
    }
    showPrevious()
  }

  useEffect(() => {
    if (selectedIndex === null) return

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        event.preventDefault()
        closeImage()
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        showPrevious()
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault()
        showNext()
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    closeButtonRef.current?.focus()

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [closeImage, selectedIndex, showNext, showPrevious])

  if (images.length === 0) return null

  return (
    <div className={className ? `expandable-gallery ${className}` : 'expandable-gallery'}>
      {sections.map((section, sectionIndex) => {
        const sectionOffset = sections
          .slice(0, sectionIndex)
          .reduce((total, item) => total + item.photos.length, 0)

        return (
          <article className="expandable-gallery-section" key={section.title}>
            <div className="gallery-section-head">
              <h2>{section.title}</h2>
            </div>
            <div className="expandable-gallery-row" aria-label={`${section.title} gallery`}>
              {section.photos.map((photo, photoIndex) => {
                const imageIndex = sectionOffset + photoIndex

                return (
                  <motion.button
                    key={`${section.title}-${photo.image}`}
                    type="button"
                    className="expandable-gallery-card"
                    style={{ flex: 1 }}
                    animate={{ flex: getFlexValue(imageIndex) }}
                    transition={{ duration: 0.42, ease: 'easeInOut' }}
                    onFocus={() => setHoveredIndex(imageIndex)}
                    onBlur={() => setHoveredIndex(null)}
                    onMouseEnter={() => setHoveredIndex(imageIndex)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => setSelectedIndex(imageIndex)}
                    aria-label={`Open ${section.title} image ${photoIndex + 1}`}
                  >
                    <img src={photo.image} alt={`${section.title} ${photoIndex + 1}`} loading="lazy" />
                    <motion.span
                      aria-hidden="true"
                      className="expandable-gallery-shade"
                      initial={{ opacity: 0.22 }}
                      animate={{ opacity: hoveredIndex === imageIndex ? 0 : 0.26 }}
                      transition={{ duration: 0.25 }}
                    />
                  </motion.button>
                )
              })}
            </div>
          </article>
        )
      })}

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="expandable-gallery-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Gallery viewer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeImage}
          >
            <button
              ref={closeButtonRef}
              type="button"
              className="expandable-gallery-control expandable-gallery-close"
              onClick={closeImage}
              aria-label="Close gallery viewer"
            >
              <X aria-hidden="true" />
            </button>

            {images.length > 1 && (
              <button
                type="button"
                className="expandable-gallery-control expandable-gallery-prev"
                onClick={(event) => {
                  event.stopPropagation()
                  showPrevious()
                }}
                aria-label="Previous image"
              >
                <ChevronLeft aria-hidden="true" />
              </button>
            )}

            <motion.figure
              key={selectedImage.image}
              className="expandable-gallery-figure"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.24 }}
              onClick={(event) => event.stopPropagation()}
              onPointerDown={handlePointerDown}
              onPointerUp={handlePointerUp}
              onPointerCancel={(event) => {
                swipeStartRef.current = null
                releasePointer(event)
              }}
            >
              <img src={selectedImage.image} alt="Glimpses of Bodhi" />
              <figcaption>
                <span>Glimpses of Bodhi</span>
                <strong>{selectedIndex + 1} / {images.length}</strong>
              </figcaption>
            </motion.figure>

            {images.length > 1 && (
              <button
                type="button"
                className="expandable-gallery-control expandable-gallery-next"
                onClick={(event) => {
                  event.stopPropagation()
                  showNext()
                }}
                aria-label="Next image"
              >
                <ChevronRight aria-hidden="true" />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
