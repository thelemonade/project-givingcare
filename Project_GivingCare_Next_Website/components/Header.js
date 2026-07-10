import Link from "next/link";

export default function Header() {
  return (
    <header className="siteHeader">
      <div className="navWrap">
        <Link className="brand" href="/">
          <img src="/project-givingcare-logo.jpg" alt="Project GivingCare logo" />
          <div><strong>Project GivingCare</strong><span>For caregivers, with care.</span></div>
        </Link>
        <nav className="nav">
          <Link href="/about/">About</Link>
          <Link href="/careguide/">CareGuide</Link>
          <Link href="/carefest/">CareFest</Link>
          <Link href="/resources/">Resources</Link>
          <Link href="/partners/">Partners</Link>
          <Link href="/contact/">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
