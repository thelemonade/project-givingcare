import guides from "@/data/guides.json";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export default function GuidePage({ params }) {
  const guide = guides.find((item) => item.slug === params.slug);
  if (!guide) notFound();

  return (
    <article className="section guideArticle">
      <p className="eyebrow">{guide.category}</p>
      <h1>{guide.title}</h1>
      <p className="lead">{guide.summary}</p>
      <p className="readingTime">{guide.readingTime} read</p>

      <aside className="keyBox">
        <h2>Key points</h2>
        <ul>{guide.keyPoints.map(point => <li key={point}>{point}</li>)}</ul>
      </aside>

      {guide.sections.map(section => (
        <section key={section.heading} className="articleSection">
          <h2>{section.heading}</h2>
          {section.body.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        </section>
      ))}

      <section className="articleSection">
        <h2>Official resources</h2>
        <div className="officialLinks">
          {guide.officialLinks.map(link => (
            <a key={link.url} href={link.url} target="_blank" rel="noreferrer">{link.label} ↗</a>
          ))}
        </div>
      </section>

      <div className="disclaimer">This guide provides general information. Eligibility, legal requirements and service details may change. Check the official source and seek professional advice for individual circumstances.</div>
    </article>
  );
}
