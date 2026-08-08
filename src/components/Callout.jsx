import { Link } from 'react-router-dom'
import { ArrowIcon } from './UI'

export function Callout() {
  return (
    <section className="callout">
      <div className="container callout-inner">
        <div>
          <p className="eyebrow">Come meet us</p>
          <h2>See how learning feels at Bodhi.</h2>
        </div>
        <Link className="button button-light" to="/contact">
          Plan your visit <ArrowIcon />
        </Link>
      </div>
    </section>
  )
}
