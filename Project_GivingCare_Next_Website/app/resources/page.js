const tools = [
  ["Emergency information sheet","One-page summary of diagnoses, medicines, allergies and contacts."],
  ["Appointment question planner","Prepare the most important questions before a consultation."],
  ["Home safety checklist","Review common risks room by room."],
  ["Respite planning sheet","Plan what another caregiver needs to know before taking over."]
];

export default function ResourcesPage() {
  return (
    <section className="section pageIntro">
      <p className="eyebrow">DOWNLOAD CENTRE</p>
      <h1>Practical caregiver tools.</h1>
      <p className="lead">These resources are currently shown as templates. Printable PDF versions can be added after partner review.</p>
      <div className="guideGrid">
        {tools.map(([title, desc], i) => (
          <article className="guideCard" key={title}>
            <p className="kicker">TOOL {String(i+1).padStart(2,"0")}</p>
            <h3>{title}</h3>
            <p>{desc}</p>
            <span className="comingSoon">Printable version coming soon</span>
          </article>
        ))}
      </div>
    </section>
  );
}
