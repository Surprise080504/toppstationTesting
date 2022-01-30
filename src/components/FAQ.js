import React from "react"

import '../styling/faq.styles.css'

const BusinessFormation = (props) => {
  return (
    <>
     <main>
      <div className="faq__container py-5">
        <div className="container">
          <div className="d-flex align-items-center gap-1">
            <img
              src="./images/Rectangle.png"
              alt="Reactangle"
              className="img-fluid"
            />
            <h1 className="heading-1 text-center">Frequently asked questions</h1>
          </div>
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
              Intellectual Property
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
            <h3 className="heading-3 mt-5 d-flex align-items-center">
              <span className="circle d-inline-block me-2">&nbsp;</span>
              Estate Planning
            </h3>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTen">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTen"
                  aria-expanded="true"
                  aria-controls="collapseTen"
                >
                  What is the no-risk trial period for Toptal visual designers?
                </button>
              </h2>
              <div
                id="collapseTen"
                className="accordion-collapse collapse"
                aria-labelledby="headingTen"
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
              <h2 className="accordion-header" id="headingEleven">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseEleven"
                  aria-expanded="true"
                  aria-controls="collapseEleven"
                >
                  What is the no-risk trial period for Toptal visual designers?
                </button>
              </h2>
              <div
                id="collapseEleven"
                className="accordion-collapse collapse"
                aria-labelledby="headingEleven"
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
              <h2 className="accordion-header" id="headingTweleve">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTweleve"
                  aria-expanded="true"
                  aria-controls="collapseTweleve"
                >
                  What is the no-risk trial period for Toptal visual designers?
                </button>
              </h2>
              <div
                id="collapseTweleve"
                className="accordion-collapse collapse"
                aria-labelledby="headingTweleve"
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
        </div>
      </div>
    </main>
    </>
  )
}

export default BusinessFormation
