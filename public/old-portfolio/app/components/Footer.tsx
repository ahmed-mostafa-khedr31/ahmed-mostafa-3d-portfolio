export default function Footer() {
  return (
    <div className="container-fluid">
      <footer>
        <div className="art-copy">© 2026 Ahmed Mostafa</div>
        <div>
        Download{" "}
          <a
            href="/Ahmed_Mostafa_Senior_FrontEnd_Developer.pdf"
            target="_blank"
            download
            data-no-swup
            rel="noreferrer"
          >
             My Resume (PDF)
          </a>
        </div>
      </footer>
    </div>
  );
}
