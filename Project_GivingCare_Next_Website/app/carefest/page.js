export default function CareFestPage() {
  return (
    <>
      <section className="eventHero">
        <div>
          <p className="eyebrow">PROJECT GIVINGCARE PRESENTS</p>
          <h1>CareFest 2026</h1>
          <p className="eventDateLarge">Saturday, 12 September 2026</p>
          <p className="eventTimeLarge">9.00 am–5.00 pm</p>
          <p className="lead">A public-facing caregiver festival for learning, empathy, discovery and reflection.</p>
        </div>
        <img src="/project-givingcare-logo.jpg" alt="Project GivingCare logo" />
      </section>

      <section className="section soft">
        <div className="sectionHeading">
          <p className="eyebrow">EXPLORE CAREFEST</p>
          <h2>Three spaces, one shared purpose.</h2>
        </div>
        <div className="threeGrid">
          <article className="featureCard"><span>01</span><h3>CareStage</h3><p>Accessible talks on caregiver wellbeing, planning, systems and healthcare.</p></article>
          <article className="featureCard"><span>02</span><h3>CareTrail</h3><p>Interactive journeys centred on elderly care, terminal illness and children with special needs.</p></article>
          <article className="featureCard"><span>03</span><h3>CareMarket</h3><p>Community organisations, inclusive enterprises and practical resources.</p></article>
        </div>
      </section>

      <section className="section">
        <div className="sectionHeading">
          <p className="eyebrow">PROGRAMME</p>
          <h2>Full programme coming soon.</h2>
          <p>Venue, speakers, session times, booth map and partner directory will be added when confirmed.</p>
        </div>
      </section>
    </>
  );
}
