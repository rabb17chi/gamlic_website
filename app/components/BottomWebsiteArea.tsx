import Link from "next/link";

const sectionLinks = [
  { label: "Home", href: "#Intro" },
  { label: "Games", href: "#Products" },
  { label: "About", href: "#About" },
  // { label: "Contact", href: "#Contact" },
];

const resourceLinks = [
  { label: "News & Updates", href: "/news" },
  // { label: "Careers", href: "/careers" },
  // { label: "Press Kit", href: "/press" },
];

const socialLinks = [
  // { label: "Twitter / X", href: "https://twitter.com" },
  // { label: "Discord", href: "https://discord.com" },
  { label: "Instagram", href: "https://www.instagram.com/gamlic_studio" },
];

const BottomWebsiteArea = () => {
  return (
    <footer
      id="SiteMap"
      className="w-full border-t border-dark/10 transition-colors duration-500 dark:border-light/10 mt-20 md:mt-0"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[2.5fr_1fr_1fr]">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-dark/70 dark:text-light/70">
              Site Map
            </p>
            <h3 className="text-2xl font-semibold">Explore GAMLIC</h3>
            <p className="text-sm text-dark/70 dark:text-light/60">
              Where GAME meets REPUBLIC
            </p>
          </div>

          <nav className="space-y-3 text-sm" aria-label="On-page sections">
            <p className="text-xs uppercase tracking-[0.3em] text-dark/50 dark:text-light/50">
              Sections
            </p>
            <ul className="space-y-2">
              {sectionLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="transition-colors duration-200 hover:text-theme-test focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-test/60"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* <nav className="space-y-3 text-sm" aria-label="Resources">
            <p className="text-xs uppercase tracking-[0.3em] text-dark/50 dark:text-light/50">
              Resources
            </p>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="transition-colors duration-200 hover:text-theme-test focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-test/60"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav> */}

          <nav className="space-y-3 text-sm" aria-label="Community">
            <p className="text-xs uppercase tracking-[0.3em] text-dark/50 dark:text-light/50">
              Community
            </p>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors duration-200 hover:text-theme-test focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-test/60 tracking-wider"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col gap-4 border-t border-dark/10 pt-6 text-xs text-dark/60 dark:border-light/10 dark:text-light/60 md:flex-row md:items-center md:justify-between">
          <p className="text-center w-full">
            &copy; {new Date().getFullYear()} GAMLIC Studio. All rights
            reserved.
          </p>
          {/* <div className="flex flex-wrap gap-4">
            <Link href="/" className="hover:text-theme-test">
              Privacy
            </Link>
            <span className="text-dark/40 dark:text-light/40">/</span>
            <Link href="/" className="hover:text-theme-test">
              Terms
            </Link>
            <span className="text-dark/40 dark:text-light/40">/</span>
            <Link href="/" className="hover:text-theme-test">
              Support
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default BottomWebsiteArea;
