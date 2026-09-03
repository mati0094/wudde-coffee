import './App.css'

const services = [
  { number: '01', title: 'Brand strategy', text: 'Positioning, identity, and a point of view built to last.' },
  { number: '02', title: 'Digital presence', text: 'Web experiences that turn attention into meaningful action.' },
  { number: '03', title: 'Growth direction', text: 'Clear campaigns and smart systems that move your business forward.' },
]

function Arrow() {
  return <span className="arrow" aria-hidden="true">↗</span>
}

function App() {
  return (
    <main id="top">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Elijah Digital Marketing home"><span className="brand-mark">E</span><span>Elijah<span className="brand-light">Digital</span></span></a>
        <nav aria-label="Main navigation"><a href="#services">Services</a><a href="#approach">Approach</a><a href="#contact">Contact</a></nav>
        <a className="header-link" href="#contact">Start a project <Arrow /></a>
      </header>

      <section className="hero">
        <div className="hero-content"><p className="eyebrow">Independent digital studio <span className="dot">●</span> Est. 2024</p><h1>Make your<br /><em>mark.</em></h1><p className="hero-copy">Elijah is a digital marketing studio for ambitious brands ready to move with clarity, character, and purpose.</p><a className="primary-link" href="#contact">Let’s work together <Arrow /></a></div>
        <div className="hero-art" aria-label="Abstract editorial artwork" role="img"><div className="art-circle" /><div className="art-panel" /><div className="art-sun" /><div className="art-line" /><p className="art-caption">Strategy / Story / Scale</p><p className="art-index">01 <span>/</span> 03</p></div>
        <div className="hero-foot"><span>Scroll to explore</span><span className="scroll-line" /></div>
      </section>

      <section className="statement" id="approach"><p className="eyebrow">The Elijah perspective</p><h2>Good marketing feels<br /><em>like momentum.</em></h2><p className="statement-copy">The best work does more than look beautiful. It gives people a reason to believe, remember, and choose you. We find the sharpest version of your story and make it impossible to overlook.</p></section>

      <section className="services" id="services"><div className="section-intro"><p className="eyebrow">What we do</p><h2>Built for<br /><em>bold moves.</em></h2></div><div className="service-list">{services.map((service) => <article className="service" key={service.number}><span className="service-number">{service.number}</span><h3>{service.title}</h3><p>{service.text}</p><Arrow /></article>)}</div></section>

      <section className="contact" id="contact"><div><p className="eyebrow">Have a good feeling?</p><h2>Let’s make<br /><em>something matter.</em></h2></div><div className="contact-side"><p>Tell us where you want to go. We’ll help you find the clearest way there.</p><a className="contact-email" href="mailto:hello@elijahdigital.co">hello@elijahdigital.co <Arrow /></a><div className="contact-meta"><span>Based in Addis Ababa</span><span>Working everywhere</span></div></div></section>

      <footer><a className="brand" href="#top"><span className="brand-mark">E</span><span>Elijah<span className="brand-light">Digital</span></span></a><p>Clarity for ambitious brands.</p><div className="footer-links"><a href="#services">Services</a><a href="#contact">Instagram</a><a href="#contact">LinkedIn</a></div><small>© 2024 Elijah Digital Marketing</small></footer>
    </main>
  )
}

export default App
