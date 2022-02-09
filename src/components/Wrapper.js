import React, { useState } from "react";

import "../styling/header.styles.scss";
import "../styling/footer.styles.scss";

const Wrapper = (props) => {
  const [isActive, setIsActive] = useState(true);

  const closeCookies = () => {
    setIsActive(false);
  };

  return (
    <>
      <header className="header_new py-2 position-relative">
        <nav
          className="
          navbar navbar-light navbar-expand-md
          bg-faded
          justify-content-center
        "
        >
          <div className="container d-flex mobile-grid gap-2">
            <a href="/" className="navbar-brand text-center">
              <img src="images/logo.svg" className="nav-logo" alt="Logo" />
            </a>
            <button
              className="navbar-toggler order-first order-md-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mynavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="header-chat-btn  d-md-none">
              <a href="/about-us" title="" className="d-inline-block">
                Chat With Us
              </a>
            </div>
            <div className="collapse navbar-collapse w-100" id="mynavbar">
              <ul className="navbar-nav w-100 justify-content-center">
                <li className="nav-item active">
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./about-us">
                    About Us
                  </a>
                </li>
                <li className="nav-item dropdown position-static">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    Topics
                  </a>
                  <div className="dropdown-menu megamenu" role="menu">
                    <div className="container">
                      <div className="row g-3 p-md-5 pt-3 pb-3" id="accordion">
                        <div className="col-lg-4 col-12">
                          <div className="col-megamenu pb-3">
                            <h6
                              className="title d-flex justify-content-between"
                              data-bs-toggle="collapse"
                              href="#collapseOne"
                            >
                              B
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#000"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-minus"
                              >
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#000"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-plus"
                              >
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                              </svg>
                            </h6>
                            <ul
                              id="collapseOne"
                              className="list-unstyled show"
                              data-bs-parent="#accordion"
                            >
                              <li>
                                <a href="/search/Business Accounting">
                                  Business Accounting
                                </a>
                              </li>
                              <li>
                                <a href="/search/Business law">Business law</a>
                              </li>
                              <li>
                                <a href="/search/Business Taxes">
                                  Business Taxes
                                </a>
                              </li>
                              <li>
                                <a href="/search/Budget">Budget</a>
                              </li>
                              <li>
                                <a href="/search/Board Dynamics">
                                  Board Dynamics
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-megamenu">
                            <h6
                              className="title d-flex justify-content-between"
                              data-bs-toggle="collapse"
                              href="#collapseTwo"
                            >
                              C
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#000"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-minus"
                              >
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#000"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-plus"
                              >
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                              </svg>
                            </h6>
                            <ul
                              className="list-unstyled"
                              id="collapseTwo"
                              data-bs-parent="#accordion"
                            >
                              <li>
                                <a href="/search/Closing your business">
                                  Closing your business
                                </a>
                              </li>
                              <li>
                                <a href="/search/Contract Law">Contract Law</a>
                              </li>
                              <li>
                                <a href="/search/Copyrights">Copyrights</a>
                              </li>
                              <li>
                                <a href="/search/Corporate Law">
                                  Corporate Law
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-4 col-12">
                          <div className="col-megamenu pb-3">
                            <h6
                              className="title d-flex justify-content-between"
                              data-bs-toggle="collapse"
                              href="#collapseThree"
                            >
                              E
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#000"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-minus"
                              >
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#000"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-plus"
                              >
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                              </svg>
                            </h6>
                            <ul
                              className="list-unstyled"
                              id="collapseThree"
                              data-bs-parent="#accordion"
                            >
                              <li>
                                <a href="/search/Employment Law">
                                  Employment Law
                                </a>
                              </li>
                              <li>
                                <a href="/search/Equal Rights">Equal Rights</a>
                              </li>
                              <li>
                                <a href="/search/Employment Passes">
                                  Employment Passes
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-megamenu pb-3">
                            <h6
                              className="title d-flex justify-content-between"
                              data-bs-toggle="collapse"
                              href="#collapseFour"
                            >
                              F
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#000"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-minus"
                              >
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#000"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-plus"
                              >
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                              </svg>
                            </h6>
                            <ul
                              className="list-unstyled"
                              id="collapseFour"
                              data-bs-parent="#accordion"
                            >
                              <li>
                                <a href="/search/Forming a Partnership">
                                  Forming a Partnership
                                </a>
                              </li>
                              <li>
                                <a href="/search/Forming a Sole Proprietorship">
                                  Forming a Sole Proprietorship
                                </a>
                              </li>
                              <li>
                                <a href="/search/Forming a Pte Ltd company">
                                  Forming a Pte Ltd company
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-megamenu">
                            <h6
                              className="title d-flex justify-content-between"
                              data-bs-toggle="collapse"
                              href="#collapseFive"
                            >
                              G
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#000"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-minus"
                              >
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#000"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-plus"
                              >
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                              </svg>
                            </h6>
                            <ul
                              className="list-unstyled"
                              id="collapseFive"
                              data-bs-parent="#accordion"
                            >
                              <li>
                                <a href="/search/Getting Government Help">
                                  Getting Government Help
                                </a>
                              </li>
                              <li>
                                <a href="/search/Government Agencies">
                                  Government Agencies
                                </a>
                              </li>
                              <li>
                                <a href="/search/Government Programs">
                                  Government Programs
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-4 col-12">
                          <div className="col-megamenu">
                            <h6
                              className="title d-flex justify-content-between"
                              data-bs-toggle="collapse"
                              href="#collapseSix"
                            >
                              H
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#000"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-minus"
                              >
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#000"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-plus"
                              >
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                              </svg>
                            </h6>
                            <ul
                              className="list-unstyled"
                              id="collapseSix"
                              data-bs-parent="#accordion"
                            >
                              <li>
                                <a href="/search/Health">Health</a>
                              </li>
                              <li>
                                <a href="/search/Hiring a Confounder">
                                  Hiring a Confounder
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-megamenu mt-3">
                            <h6
                              className="title d-flex justify-content-between"
                              data-bs-toggle="collapse"
                              href="#collapseSeven"
                            >
                              I
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#000"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-minus"
                              >
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#000"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-plus"
                              >
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                              </svg>
                            </h6>
                            <ul
                              className="list-unstyled"
                              id="collapseSeven"
                              data-bs-parent="#accordion"
                            >
                              <li>
                                <a href="/search/Intellectual Property Basics">
                                  Intellectual Property Basics
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-megamenu mt-3">
                            <h6
                              className="title d-flex justify-content-between"
                              data-bs-toggle="collapse"
                              href="#collapseEight"
                            >
                              M
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#000"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-minus"
                              >
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#000"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-plus"
                              >
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                              </svg>
                            </h6>
                            <ul
                              className="list-unstyled"
                              id="collapseEight"
                              data-bs-parent="#accordion"
                            >
                              <li>
                                <a href="/search/Managing your Business">
                                  Managing your Business
                                </a>
                              </li>
                              <li>
                                <a href="/search/IP collateralization">
                                  IP collateralization
                                </a>
                              </li>
                              <li>
                                <a href="/search/Starting a Business">
                                  Marketing your Business
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-megamenu mt-3">
                            <h6
                              className="title d-flex justify-content-between"
                              data-bs-toggle="collapse"
                              href="#collapseNine"
                            >
                              S
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#000"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-minus"
                              >
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#000"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-plus"
                              >
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                              </svg>
                            </h6>
                            <ul
                              className="list-unstyled"
                              id="collapseNine"
                              data-bs-parent="#accordion"
                            >
                              <li>
                                <a href="/search/Sole Proprietorships">
                                  Sole Proprietorships
                                </a>
                              </li>
                              <li>
                                <a href="/search/Starting a Business">
                                  Starting a Business
                                </a>
                              </li>
                              <li>
                                <a href="/search/Starting a Pte Ltd company">
                                  Starting a Pte Ltd company
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="socials-container  d-flex align-items-center gap-2 gap-lg-3 w-50">
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=https://www.toppstation.com"
                className="d-flex align-items-center justify-content-center"
              >
                <img src="./images/facebook.svg" alt="Facebook" />
              </a>
              <a
                href="https://twitter.com/intent/tweet?url=https://www.toppstation.com&text=Join Toppstation today to have access to our latest tweets."
                className="d-flex align-items-center justify-content-center"
              >
                <img src="./images/twitter.svg" alt="Instagram" />
              </a>
              <a
                href="https://www.linkedin.com/shareArticle?mini=true&url=https://www.toppstation.com&title=Kimbocorp - Toppstation&summary=Discover benefits of building a business from a pro-business environment, including how tax incentives, rule of law, connectivity to other markets, strategic location and skilled workforce benefit you regardless where you are.&source="
                className="d-flex align-items-center justify-content-center"
              >
                <img src="./images/linkedin.svg" alt="Twitter" />
              </a>
              <a
                href="https://api.whatsapp.com/send?text=Join Toppstation today to have access to our latest news.%0ahttps://www.toppstation.com"
                className="d-flex align-items-center justify-content-center"
              >
                <img src="./images/whatsapp.svg" alt="Whatsapp" />
              </a>
              <a
                href="mailto:?&subject=Enabling Entrepreneurs worldwide&body=https://www.toppstation.com"
                className="d-flex align-items-center justify-content-center"
              >
                <img src="./images/gmail.svg" alt="Youtube" />
              </a>
            </div>
            <div className="header-chat-btn d-none d-md-block">
              <a href="/about-us" title="">
                Chat With Us
              </a>
            </div>
          </div>
        </nav>
      </header>
      {props.children}
      <footer className="footer-main footer">
        <a href="#" title="" className="bottom-to-top-btn">
          <i className="fas fa-chevron-up"></i>
          <span>TOP</span>
        </a>
        {isActive ? (
          <>
            <div className="cookies__container container d-flex align-items-center justify-content-between gap-3 pt-5 pb-2 flex-column flex-sm-row">
              <button className="close--btn" onClick={closeCookies}>
                <img src="./images/close.svg" alt="close button" />
              </button>
              <p className="cookies--text m-0">
                By clicking accept cookies you agree to our use of cookies and
                other tracking technologies in accordance with our
                <a href="#" className="cookies--page">
                  &nbsp;Cookie Policy.
                </a>
              </p>
              <button
                className="accept--btn text-nowrap"
                onClick={closeCookies}
              >
                Accept Cookies
              </button>
            </div>
            <div className="footer--border my-4">&nbsp;</div>
          </>
        ) : null}

        <div className="container d-flex justify-content-between align-items-center flex-column flex-xl-row ">
          <figure>
            <img src="./images/logo.svg" alt="logo" />
          </figure>
          <div className="footer--links d-flex gap-3 gap-md-5 flex-wrap">
            <a className="link" href="./about-us">
              About us
            </a>
            <a className="link" href="./Affiliate">
              Affiliates
            </a>
            <a className="link" href="./JoinNetwork">
              Join our Network
            </a>
            <a className="link" href="./Contact">
              Contact us
            </a>
            <a className="link" href="./FAQ">
              FAQs
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Wrapper;
