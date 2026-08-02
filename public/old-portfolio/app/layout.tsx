import type { Metadata } from "next";
import Script from "next/script";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Menu";
import ThemeToggle from "./components/ThemeToggle";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ahmed-resume.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ahmed Mostafa | Senior Front-End Developer",
    template: "%s | Ahmed Mostafa",
  },
  description:
    "Senior Front-End Developer with 5+ years of experience in React and Next.js. Portfolio, work history, and selected projects.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Ahmed Mostafa | Senior Front-End Developer",
    description:
      "Senior Front-End Developer with 5+ years of experience in React and Next.js. Portfolio, work history, and selected projects.",
    siteName: "Ahmed Mostafa",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Mostafa | Senior Front-End Developer",
    description:
      "Senior Front-End Developer with 5+ years of experience in React and Next.js. Portfolio, work history, and selected projects.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" data-theme="dark">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="theme-color" content="#2B2B35" />
        <link
          rel="shortcut icon"
          href="/favicon.ico"
          type="image/x-icon"
          sizes="200x200"
        />
        <link rel="stylesheet" href="/css/plugins/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/plugins/font-awesome.min.css" />
        <link rel="stylesheet" href="/css/plugins/swiper.min.css" />
        <link rel="stylesheet" href="/css/plugins/fancybox.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>
        <div className="art-app">
          <div className="art-mobile-top-bar"></div>
          <div className="art-app-wrapper">
            <div className="art-app-container">
              <Header />

              <div className="art-content">
                <div className="art-curtain"></div>
                <div className="art-top-bg" style={{ backgroundImage: "url(/img/bg.jpg)" }}>
                  <div className="art-top-bg-overlay"></div>
                </div>
                <div className="transition-fade" id="swup">
                  <div id="scrollbar" className="art-scroll-frame">
                    <div className="scroll-content">
                      {children}
                      <Footer />
                    </div>
                  </div>
                </div>
              </div>

              <div className="art-menu-bar">
                <div className="art-menu-bar-frame">
                  <div className="art-menu-bar-header">
                    <div className="art-menu-bar-btn">
                      <span></span>
                    </div>
                  </div>
                  <div className="art-current-page"></div>
                  <div className="art-scroll-frame">
                    <Menu />
                    {/* <div className="art-theme-toggle-wrap" style={{ position: "fixed", bottom: "20px", flexDirection: "column" }}>
                      <ThemeToggle />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="art-preloader">
            <div className="art-preloader-content">
              <h4>Ahmed  Portfolio</h4>
              <div id="preloader" className="art-preloader-load"></div>
            </div>
          </div>
        </div>

        <Script src="/js/plugins/jquery.min.js" strategy="beforeInteractive" />
        <Script src="/js/plugins/anime.min.js" strategy="afterInteractive" />
        <Script src="/js/plugins/swiper.min.js" strategy="afterInteractive" />
        <Script src="/js/plugins/progressbar.min.js" strategy="afterInteractive" />
        <Script
          src="/js/plugins/smooth-scrollbar.min.js"
          strategy="afterInteractive"
        />
        <Script src="/js/plugins/overscroll.min.js" strategy="afterInteractive" />
        <Script src="/js/plugins/typing.min.js" strategy="afterInteractive" />
        <Script src="/js/plugins/isotope.min.js" strategy="afterInteractive" />
        <Script src="/js/plugins/fancybox.min.js" strategy="afterInteractive" />
        <Script src="/js/plugins/swup.min.js" strategy="afterInteractive" />
        <Script src="/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
