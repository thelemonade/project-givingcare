import guides from "@/data/guides.json";
import GuideCard from "@/components/GuideCard";

export default function CareGuidePage() {
  const categories = [...new Set(guides.map(g => g.category))];
  return (
    <section className="section pageIntro">
      <p className="eyebrow">PROJECT GIVINGCARE CAREGUIDE</p>
      <h1>Choose what you need today.</h1>
      <p className="lead">Each guide provides a practical overview, key questions, checklists and links to trusted Singapore resources.</p>
      {categories.map(category => (
        <div key={category} className="categoryBlock">
          <h2>{category}</h2>
          <div className="guideGrid">
            {guides.filter(g => g.category === category).map(g => <GuideCard key={g.slug} guide={g} />)}
          </div>
        </div>
      ))}
    </section>
  );
}
