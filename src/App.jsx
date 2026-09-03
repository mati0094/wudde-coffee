import { useState } from 'react'
import './App.css'

function App() {
  const [menu, setMenu] = useState('all')
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const menuItems = [
    { name: 'Wude house blend', detail: 'dark chocolate / orange / almond', price: 'ETB 180', category: 'coffee' },
    { name: 'Cold cloud', detail: 'espresso / vanilla cream / sea salt', price: 'ETB 240', category: 'coffee' },
    { name: 'Cardamom bun', detail: 'laminated dough / pearl sugar', price: 'ETB 200', category: 'bakery' },
    { name: 'Strawberry matcha', detail: 'stone-ground matcha / oat / berry', price: 'ETB 280', category: 'coffee' },
    { name: 'Olive oil cake', detail: 'citrus / rosemary / crème fraîche', price: 'ETB 220', category: 'bakery' },
  ]

  const visibleItems = menu === 'all' ? menuItems : menuItems.filter((item) => item.category === menu)

  function handleSubscribe(event) {
    event.preventDefault()
    if (email.trim()) setSubscribed(true)
  }

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Wude Coffee home">WUDE COFFEE<span>·</span></a>
        <nav aria-label="Main navigation">
          <a href="#menu">Menu</a>
          <a href="#story">Our story</a>
          <a href="#visit">Visit</a>
        </nav>
        <a className="header-cta" href="#visit">Find us <span>↗</span></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Coffee, community & good company <span>✳</span></p>
          <h1>A little<br /><em>more</em> Wude.</h1>
          <p className="hero-intro">A neighborhood coffee house for slow mornings, sharp ideas, and the people you are glad to run into.</p>
          <a className="text-link" href="#menu">See what’s brewing <span>↓</span></a>
        </div>
        <div className="hero-image-wrap">
          <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85" alt="Fresh coffee being poured into a ceramic cup" />
          <div className="image-note">Est. 2018 <span>—</span> East side, all heart</div>
        </div>
        <div className="hero-stamp" aria-hidden="true">W<br />C</div>
      </section>

      <section className="ticker" aria-label="Today's cafe hours">
        <span>Open today 7am—4pm</span><i>✳</i><span>Roasted in-house</span><i>✳</i><span>Walk-ins welcome</span><i>✳</i><span>Open today 7am—4pm</span>
      </section>

      <section className="menu-section" id="menu">
        <div className="section-heading">
          <div><p className="eyebrow">The good stuff</p><h2>Made for the<br /><em>in-between.</em></h2></div>
          <p className="section-aside">Our menu moves with the market and the mood. Always thoughtful, never fussy.</p>
        </div>
        <div className="menu-tabs" role="tablist" aria-label="Menu categories">
          {['all', 'coffee', 'bakery'].map((tab) => <button key={tab} className={menu === tab ? 'active' : ''} onClick={() => setMenu(tab)} role="tab" aria-selected={menu === tab}>{tab}</button>)}
        </div>
        <div className="menu-grid">
          {visibleItems.map((item) => <article className="menu-item" key={item.name}><div><h3>{item.name}</h3><p>{item.detail}</p></div><strong>{item.price}</strong></article>)}
        </div>
        <div className="menu-actions"><a className="dark-button" href="tel:+251911111111">Order now <span>↗</span></a><a className="outline-link" href="#visit">Download full menu <span>↗</span></a></div>
      </section>

      <section className="story-section" id="story">
        <div className="story-image"><img src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1200&q=85" alt="The warm interior of Wude Coffee House" /></div>
        <div className="story-copy"><p className="eyebrow">A place to land</p><h2>Come as you are.<br /><em>Stay a while.</em></h2><p>Wude is a bright room, a good record, and a table that’s yours for as long as you need it. We started with a tiny roaster and a big soft spot for our community.</p><a className="text-link" href="#visit">Meet the people behind Wude <span>→</span></a></div>
      </section>

      <section className="visit-section" id="visit">
        <div><p className="eyebrow">Come through</p><h2>See you<br /><em>soon?</em></h2></div>
        <div className="visit-details"><div><span>Where</span><p>Bahir Dar, Tana<br />Ethiopia</p></div><div><span>When</span><p>Mon—Fri 7am—4pm<br />Sat—Sun 8am—5pm</p></div><div><span>Contact</span><p><a href="tel:+251911111111">+251 911 111 111</a><br /><a href="mailto:hello@wuddecoffee.com">hello@wuddecoffee.com</a></p></div><a className="dark-button" href="https://maps.google.com/?q=Bahir+Dar,Tana,Ethiopia" target="_blank" rel="noreferrer">Get directions <span>↗</span></a></div>
      </section>

      <footer><a className="wordmark" href="#top">WUDE COFFEE<span>·</span></a><p>Good coffee, no bad vibes.<br /><a href="mailto:hello@wuddecoffee.com">hello@wuddecoffee.com</a><br /><a href="tel:+251911111111">+251 911 111 111</a></p><div className="footer-socials" aria-label="Social media links"><a href="https://facebook.com/wuddecoffee" target="_blank" rel="noreferrer" aria-label="Wude Coffee on Facebook" title="Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V4h-3c-3.3 0-5 1.9-5 5v3H6v4h3v8h4v-8h3.4l.6-4H13V9c0-.7.3-1 1-1Z" /></svg></a><a href="https://tiktok.com/@wuddecoffee" target="_blank" rel="noreferrer" aria-label="Wude Coffee on TikTok" title="TikTok"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 3c.4 2.4 1.8 3.8 4 4v3.8c-1.5.1-2.8-.3-4-1v6.6a6.6 6.6 0 1 1-5.7-6.5v3.9a2.7 2.7 0 1 0 1.7 2.6V3H16Z" /></svg></a><a href="https://instagram.com/wuddecoffee" target="_blank" rel="noreferrer" aria-label="Wude Coffee on Instagram" title="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A4.5 4.5 0 1 1 12 16.5a4.5 4.5 0 0 1 0-9Zm0 2A2.5 2.5 0 1 0 12 14.5a2.5 2.5 0 0 0 0-5ZM17.5 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" /></svg></a><a href="https://x.com/wuddecoffee" target="_blank" rel="noreferrer" aria-label="Wude Coffee on X" title="X"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.2 2H22l-8.3 9.5L23.5 22h-7.6l-6-7.7L3.2 22H0l8.9-10.2L.5 2h7.8l5.4 7L18.2 2Zm-1.3 18h2.1L6.9 3.9H4.6L16.9 20Z" /></svg></a></div><form onSubmit={handleSubscribe}>{subscribed ? <span className="success">You’re on the list. ✳</span> : <><input type="email" placeholder="Your email for good news" aria-label="Email address" value={email} onChange={(event) => setEmail(event.target.value)} required /><button type="submit" aria-label="Subscribe">↗</button></>}</form><small>© 2026 WUDE COFFEE</small></footer>
    </main>
  )
}

export default App
