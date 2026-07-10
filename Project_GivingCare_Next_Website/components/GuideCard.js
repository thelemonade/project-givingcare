import Link from "next/link";

export default function GuideCard({ guide }) {
  return (
    <article className="guideCard">
      <p className="kicker">{guide.category}</p>
      <h3>{guide.title}</h3>
      <p>{guide.summary}</p>
      <div className="cardMeta"><span>{guide.readingTime}</span></div>
      <Link className="textLink" href={`/careguide/${guide.slug}/`}>Read guide →</Link>
    </article>
  );
}
