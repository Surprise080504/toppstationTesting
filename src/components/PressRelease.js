import React from "react"
import '../styling/style.css'

const PressRelease = (props) => {
  return (
    <>
<section className="press_banner">
      <nav
        aria-label="breadcrumb"
        className="position-absolute top_10 left_10 z-index"
      >
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">
            <a href="#" className="text-light text-decoration-none">HOME</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#" className="text-light text-decoration-none"
              >News & Events</a
            >
          </li>
          <li className="breadcrumb-item active text-light" aria-current="page">
            Press Release
          </li>
        </ol>
      </nav>
      <div className="container">
        <div className="row align-items-center text-center">
          <div className="col-md-12 position-relative z-index">
            <h1 className="text-light hd_font fw-bold">Press Release</h1>
          </div>
        </div>
      </div>
    </section>

    <section className="py-3 press_tab_sec">
      <nav>
        <div
          className="nav press_tab justify-content-center"
          id="nav-tab"
          role="tablist"
        >
          <button
            className="press_btn active"
            id="nav-home-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-home"
            type="button"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
          >
            Press Releases
          </button>
          <button
            className="press_btn"
            id="nav-FAQs-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-FAQs"
            type="button"
            role="tab"
            aria-controls="nav-FAQs"
            aria-selected="false"
          >
            Invsetor FAQs
          </button>
          <button
            className="press_btn"
            id="nav-RSS-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-RSS"
            type="button"
            role="tab"
            aria-controls="nav-RSS"
            aria-selected="false"
          >
            RSS Feeds
          </button>
          <button
            className="press_btn"
            id="nav-Email-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-Email"
            type="button"
            role="tab"
            aria-controls="nav-Email"
            aria-selected="false"
          >
            Email Alerts
          </button>
          <button
            className="press_btn"
            id="nav-contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-contact"
            type="button"
            role="tab"
            aria-controls="nav-contact"
            aria-selected="false"
          >
            Contact IR
          </button>
        </div>
      </nav>
      <div className="tab-content py-4" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
        >
          <div className="container">
            <div className="row my-sm-5 mb-4 mt-0">
              <div className="col-md-6 col-12">
                <div className="search-article-block">
                  <label>YEAR</label>
                  <input type="text" name="email" value="" placeholder="2021" />
                  <button type="submit" href="#">
                    <span>Apply Filter</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-12 mb-4">
                <div className="press_box">
                  <div className="press_boxtxt p-4">
                    <p className="date_press Ubuntu fw-normal">
                      Posted on 27th January 2021
                    </p>
                    <h4 className="Ubuntu fw-normal">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ultrices facilisi sed
                    </h4>
                  </div>
                  <a href="" className="green_btn"
                    >Read More <img src="images/Icon.png"
                  /></a>
                </div>
              </div>
              <div className="col-md-4 col-12 mb-4">
                <div className="press_box">
                  <div className="press_boxtxt p-4">
                    <p className="date_press Ubuntu fw-normal">
                      Posted on 27th January 2021
                    </p>
                    <h4 className="Ubuntu fw-normal">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ultrices facilisi sed
                    </h4>
                  </div>
                  <a href="" className="green_btn"
                    >Read More <img src="images/Icon.png"
                  /></a>
                </div>
              </div>
              <div className="col-md-4 col-12 mb-4">
                <div className="press_box">
                  <div className="press_boxtxt p-4">
                    <p className="date_press Ubuntu fw-normal">
                      Posted on 27th January 2021
                    </p>
                    <h4 className="Ubuntu fw-normal">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ultrices facilisi sed
                    </h4>
                  </div>
                  <a href="" className="green_btn"
                    >Read More <img src="images/Icon.png"
                  /></a>
                </div>
              </div>
              <div className="col-md-4 col-12 mb-4">
                <div className="press_box">
                  <div className="press_boxtxt p-4">
                    <p className="date_press Ubuntu fw-normal">
                      Posted on 27th January 2021
                    </p>
                    <h4 className="Ubuntu fw-normal">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ultrices facilisi sed
                    </h4>
                  </div>
                  <a href="" className="green_btn"
                    >Read More <img src="images/Icon.png"
                  /></a>
                </div>
              </div>
              <div className="col-md-4 col-12 mb-4">
                <div className="press_box">
                  <div className="press_boxtxt p-4">
                    <p className="date_press Ubuntu fw-normal">
                      Posted on 27th January 2021
                    </p>
                    <h4 className="Ubuntu fw-normal">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ultrices facilisi sed
                    </h4>
                  </div>
                  <a href="" className="green_btn"
                    >Read More <img src="images/Icon.png"
                  /></a>
                </div>
              </div>
              <div className="col-md-4 col-12 mb-4">
                <div className="press_box">
                  <div className="press_boxtxt p-4">
                    <p className="date_press Ubuntu fw-normal">
                      Posted on 27th January 2021
                    </p>
                    <h4 className="Ubuntu fw-normal">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ultrices facilisi sed
                    </h4>
                  </div>
                  <a href="" className="green_btn"
                    >Read More <img src="images/Icon.png"
                  /></a>
                </div>
              </div>
              <div className="col-md-4 col-12 mb-4">
                <div className="press_box">
                  <div className="press_boxtxt p-4">
                    <p className="date_press Ubuntu fw-normal">
                      Posted on 27th January 2021
                    </p>
                    <h4 className="Ubuntu fw-normal">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ultrices facilisi sed
                    </h4>
                  </div>
                  <a href="" className="green_btn"
                    >Read More <img src="images/Icon.png"
                  /></a>
                </div>
              </div>
              <div className="col-md-4 col-12 mb-4">
                <div className="press_box">
                  <div className="press_boxtxt p-4">
                    <p className="date_press Ubuntu fw-normal">
                      Posted on 27th January 2021
                    </p>
                    <h4 className="Ubuntu fw-normal">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ultrices facilisi sed
                    </h4>
                  </div>
                  <a href="" className="green_btn"
                    >Read More <img src="images/Icon.png"
                  /></a>
                </div>
              </div>
              <div className="col-md-4 col-12 mb-4">
                <div className="press_box">
                  <div className="press_boxtxt p-4">
                    <p className="date_press Ubuntu fw-normal">
                      Posted on 27th January 2021
                    </p>
                    <h4 className="Ubuntu fw-normal">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ultrices facilisi sed
                    </h4>
                  </div>
                  <a href="" className="green_btn"
                    >Read More <img src="images/Icon.png"
                  /></a>
                </div>
              </div>
            </div>

            <nav aria-label="..." className="py-sm-5 pt-0 pb-3">
              <ul className="pagination pagination-sm justify-content-center">
                <li className="pagi-item active" aria-current="page">
                  <span className="pagi-link">1</span>
                </li>
                <li className="pagi-item"><a className="pagi-link" href="#">2</a></li>
                <li className="pagi-item"><a className="pagi-link" href="#">3</a></li>
                <li className="pagi-item"><a className="pagi-link" href="#">4</a></li>
                <li className="pagi-item">
                  <a className="text-decoration-none" href="#">...</a>
                </li>
                <li className="pagi-item"><a className="pagi-link" href="#">13</a></li>
              </ul>
            </nav>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="nav-FAQs"
          role="tabpanel"
          aria-labelledby="nav-FAQs-tab"
        >
          <div className="container">Invsetor FAQs</div>
        </div>
        <div
          className="tab-pane fade"
          id="nav-RSS"
          role="tabpanel"
          aria-labelledby="nav-RSS-tab"
        >
          <div className="container">RSS Feeds</div>
        </div>
        <div
          className="tab-pane fade"
          id="nav-Email"
          role="tabpanel"
          aria-labelledby="nav-Email-tab"
        >
          <div className="container">Email Alerts</div>
        </div>
        <div
          className="tab-pane fade"
          id="nav-contact"
          role="tabpanel"
          aria-labelledby="nav-contact-tab"
        >
          <div className="container">Contact IR</div>
        </div>
      </div>
    </section>
    </>
  )
}

export default PressRelease
