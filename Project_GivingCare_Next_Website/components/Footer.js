export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerBrand">
        <img src="/project-givingcare-logo.jpg" alt="" />
        <div><strong>Project GivingCare</strong><span>NUS Yong Loo Lin School of Medicine</span></div>
      </div>
      <div className="footerLinks">
        <a href="mailto:givingcarecg@gmail.com">givingcarecg@gmail.com</a>
        <a href="https://www.instagram.com/projgivingcare/" target="_blank" rel="noreferrer">@projgivingcare</a>
      </div>
      <p>General information only. This website does not replace medical, legal, financial or emergency advice.</p>
    </footer>
  );
}
