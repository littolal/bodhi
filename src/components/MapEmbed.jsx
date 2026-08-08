import { useState } from 'react'

const MAP_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.0610788526246!2d76.92434437587146!3d8.49344259154806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bb9b254414bd%3A0xa9978280ab53845!2sBodhi%20Kindergarten!5e0!3m2!1sen!2sin!4v1784633642274!5m2!1sen!2sin&output=embed'

const MAP_LINK = 'https://maps.google.com/?q=Bodhi+Kindergarten+Pettah+Trivandrum'

export function MapEmbed() {
  const [active, setActive] = useState(false)

  return (
    <section className="map-wrap" aria-label="Bodhi School location">
      {active ? (
        <iframe
          title="Map showing Bodhi School in Pettah, Trivandrum"
          src={MAP_SRC}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      ) : (
        <div className="map-placeholder">
          <div className="map-placeholder-copy">
            <strong>Bodhi School on the map</strong>
            <span>PRRAP-21, Puthen Road, Pettah, Trivandrum</span>
          </div>
          <div className="map-placeholder-actions">
            <button className="button button-light" type="button" onClick={() => setActive(true)}>
              Load interactive map
            </button>
            <a className="map-external-link" href={MAP_LINK} target="_blank" rel="noreferrer">
              Open in Google Maps
            </a>
          </div>
        </div>
      )}
    </section>
  )
}
