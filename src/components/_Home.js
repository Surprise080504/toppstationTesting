import React from "react";

import "../styling/style.css";
import "../styling/home.styles.scss";

const Home = (props) => {
  return (
    <>
      <img
        class="hero-bg position-absolute w-50"
        src="./images/bg.svg"
        alt="background"
      />
      <section className="banner-section">
        <div className="container pb-5">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="inner-text">
                <h1 className="main-txt-heading position-relative">
                  Enabling Entrepreneurs worldwide
                  <img
                    className="star-bg position-absolute"
                    src="images/star.svg"
                    alt="star"
                  />
                  <img
                    className="star-bg-2 position-absolute"
                    src="images/star.svg"
                    alt="star"
                  />
                  <img
                    className="design"
                    src="images/design.png"
                    alt="heading background"
                  />
                </h1>
                <p className="main-paragraph">
                  Discover benefits of building a business from a pro-business
                  environment, including how tax incentives, rule of law,
                  connectivity to other markets, strategic location and skilled
                  workforce benefit you regardless where you are.
                </p>
                <div className="search-article-block">
                  <input
                    type="text"
                    name="email"
                    value=""
                    placeholder="search article"
                  />
                  <button type="submit" href="#">
                    <img
                      style={{ width: "23px" }}
                      src="./images/search.svg"
                      alt="search"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img src="images/home-hero.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="blog-card__container py-sm-5 bg-light-shade">
        <div className="container">
          <div className="title--wrapper d-flex align-items-center">
            <img
              className="title-bg me-2"
              src="images/Rectangle.png"
              alt="heading-bg"
            />
            <h2 className="heading-2">Business Formation</h2>
          </div>
          <div className="row mt-4">
            <a href="#" className="col-md-4">
              <figure className="card-image">
                <img src="./images/card-1.png" alt="card image" />
              </figure>
              <a href="#" className="card-tag d-inline-block">
                Logo Design
              </a>
              <h3 className="heading-3 mt-3">
                What Traveling Greece For 2 Weeks Taught Me About Life
              </h3>
              <p className="card-date">Jun 21, 2021 • 11 min read</p>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
                mollis lectus vitae nulla malesuada amet purus sed. A
                condimentum tempus a egestas sodales diam cras.
              </p>
            </a>
            <a href="#" className="col-md-4">
              <figure className="card-image">
                <img src="./images/card-3.png" alt="card image" />
              </figure>
              <a href="#" className="card-tag d-inline-block">
                Logo Design
              </a>
              <h3 className="heading-3 mt-3">
                Many desktop publishing packages and web page
              </h3>
              <p className="card-date">Jun 21, 2021 • 11 min read</p>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
                mollis lectus vitae nulla malesuada amet purus sed. A
                condimentum tempus a egestas sodales diam cras.
              </p>
            </a>
            <a href="#" className="col-md-4">
              <figure className="card-image">
                <img src="./images/card-2.png" alt="card image" />
              </figure>
              <a href="#" className="card-tag d-inline-block">
                Logo Design
              </a>
              <h3 className="heading-3 mt-3">
                Many desktop publishing packages and web page
              </h3>
              <p className="card-date">Jun 21, 2021 • 11 min read</p>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
                mollis lectus vitae nulla malesuada amet purus sed. A
                condimentum tempus a egestas sodales diam cras.
              </p>
            </a>
          </div>
          <a href="#" className="btn d-flex align-items-center gap-3 mt-5">
            See More Business Formation
            <i class="far fa-arrow-right"></i>
          </a>
        </div>
      </section>

      <section className="highlighted__container py-5">
        <div className="container">
          <div className="row justify-content-center align-items-center gap-4">
            <div className="col-md-5">
              <h3 className="heading-3">
                Attorneys with You, Every Step of the Way
              </h3>
              <p className="paragraph mt-3">
                With an average of 15 years of experience and an average
                customer rating of 4.8 out of 5 stars, you can trust our network
                attorneys to give you the help you need.
              </p>
              <a href="#" className="btn cta mt-1 mt-md-3">
                Request a consultation
              </a>
            </div>
            <figure className="col-md-5">
              <img src="./images/highlight.png" alt="highlighted image" />
            </figure>
          </div>
        </div>
      </section>

      <section className="blog-card__container py-5 bg-light-shade">
        <div className="container">
          <div className="title--wrapper d-flex">
            <img
              className="title-bg me-2"
              src="images/Rectangle.png"
              alt="heading-bg"
            />
            <h2 className="heading-2">Business Management</h2>
          </div>
          <div className="row row-gap mt-4">
            <div className="col-lg-4 col-md-6">
              <figure className="card-image">
                <img src="./images/card-1.png" alt="card image" />
              </figure>
              <a href="#" className="card-tag d-inline-block">
                Logo Design
              </a>
              <h3 className="heading-3 mt-3">
                What Traveling Greece For 2 Weeks Taught Me About Life
              </h3>
              <p className="card-date">Jun 21, 2021 • 11 min read</p>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
                mollis lectus vitae nulla malesuada amet purus sed. A
                condimentum tempus a egestas sodales diam cras.
              </p>
            </div>
            <div className="col-lg-4 col-md-6">
              <figure className="card-image">
                <img src="./images/card-3.png" alt="card image" />
              </figure>
              <a href="#" className="card-tag d-inline-block">
                Logo Design
              </a>
              <h3 className="heading-3 mt-3">
                Many desktop publishing packages and web page
              </h3>
              <p className="card-date">Jun 21, 2021 • 11 min read</p>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
                mollis lectus vitae nulla malesuada amet purus sed. A
                condimentum tempus a egestas sodales diam cras.
              </p>
            </div>
            <div className="col-lg-4 col-md-12 row gap-4 ms-lg-auto">
              <div class="legal-question-outer col-md-5 col-lg-12">
                <h5 class="legal-main-heading">Have legal question?</h5>
                <p class="legal-main-p">
                  Get help from kimbocorp attorney when you need it.No expensive
                  hourly fee.No surprise pricing.
                </p>
                <a href="#" title="" class="legal-learn-more-btn">
                  Learn more
                </a>
                <img
                  src="images/Legal-background.png"
                  alt="Legal"
                  class="legal-question-image"
                />
              </div>
              <div class="tags-sec col-md-5 col-lg-12">
                <h5 class="tags-sec-main-heading">Topics</h5>
                <div class="row">
                  <a href="#" class="tags-sec-btn" title="">
                    NEW YEAR
                  </a>
                  <a href="#" class="tags-sec-btn" title="">
                    RESOLUTION
                  </a>
                  <a href="#" class="tags-sec-btn" title="">
                    HOLIDAY
                  </a>
                  <a href="#" class="tags-sec-btn" title="">
                    MOTIVATION
                  </a>
                  <a href="#" class="tags-sec-btn" title="">
                    DREAM
                  </a>
                  <a href="#" class="tags-sec-btn" title="">
                    VACATION
                  </a>
                </div>
              </div>
            </div>
          </div>
          <a href="#" className="btn d-flex align-items-center gap-3 mt-5">
            See More Business Management
            <i class="far fa-arrow-right"></i>
          </a>
        </div>
        <div className="dotted-border container mt-5"></div>
      </section>

      <section className="blog-card__container pb-5 bg-light-shade position-relative">
        <div className="container">
          <div className="title--wrapper d-flex">
            <img
              className="title-bg me-2"
              src="images/Rectangle.png"
              alt="heading-bg"
            />
            <h2 className="heading-2">Trademarks</h2>
          </div>
          <div className="row mt-4">
            <div className="col-md-4">
              <figure className="card-image">
                <img src="./images/card-1.png" alt="card image" />
              </figure>
              <a href="#" className="card-tag d-inline-block">
                Logo Design
              </a>
              <h3 className="heading-3 mt-3">
                What Traveling Greece For 2 Weeks Taught Me About Life
              </h3>
              <p className="card-date">Jun 21, 2021 • 11 min read</p>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
                mollis lectus vitae nulla malesuada amet purus sed. A
                condimentum tempus a egestas sodales diam cras.
              </p>
            </div>
            <div className="col-md-4">
              <figure className="card-image">
                <img src="./images/card-3.png" alt="card image" />
              </figure>
              <a href="#" className="card-tag d-inline-block">
                Logo Design
              </a>
              <h3 className="heading-3 mt-3">
                Many desktop publishing packages and web page
              </h3>
              <p className="card-date">Jun 21, 2021 • 11 min read</p>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
                mollis lectus vitae nulla malesuada amet purus sed. A
                condimentum tempus a egestas sodales diam cras.
              </p>
            </div>
            <div className="col-md-4">
              <figure className="card-image">
                <img src="./images/card-2.png" alt="card image" />
              </figure>
              <a href="#" className="card-tag d-inline-block">
                Logo Design
              </a>
              <h3 className="heading-3 mt-3">
                Many desktop publishing packages and web page
              </h3>
              <p className="card-date">Jun 21, 2021 • 11 min read</p>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
                mollis lectus vitae nulla malesuada amet purus sed. A
                condimentum tempus a egestas sodales diam cras.
              </p>
            </div>
          </div>
          <a href="#" className="btn d-flex align-items-center gap-3 mt-5">
            See More Trademarks
            <i class="far fa-arrow-right"></i>
          </a>
        </div>
        <img
          className="section-bg position-absolute d-none d-sm-block"
          src="./images/section-bg.png"
          alt="section background"
        />
        <div className="dotted-border container mt-5"></div>
      </section>

      <section className="blog-card__container pb-5 bg-light-shade position-relative">
        <div className="container">
          <div className="title--wrapper d-flex">
            <img
              className="title-bg me-2"
              src="images/Rectangle.png"
              alt="heading-bg"
            />
            <h2 className="heading-2">Equal Rights</h2>
          </div>
          <div className="row mt-4">
            <div className="col-md-4">
              <figure className="card-image">
                <img src="./images/card-1.png" alt="card image" />
              </figure>
              <a href="#" className="card-tag d-inline-block">
                Logo Design
              </a>
              <h3 className="heading-3 mt-3">
                What Traveling Greece For 2 Weeks Taught Me About Life
              </h3>
              <p className="card-date">Jun 21, 2021 • 11 min read</p>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
                mollis lectus vitae nulla malesuada amet purus sed. A
                condimentum tempus a egestas sodales diam cras.
              </p>
            </div>
            <div className="col-md-4">
              <figure className="card-image">
                <img src="./images/card-3.png" alt="card image" />
              </figure>
              <a href="#" className="card-tag d-inline-block">
                Logo Design
              </a>
              <h3 className="heading-3 mt-3">
                Many desktop publishing packages and web page
              </h3>
              <p className="card-date">Jun 21, 2021 • 11 min read</p>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
                mollis lectus vitae nulla malesuada amet purus sed. A
                condimentum tempus a egestas sodales diam cras.
              </p>
            </div>
            <div className="col-md-4">
              <figure className="card-image">
                <img src="./images/card-2.png" alt="card image" />
              </figure>
              <a href="#" className="card-tag d-inline-block">
                Logo Design
              </a>
              <h3 className="heading-3 mt-3">
                Many desktop publishing packages and web page
              </h3>
              <p className="card-date">Jun 21, 2021 • 11 min read</p>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
                mollis lectus vitae nulla malesuada amet purus sed. A
                condimentum tempus a egestas sodales diam cras.
              </p>
            </div>
          </div>
          <a href="#" className="btn d-flex align-items-center gap-3 mt-5">
            See More Equal Rights
            <i class="far fa-arrow-right"></i>
          </a>
        </div>
        <img
          className="section-bg position-absolute d-none d-sm-block"
          src="./images/section-bg.png"
          alt="section background"
        />
        <div className="dotted-border container mt-5"></div>
      </section>

      <section className="blog-card__container pb-5 bg-light-shade">
        <div className="container">
          <div className="title--wrapper d-flex">
            <img
              className="title-bg me-2"
              src="images/Rectangle.png"
              alt="heading-bg"
            />
            <h2 className="heading-2">Tips and Trends</h2>
          </div>
          <div className="row mt-4">
            <div className="col-md-4">
              <figure className="card-image">
                <img src="./images/card-1.png" alt="card image" />
              </figure>
              <a href="#" className="card-tag d-inline-block">
                Logo Design
              </a>
              <h3 className="heading-3 mt-3">
                What Traveling Greece For 2 Weeks Taught Me About Life
              </h3>
              <p className="card-date">Jun 21, 2021 • 11 min read</p>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
                mollis lectus vitae nulla malesuada amet purus sed. A
                condimentum tempus a egestas sodales diam cras.
              </p>
            </div>
            <div className="col-md-4">
              <figure className="card-image">
                <img src="./images/card-3.png" alt="card image" />
              </figure>
              <a href="#" className="card-tag d-inline-block">
                Logo Design
              </a>
              <h3 className="heading-3 mt-3">
                Many desktop publishing packages and web page
              </h3>
              <p className="card-date">Jun 21, 2021 • 11 min read</p>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
                mollis lectus vitae nulla malesuada amet purus sed. A
                condimentum tempus a egestas sodales diam cras.
              </p>
            </div>
            <div className="col-md-4">
              <figure className="card-image">
                <img src="./images/card-2.png" alt="card image" />
              </figure>
              <a href="#" className="card-tag d-inline-block">
                Logo Design
              </a>
              <h3 className="heading-3 mt-3">
                Many desktop publishing packages and web page
              </h3>
              <p className="card-date">Jun 21, 2021 • 11 min read</p>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
                mollis lectus vitae nulla malesuada amet purus sed. A
                condimentum tempus a egestas sodales diam cras.
              </p>
            </div>
          </div>
          <a href="#" className="btn d-flex align-items-center gap-3 mt-5">
            See More Tips and Trends
            <i class="far fa-arrow-right"></i>
          </a>
        </div>
      </section>

      <section className="last-section">
        <div className="last-sec-after-img-one">
          <div className="last-sec-after-img-two">
            <div className="container">
              <div className="row g-5">
                <div className="col-md-4">
                  <h4 className="last-sec-inner-heading">Arbitration</h4>
                  <p className="last-sec-inner-p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Diam mollis lectus vitae nulla malesuada amet purus sed. A
                    condimentum tempus a egestas sodales diam cras.
                  </p>
                  <div className="see-more-sources-outer business-management">
                    <button
                      type="submit"
                      href="#"
                      className="see-more-resources-btn"
                    >
                      <a href="#" title="">
                        See More Arbitration
                      </a>
                    </button>
                  </div>
                </div>
                <div className="col-md-4">
                  <h4 className="last-sec-inner-heading">Budget</h4>
                  <p className="last-sec-inner-p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Diam mollis lectus vitae nulla malesuada amet purus sed. A
                    condimentum tempus a egestas sodales diam cras.
                  </p>
                  <div className="see-more-sources-outer business-management">
                    <button
                      type="submit"
                      href="#"
                      className="see-more-resources-btn"
                    >
                      <a href="#" title="">
                        See More Budgets
                      </a>
                    </button>
                  </div>
                </div>
                <div className="col-md-4">
                  <h4 className="last-sec-inner-heading">Employment Law</h4>
                  <p className="last-sec-inner-p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Diam mollis lectus vitae nulla malesuada amet purus sed. A
                    condimentum tempus a egestas sodales diam cras.
                  </p>
                  <div className="see-more-sources-outer business-management">
                    <button
                      type="submit"
                      href="#"
                      className="see-more-resources-btn"
                    >
                      <a href="#" title="">
                        See More Employment Law
                      </a>
                    </button>
                  </div>
                </div>
                <div className="col-md-4">
                  <h4 className="last-sec-inner-heading">
                    Government programs
                  </h4>
                  <p className="last-sec-inner-p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Diam mollis lectus vitae nulla malesuada amet purus sed. A
                    condimentum tempus a egestas sodales diam cras.
                  </p>
                  <div className="see-more-sources-outer business-management">
                    <button
                      type="submit"
                      href="#"
                      className="see-more-resources-btn"
                    >
                      <a href="#" title="">
                        See More Government programs
                      </a>
                    </button>
                  </div>
                </div>
                <div className="col-md-4">
                  <h4 className="last-sec-inner-heading">Starting a Pte Ltd</h4>
                  <p className="last-sec-inner-p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Diam mollis lectus vitae nulla malesuada amet purus sed. A
                    condimentum tempus a egestas sodales diam cras.
                  </p>
                  <div className="see-more-sources-outer business-management">
                    <button
                      type="submit"
                      href="#"
                      className="see-more-resources-btn"
                    >
                      <a href="#" title="">
                        See More Starting a Pte Ltd
                      </a>
                    </button>
                  </div>
                </div>
                <div className="col-md-4">
                  <h4 className="last-sec-inner-heading">Trademarks</h4>
                  <p className="last-sec-inner-p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Diam mollis lectus vitae nulla malesuada amet purus sed. A
                    condimentum tempus a egestas sodales diam cras.
                  </p>
                  <div className="see-more-sources-outer business-management">
                    <button
                      type="submit"
                      href="#"
                      className="see-more-resources-btn"
                    >
                      <a href="#" title="">
                        See More Trademarks
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
