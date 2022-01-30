import React from "react"
import '../styling/affiliate.styles.css'
const Affiliate = (props) => {
  return (
    <>
   <div className="container-fluid hero__container mt-0 mt-lg-5">
      <div className="container pb-4 pb-md-5">
        <div className="row">
          <div className="container mt-4">
            <div className="row flex-column align-items-center flex-md-row">
              <div className="col-md-6 col-sm-12">
                <img
                  src="./images/affiliate-hero.jpg"
                  alt="Hero image"
                  className="img-fluid d-block"
                />
              </div>
              <div className="col-lg-5 col-md-6 col-sm-12 ms-auto">
                <h1 className="heading-1 mt-4 mt-md-5 text-center text-md-start">
                  PARTNER REGISTRATION
                </h1>
                <p className="subtitle mt-4 text-center text-md-start">
                  Thank you for your interest in joining the ABCDEFGHI Partner
                  Program. Complete the required fields below to submit your
                  application.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <main>
      <div className="about__container py-md-5">
        <div className="container">
          <div className="row justify-content-center">
            <h2 className="heading-2 text-center">About The Program</h2>
            <img src="./images/design.png" className="design" alt="design" />
            <p className="paragraph mt-4 mt-md-5 text-center text-md-start w-md-75">
              Thank you for your interest in joining the abcdefghi Affiliate
              Program. Please provide us with the following information.
            </p>
            <h2 className="heading-2 text-center mt-5">About You</h2>
            <img src="./images/design.png" className="design" alt="design" />
            <p className="paragraph mt-4 mt-md-5 w-md-75 text-center text-md-start">
              Are you an individual who will be promoting brands on your
              personal social media or personal blog?
            </p>
            <p
              className="paragraph p-light mt-1 w-md-75 fw-light text-center text-md-start"
            >
              If you are a business who promotes primarily through other
              promotional methods such as a coupon site or paid search in
              addition to social media, please select no for this question
            </p>
            <div className="link__wrapper w-md-75 mt-3 text-center text-md-start">
              <a
                href="#"
                className="d-inline-block py-1 px-3 me-2 rounded-pill about--link text-light"
              >
                Yes
              </a>
              <a
                href="#"
                className="d-inline-block py-1 px-3 rounded-pill about--link text-light"
              >
                No
              </a>
            </div>
            <h2 className="heading-2 mt-5 text-center">About Pepperjam</h2>
            <img src="./images/design.png" className="design" alt="design" />
            <p
              className="paragraph p-light mt-4 w-md-75 fw-light mb-5 text-center text-md-start"
            >
              Pepperjam is a leading performance marketing solution provider
              redefining affiliate marketing through innovative technology and
              service expertise. Ascend, Pepperjam's Affiliate Marketing
              Lifecycle Platform, is the only fully integrated solution
              purpose-built for retailers focused on turning their advertising
              into a profit center. Pepperjam retains offices in Philadelphia,
              Santa Cruz, Toronto and Wilkes-Barre, Pa., and is a portfolio
              company of Banneker Partners and Permira Funds. To learn more,
              visit us at <a href="#" className="p-link">www.ascendpartner.com</a>
            </p>
          </div>
        </div>
      </div>
    </main>
    </>
  )
}

export default Affiliate
