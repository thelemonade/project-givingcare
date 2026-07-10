const partnerTypes = [
  ["Caregiver support","CaringSG, caregiver networks and peer support organisations"],
  ["Palliative and hospice care","Singapore Hospice Council, HCA Hospice and other hospice providers"],
  ["Disability support","SG Enable, early intervention and disability service organisations"],
  ["Mental wellbeing","Community mental health and caregiver wellbeing organisations"],
  ["Eldercare","Community care, home care and active ageing organisations"]
];

export default function PartnersPage() {
  return (
    <section className="section pageIntro">
      <p className="eyebrow">PARTNERS</p>
      <h1>Working across the caregiving ecosystem.</h1>
      <p className="lead">This page can be updated with confirmed CareFest and CareGuide partners, logos and service information.</p>
      <div className="threeGrid">
        {partnerTypes.map(([title, text]) => (
          <article className="featureCard" key={title}><h3>{title}</h3><p>{text}</p></article>
        ))}
      </div>
    </section>
  );
}
