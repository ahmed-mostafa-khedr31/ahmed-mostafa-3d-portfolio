export default function Header() {
  return (
    <div className="art-info-bar">
      <div className="art-info-bar-frame">
        <div className="art-info-bar-header">
          <div className="art-info-bar-btn">
            <i className="fas fa-ellipsis-v"></i>
          </div>
        </div>

        <div className="art-header">
          <div className="art-avatar">
            <a
              data-fancybox="avatar"
              data-no-swup
              href="/ahmed.png"
              className="art-avatar-curtain"
            >
              <img src="/ahmed.png" alt="avatar" />
              <i className="fas fa-expand"></i>
            </a>
            <div className="art-lamp-light">
              <div className="art-available-lamp"></div>
            </div>
          </div>
          <h5 className="art-name mb-10">Ahmed Mostafa</h5>
          <div className="art-sm-text">
            Senior Front-end Developer <br />
            (React js / Next js)
          </div>
        </div>

        <div id="scrollbar2" className="art-scroll-frame">
          <div className="art-table p-15-15">
            <ul>
              <li className="d-block">
                <h6 className="mr-2 mb-1">Mobile:</h6>
                <p>
                  <a href="tel:+201012345678">
                    <i className="fa fa-phone"></i> +201012345678
                  </a>
                </p>
              </li>
              <li className="d-block pb-1">
                <h6 className="mr-2 mb-1">Email:</h6>
                <span>
                  <a href="mailto:ahmedmostafakhedr31@gmail.com">
                    <i className="fa fa-envelope"></i>{" "}
                    ahmedmostafakhedr31@gmail.com
                  </a>
                </span>
              </li>
              <li className="d-block pb-1">
                <h6 className="mr-2 mb-1">City:</h6>
                <span>
                  <i className="fa fa-location-arrow"></i> Cairo , Egypt
                </span>
              </li>
            </ul>
          </div>

          <div className="art-ls-divider"></div>

          <div className="art-ls-divider"></div>

          <ul className="art-knowledge-list p-15-0">
            <li>Html</li>
            <li>Css, Responsive Design</li>
            <li>Bootstrap, Material UI, Tailwind</li>
            <li>Js(ES6), TypeScript</li>
            <li>jQuery</li>
            <li>Restful, GraphQL API’s</li>
            <li>Git, GitHub</li>
            <li>Unit Testing</li>
            <li>React JS</li>
            <li>Formik ,Yup Validation</li>
            <li>Redux, Thunk</li>
            <li>Next JS</li>
          </ul>

          <div className="art-ls-divider"></div>

          <div className="art-links-frame p-15-15">
            <a
              href="/Ahmed_Mostafa_Senior_FrontEnd_Developer.pdf"
              className="art-link"
              download
              data-no-swup
              target="_blank"
              rel="noreferrer"
            >
              Download cv <i className="fas fa-download"></i>
            </a>
          </div>
        </div>

        <div className="art-ls-social justify-content-center">
          <a
            href="https://www.linkedin.com/in/ahmed-mostafa-777b64218"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://www.facebook.com/ahmedmostafadeveloper"
            className="mx-3"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://github.com/ahmed-mostafa-khedr31"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
