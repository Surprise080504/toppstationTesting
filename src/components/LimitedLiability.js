import React from "react"

import '../styling/limited-liability.styles.css'

const LimitedLiability = (props) => {
  return (
    <>
<div className="container-fluid hero__container">
      <div className="container pb-5">
        <div className="row">
          <div className="link__container mt-5 col-md-8 col-sm-12">
            <a href="#" className="link">Business /</a>
            <a href="#" className="link active">LLC</a>
          </div>
          <div className="container mt-4">
            <div className="row flex-column-reverse flex-md-row">
              <div className="col-md-6 col-sm-12">
                <h1 className="heading-1 mt-5">
                  Start your business with confidence
                </h1>
                <p className="subtitle mt-4">
                  Whether you're ready to form or still deciding, we've got your
                  back. Learn if an LLC is right for you.
                </p>
                <a href="#" className="hero--btn d-inline-block mt-4 ms-sm-3">
                  Our experts are available 24/7
                </a>
              </div>
              <div className="col-md-6 col-sm-12">
                <img
                  src="./images/hero.jpg"
                  alt="Hero image"
                  className="img-fluid d-block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <main>
      <div className="reasons__container py-5 bg-light">
        <div className="container">
          <h2 className="heading-2 text-center mb-4">
            Why Start a private limited Company
          </h2>
          <div className="row mt-5">
            <div className="col-md-4 col-sm-12">
              <div className="text-center">
                <figure className="p-3 d-inline-block mx-auto">
                  <img src="./images/reason-1.png" alt="Reason Image" />
                </figure>
              </div>
              <h4 className="heading-4 text-center">Attract Investor</h4>
              <p className="paragraph text-center">
                Raise funds by appealing to investors who may prefer Private
                Limited companies for their ability to offer stock.
              </p>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="text-center">
                <figure className="p-3 d-inline-block mx-auto">
                  <img src="./images/reason-2.png" alt="Reason Image" />
                </figure>
              </div>
              <h4 className="heading-4 text-center">Entice employees</h4>
              <p className="paragraph text-center">
                Win over - and keep - top talent by giving them ordinary and
                preference shares..
              </p>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="text-center">
                <figure className="p-3 d-inline-block mx-auto">
                  <img src="./images/reason-1.png" alt="Reason Image" />
                </figure>
              </div>
              <h4 className="heading-4 text-center">Look more official​</h4>
              <p className="paragraph text-center">
                Private Limited companies have more clout - which can make it
                easier to do business with other companies.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="process__container py-5">
        <div className="container">
          <h2 className="heading-2">How to Start LLC</h2>
          <div className="row mt-5">
            <div className="col-md-6 col-sm-12">
              <img
                src="./images/process.jpg"
                alt="Process Image"
                height="300px"
                width="100%"
              />
            </div>
            <div className="col-md-6 col-sm-12 mt-4 mt-md-0">
              <p className="paragraph">
                1 Tell us your business name if you've picked one
              </p>
              <p className="paragraph">2 Answer a few questions</p>
              <p className="paragraph">3 We'll complete and file your paperwork</p>
            </div>
          </div>
        </div>
      </div>
      <div className="stats__container py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12 mt-3 mt-md-0">
              <h3 className="heading-3 text-light">3.5 million+</h3>
              <h4 className="heading-4 text-light">estate planning docs</h4>
              <p className="paragraph mt-3">
                Protecting loved ones by helping customers create 3.5 million+
                estate planning documents.
              </p>
            </div>
            <div className="col-md-4 col-sm-12 mt-3 mt-md-0">
              <h3 className="heading-3 text-light">2 million+</h3>
              <h4 className="heading-4 text-light">businesses</h4>
              <p className="paragraph mt-3">
                Helping entrepreneurs turn ideas into businesses over 2 million
                times.
              </p>
            </div>
            <div className="col-md-4 col-sm-12 mt-3 mt-md-0">
              <h3 className="heading-3 text-light">20+ years</h3>
              <h4 className="heading-4 text-light">leading the industry</h4>
              <p className="paragraph mt-3">
                Giving customers access to trusted, affordable legal help for
                over two decades.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="faq__container py-5">
        <div className="container">
          <h2 className="heading-2 text-center">Frequently asked questions</h2>
          <h3 className="heading-3 mt-5 d-flex align-items-center">
            <span className="circle d-inline-block me-2">&nbsp;</span>
            Top questions
          </h3>
          <div className="accordion mt-3" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  How are Toptal visual designers different?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nascetur imperdiet at a augue ullamcorper. Leo faucibus
                  feugiat rutrum aenean. Nisi, lectus aliquet aliquam
                  consectetur augue praesent. Lorem vulputate orci eget mi, sed
                  pulvinar. Ornare etiam erat volutpat tempor fringilla mi. Elit
                  a blandit faucibus est, dui interdum ut amet. Adipiscing
                  feugiat vel at posuere in. Pellentesque volutpat
                  vestibulum.Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Nascetur imperdiet at a augue ullamcorper. Leo faucibus
                  feugiat rutrum aenean. Nisi, lectus aliquet aliquam
                  consectetur augue praesent. Lorem vulputate orci eget mi, sed
                  pulvinar. Ornare etiam erat volutpat tempor fringilla mi. Elit
                  a blandit faucibus est, dui interdum ut amet. Adipiscing
                  feugiat vel at posuere in. Pellentesque volutpat vestibulum.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="true"
                  aria-controls="collapseTwo"
                >
                  Can I hire visual designers in less than 48 hours through
                  Toptal?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nascetur imperdiet at a augue ullamcorper. Leo faucibus
                  feugiat rutrum aenean. Nisi, lectus aliquet aliquam
                  consectetur augue praesent. Lorem vulputate orci eget mi, sed
                  pulvinar. Ornare etiam erat volutpat tempor fringilla mi. Elit
                  a blandit faucibus est, dui interdum ut amet. Adipiscing
                  feugiat vel at posuere in. Pellentesque volutpat
                  vestibulum.Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Nascetur imperdiet at a augue ullamcorper. Leo faucibus
                  feugiat rutrum aenean. Nisi, lectus aliquet aliquam
                  consectetur augue praesent. Lorem vulputate orci eget mi, sed
                  pulvinar. Ornare etiam erat volutpat tempor fringilla mi. Elit
                  a blandit faucibus est, dui interdum ut amet. Adipiscing
                  feugiat vel at posuere in. Pellentesque volutpat vestibulum.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="true"
                  aria-controls="collapseThree"
                >
                  What is the no-risk trial period for Toptal visual designers?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nascetur imperdiet at a augue ullamcorper. Leo faucibus
                  feugiat rutrum aenean. Nisi, lectus aliquet aliquam
                  consectetur augue praesent. Lorem vulputate orci eget mi, sed
                  pulvinar. Ornare etiam erat volutpat tempor fringilla mi. Elit
                  a blandit faucibus est, dui interdum ut amet. Adipiscing
                  feugiat vel at posuere in. Pellentesque volutpat
                  vestibulum.Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Nascetur imperdiet at a augue ullamcorper. Leo faucibus
                  feugiat rutrum aenean. Nisi, lectus aliquet aliquam
                  consectetur augue praesent. Lorem vulputate orci eget mi, sed
                  pulvinar. Ornare etiam erat volutpat tempor fringilla mi. Elit
                  a blandit faucibus est, dui interdum ut amet. Adipiscing
                  feugiat vel at posuere in. Pellentesque volutpat vestibulum.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="true"
                  aria-controls="collapseFour"
                >
                  What is the no-risk trial period for Toptal visual designers?
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nascetur imperdiet at a augue ullamcorper. Leo faucibus
                  feugiat rutrum aenean. Nisi, lectus aliquet aliquam
                  consectetur augue praesent. Lorem vulputate orci eget mi, sed
                  pulvinar. Ornare etiam erat volutpat tempor fringilla mi. Elit
                  a blandit faucibus est, dui interdum ut amet. Adipiscing
                  feugiat vel at posuere in. Pellentesque volutpat
                  vestibulum.Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Nascetur imperdiet at a augue ullamcorper. Leo faucibus
                  feugiat rutrum aenean. Nisi, lectus aliquet aliquam
                  consectetur augue praesent. Lorem vulputate orci eget mi, sed
                  pulvinar. Ornare etiam erat volutpat tempor fringilla mi. Elit
                  a blandit faucibus est, dui interdum ut amet. Adipiscing
                  feugiat vel at posuere in. Pellentesque volutpat vestibulum.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFive">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="true"
                  aria-controls="collapseFive"
                >
                  What is the no-risk trial period for Toptal visual designers?
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nascetur imperdiet at a augue ullamcorper. Leo faucibus
                  feugiat rutrum aenean. Nisi, lectus aliquet aliquam
                  consectetur augue praesent. Lorem vulputate orci eget mi, sed
                  pulvinar. Ornare etiam erat volutpat tempor fringilla mi. Elit
                  a blandit faucibus est, dui interdum ut amet. Adipiscing
                  feugiat vel at posuere in. Pellentesque volutpat
                  vestibulum.Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Nascetur imperdiet at a augue ullamcorper. Leo faucibus
                  feugiat rutrum aenean. Nisi, lectus aliquet aliquam
                  consectetur augue praesent. Lorem vulputate orci eget mi, sed
                  pulvinar. Ornare etiam erat volutpat tempor fringilla mi. Elit
                  a blandit faucibus est, dui interdum ut amet. Adipiscing
                  feugiat vel at posuere in. Pellentesque volutpat vestibulum.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingSix">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                  aria-expanded="true"
                  aria-controls="collapseSix"
                >
                  What is the no-risk trial period for Toptal visual designers?
                </button>
              </h2>
              <div
                id="collapseSix"
                className="accordion-collapse collapse"
                aria-labelledby="headingSix"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nascetur imperdiet at a augue ullamcorper. Leo faucibus
                  feugiat rutrum aenean. Nisi, lectus aliquet aliquam
                  consectetur augue praesent. Lorem vulputate orci eget mi, sed
                  pulvinar. Ornare etiam erat volutpat tempor fringilla mi. Elit
                  a blandit faucibus est, dui interdum ut amet. Adipiscing
                  feugiat vel at posuere in. Pellentesque volutpat
                  vestibulum.Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Nascetur imperdiet at a augue ullamcorper. Leo faucibus
                  feugiat rutrum aenean. Nisi, lectus aliquet aliquam
                  consectetur augue praesent. Lorem vulputate orci eget mi, sed
                  pulvinar. Ornare etiam erat volutpat tempor fringilla mi. Elit
                  a blandit faucibus est, dui interdum ut amet. Adipiscing
                  feugiat vel at posuere in. Pellentesque volutpat vestibulum.
                </div>
              </div>
            </div>
            <h3 className="heading-3 mt-5 d-flex align-items-center">
              <span className="circle d-inline-block me-2">&nbsp;</span>
              Top questions
            </h3>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingSeven">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSeven"
                  aria-expanded="true"
                  aria-controls="collapseSeven"
                >
                  What is the no-risk trial period for Toptal visual designers?
                </button>
              </h2>
              <div
                id="collapseSeven"
                className="accordion-collapse collapse"
                aria-labelledby="headingSeven"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nascetur imperdiet at a augue ullamcorper. Leo faucibus
                  feugiat rutrum aenean. Nisi, lectus aliquet aliquam
                  consectetur augue praesent. Lorem vulputate orci eget mi, sed
                  pulvinar. Ornare etiam erat volutpat tempor fringilla mi. Elit
                  a blandit faucibus est, dui interdum ut amet. Adipiscing
                  feugiat vel at posuere in. Pellentesque volutpat
                  vestibulum.Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Nascetur imperdiet at a augue ullamcorper. Leo faucibus
                  feugiat rutrum aenean. Nisi, lectus aliquet aliquam
                  consectetur augue praesent. Lorem vulputate orci eget mi, sed
                  pulvinar. Ornare etiam erat volutpat tempor fringilla mi. Elit
                  a blandit faucibus est, dui interdum ut amet. Adipiscing
                  feugiat vel at posuere in. Pellentesque volutpat vestibulum.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingEight">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseEight"
                  aria-expanded="true"
                  aria-controls="collapseEight"
                >
                  What is the no-risk trial period for Toptal visual designers?
                </button>
              </h2>
              <div
                id="collapseEight"
                className="accordion-collapse collapse"
                aria-labelledby="headingEight"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nascetur imperdiet at a augue ullamcorper. Leo faucibus
                  feugiat rutrum aenean. Nisi, lectus aliquet aliquam
                  consectetur augue praesent. Lorem vulputate orci eget mi, sed
                  pulvinar. Ornare etiam erat volutpat tempor fringilla mi. Elit
                  a blandit faucibus est, dui interdum ut amet. Adipiscing
                  feugiat vel at posuere in. Pellentesque volutpat
                  vestibulum.Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Nascetur imperdiet at a augue ullamcorper. Leo faucibus
                  feugiat rutrum aenean. Nisi, lectus aliquet aliquam
                  consectetur augue praesent. Lorem vulputate orci eget mi, sed
                  pulvinar. Ornare etiam erat volutpat tempor fringilla mi. Elit
                  a blandit faucibus est, dui interdum ut amet. Adipiscing
                  feugiat vel at posuere in. Pellentesque volutpat vestibulum.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingNine">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseNine"
                  aria-expanded="true"
                  aria-controls="collapseNine"
                >
                  What is the no-risk trial period for Toptal visual designers?
                </button>
              </h2>
              <div
                id="collapseNine"
                className="accordion-collapse collapse"
                aria-labelledby="headingNine"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nascetur imperdiet at a augue ullamcorper. Leo faucibus
                  feugiat rutrum aenean. Nisi, lectus aliquet aliquam
                  consectetur augue praesent. Lorem vulputate orci eget mi, sed
                  pulvinar. Ornare etiam erat volutpat tempor fringilla mi. Elit
                  a blandit faucibus est, dui interdum ut amet. Adipiscing
                  feugiat vel at posuere in. Pellentesque volutpat
                  vestibulum.Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Nascetur imperdiet at a augue ullamcorper. Leo faucibus
                  feugiat rutrum aenean. Nisi, lectus aliquet aliquam
                  consectetur augue praesent. Lorem vulputate orci eget mi, sed
                  pulvinar. Ornare etiam erat volutpat tempor fringilla mi. Elit
                  a blandit faucibus est, dui interdum ut amet. Adipiscing
                  feugiat vel at posuere in. Pellentesque volutpat vestibulum.
                </div>
              </div>
            </div>
          </div>
          <div className="text-end">
            <a href="#" className="text-end faq--link">See more</a>
          </div>
        </div>
      </div>
      <div className="reviews-container py-5">
        <div className="container mb-3 mb-md-5">
          <div className="row d-flex align-items-center">
            <h2 className="heading-2 text-center col-md-10">
              Hear From Our Clients
            </h2>
            <div className="btn-wrapper col-md-2 d-flex gap-2">
              <div className="swiper-button-prev">
                <img
                  src="./images/prev.png"
                  className="non-hover"
                  alt="previous button"
                />
                <img
                  src="./images/next.png"
                  className="hover w-25 w-md-100"
                  alt="previous button"
                />
              </div>
              <div className="swiper-button-next">
                <img
                  src="./images/prev.png"
                  className="non-hover"
                  alt="previous button"
                />
                <img
                  src="./images/next.png"
                  className="hover w-25 w-md-100"
                  alt="previous button"
                />
              </div>
            </div>
          </div>
          <div className="row mt-5 align-items-center gap-2 justify-content-center">
            <div className="col-lg-3 col-md-12 review">
              Our customers say <span>Excellent</span>
            </div>
            <div
              className="col-lg-5 col-md-12 review d-flex align-items-center gap-2 justify-content-lg-center flex-wrap"
            >
              <figure className="image-container d-flex align-items-center gap-1">
                <img src="images/star.png" alt="star" className="img-fluid" />
                <img src="images/star.png" alt="star" className="img-fluid" />
                <img src="images/star.png" alt="star" className="img-fluid" />
                <img src="images/star.png" alt="star" className="img-fluid" />
                <img src="images/empty-star.png" alt="star" className="img-fluid" />
              </figure>
              <div className="text">4.3 out of 5 based on 1,260 reviews</div>
            </div>
            <div className="col-lg-3 col-md-12 d-flex align-items-center gap-2">
              <figure className="image-container">
                <img src="images/star.png" alt="star" className="img-fluid" />
              </figure>
              <div className="text">Trust Pilot</div>
            </div>
          </div>
          <div className="mt-5">
            <div className="swiper reviews">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="review p-4 bg-light">
                    <img src="./images/blockquote.png" alt="blockquote" />
                    <p className="paragraph mt-3">
                      Our team has been working at frispes for almost 2 months
                      because our office still closed. During working at
                      frispes, we feel a new experience, we can feel working
                      with a beautiful, modern, and comfortable space. And cozy
                      cafe with high-speed internet in there. Thank you for
                      frispes and team.
                    </p>
                    <div className="details d-flex gap-2 mt-4 align-items-center">
                      <img src="./images/review-1.png" alt="author" />
                      <div className="author">
                        <h5 className="heading-5">Pedro Ibanez</h5>
                        <p>UI Designer at Google</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="review p-4 bg-light">
                    <img src="./images/blockquote.png" alt="blockquote" />
                    <p className="paragraph mt-3">
                      Our team has been working at frispes for almost 2 months
                      because our office still closed. During working at
                      frispes, we feel a new experience, we can feel working
                      with a beautiful, modern, and comfortable space. And cozy
                      cafe with high-speed internet in there. Thank you for
                      frispes and team.
                    </p>
                    <div className="details d-flex gap-2 mt-4 align-items-center">
                      <img src="./images/review-2.png" alt="author" />
                      <div className="author">
                        <h5 className="heading-5">Pedro Ibanez</h5>
                        <p>UI Designer at Google</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="review p-4 bg-light">
                    <img src="./images/blockquote.png" alt="blockquote" />
                    <p className="paragraph mt-3">
                      Our team has been working at frispes for almost 2 months
                      because our office still closed. During working at
                      frispes, we feel a new experience, we can feel working
                      with a beautiful, modern, and comfortable space. And cozy
                      cafe with high-speed internet in there. Thank you for
                      frispes and team.
                    </p>
                    <div className="details d-flex gap-2 mt-4 align-items-center">
                      <img src="./images/review-3.png" alt="author" />
                      <div className="author">
                        <h5 className="heading-5">Pedro Ibanez</h5>
                        <p>UI Designer at Google</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  )
}

export default LimitedLiability
