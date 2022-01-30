import React from "react"

import '../styling/join-our-network.css'

const JoinNetwork = (props) => {
  return (
    <>
<section className="network__banner-section">
      <div className="container">
        <div className="row banner__image-wrapper">
          <img
            src="images/network-banner-image.png"
            alt="Network Banner Image"
            className="network__banner-image"
          />
          <h1 className="h1 text-white network__banner-heading">
            Join our Network is eassy!
          </h1>
          <div className="banner__blue-box"></div>
        </div>
      </div>
    </section>
    <section className="guidance-section">
      <div className="container">
        <div className="row align-items-start guidance-card">
          <div className="col-1 col-md-1 p-0 text-end guidance-rectangle__image-wrapper">
            <img src="images/Rectangle.png" alt="Rectangle" />
          </div>
          <div className="col-11 col-md-6">
            <h1 className="h1">
              Exceptional legal guidance from first-rate attorneys
            </h1>
            <p>
              We're pioneers of making legal help accessible to all, and proud
              of the network we've established across all 50 states. By
              providing smart and friendly advice, our legal plan attorneys have
              an average customer rating of 4.8 out of 5 stars.
            </p>
            <p>
              We're always looking for talented attorneys who share our passion
              for great customer service. If you're searching for new ways to
              help others and expand your practice, we'd love to hear from you.
            </p>
          </div>
          <div className="col-12 col-md-5 order-first order-md-0 my-1 my-md-0">
            <figure className="guidance__image-wrapper">
              <img src="images/guidance-1.jpg" alt="guidance" />
            </figure>
          </div>
        </div>
        <div className="row align-items-start guidance-card">
          <div className="col-12 col-md-5 order-first order-md-0 my-1 my-md-0">
            <figure className="guidance__image-wrapper">
              <img src="images/guidance-2.png" alt="guidance" />
            </figure>
          </div>
          <div className="col-1 col-md-1 p-0 text-end guidance-rectangle__image-wrapper">
            <img src="images/Rectangle.png" alt="Rectangle" />
          </div>
          <div className="col-11 col-md-6">
            <h1 className="h1 mb-4">How we help grow your practice</h1>
            <h5 className="h5">Legal Plans</h5>
            <p>
              Customers schedule consultations with tech-enabled Legal Plan attorneys licensed in their state.
            </p>
            <h5 className="h5">Local Attorney Directory (LAD)</h5>
            <p>
              Connect with potential clients by getting referrals from Legal Plan attorneys when customers need local help.
              New services
            </p>
            <h5 className="h5">New services</h5>
            <p>Be the first to know and be part of new programs we're creating to help customers access the legal help they need.</p>
          </div>
        </div>
      </div>
    </section>
    <section className="network-form">
      <div className="container">
        <h1 className="h1 my-5 text-center form-title">Please complete this form to submit your interest:</h1>
        <form className="row g-3">
          <div className="col-md-6 my-3">
            <label for="firstname" className="form-label">First Name</label>
            <input type="text" className="form-control" id="firstname" placeholder="First Name"/>
          </div>
          <div className="col-md-6 my-3">
            <label for="lastname" className="form-label">Last Name</label>
            <input type="text" className="form-control" id="lastname" placeholder="Last Name"/>
          </div>
          <div className="col-12 my-3">
            <label for="inputAddress" className="form-label">Email Address</label>
            <input type="text" className="form-control" id="inputAddress" placeholder="Email Address"/>
          </div>
          <div className="mb-3 my-3">
            <label for="exampleFormControlTextarea1" className="form-label">Your message</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Textarea"></textarea>
          </div>
          <div className="col-12 my-3">
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
              <label className="form-check-label" for="flexSwitchCheckChecked">I agree to the Terms and Conditions.</label>
            </div>
          </div>
          <div className="col-12 text-center">
            <button type="submit" className="btn form-submit-btn text-white text-uppercase text-center">SEND MESSAGE</button>
          </div>
        </form>
      </div>
    </section>
    </>
  )
}

export default JoinNetwork
