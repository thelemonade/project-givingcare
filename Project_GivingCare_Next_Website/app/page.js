import Link from "next/link";
import guides from "@/data/guides.json";
import GuideCard from "@/components/GuideCard";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div>
          <p className="eyebrow">PROJECT GIVINGCARE</p>
          <h1>Supporting caregivers through knowledge, community and care.</h1>
          <p className="heroCopy">A student-led initiative from NUS Yong Loo Lin School of Medicine, creating practical and accessible support for caregivers in Singapore.</p>
          <div className="actions">
            <Link className="button primary" href="/careguide/">Explore CareGuide</Link>
            <Link className="button secondary" href="/carefest/">Learn about CareFest</Link>
          </div>
        </div>
        <div className="logoPanel">
          <img src="/project-givingcare-logo.jpg" alt="Project GivingCare logo" />
          <p>For caregivers, with care.</p>
        </div>
      </section>

      <section className="section soft">
        <div className="sectionHeading">
          <p className="eyebrow">WHY WE EXIST</p>
          <h2>No caregiver should have to navigate the journey alone.</h2>
        </div>
        <div className="threeGrid">
          <article className="featureCard"><span>01</span><h3>Awareness</h3><p>Helping caregivers recognise their own needs and understand the support available.</p></article>
          <article className="featureCard"><span>02</span><h3>Preparedness</h3><p>Making future planning, home care and difficult conversations easier to approach.</p></article>
          <article className="featureCard"><span>03</span><h3>Community</h3><p>Connecting caregivers with professionals, organisations and one another.</p></article>
        </div>
      </section>

      <section className="section">
        <div className="sectionHeading">
          <p className="eyebrow">FEATURED CAREGUIDES</p>
          <h2>Practical guidance for the questions caregivers ask most.</h2>
        </div>
        <div className="guideGrid">
          {guides.slice(0, 4).map((guide) => <GuideCard key={guide.slug} guide={guide} />)}
        </div>
        <Link className="button primary" href="/careguide/">Browse all guides</Link>
      </section>

      <section className="section dark">
        <div className="eventSplit">
          <div>
            <p className="eyebrow light">CAREFEST 2026</p>
            <h2>Learn, reflect and connect.</h2>
            <p className="eventDate">Saturday, 12 September 2026 · 9.00 am–5.00 pm</p>
            <p>CareFest brings caregivers, community organisations, professionals, youths and the public together through CareStage, CareTrail and CareMarket.</p>
            <Link className="button lightButton" href="/carefest/">View CareFest</Link>
          </div>
          <div className="zoneList">
            <div><strong>CareStage</strong><span>Talks and conversations</span></div>
            <div><strong>CareTrail</strong><span>Interactive caregiver journeys</span></div>
            <div><strong>CareMarket</strong><span>Community resources and organisations</span></div>
          </div>
        </div>
      </section>
    </>
  );
}
