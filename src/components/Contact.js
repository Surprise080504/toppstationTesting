import React from "react";

import "../styling/contact.styles.css";

const BusinessFormation = (props) => {
  return (
    <>
      <div className="contact-us__hero">
        <div className="container mt-4 mt-md-5">
          <div className="row position-relative">
            <div className="col-md-6 col-sm-12">
              <div className="row mb-4 mb-md-0">
                <h1 className="heading-1">Contact Us</h1>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <img
                src="./images/contact-us-hero.jpg"
                className="hero-img"
                alt="Contact us"
              />
            </div>
            <div className="card__container d-flex align-items-center gap-5 justify-content-center position-absolute flex-column flex-md-row">
              <div className="contact-card text-center px-3 py-4 shadow-sm rounded-2 position-relative">
                <figure className="bg p-1 d-flex align-items-center justify-content-center position-absolute">
                  <svg
                    width="66"
                    height="93"
                    viewBox="0 0 66 93"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M33.0015 7.92174H31.1779C30.377 7.92174 31.4095 7.78205 30.6306 7.86539C19.5715 9.04799 10.9585 18.4094 10.9585 29.7824V38.7356H53.2209V29.7824C53.2209 17.6083 45.1756 7.92174 33.0015 7.92174Z"
                      fill="#BDBDBD"
                    />
                    <path
                      d="M33.002 7.73926C32.2009 7.73926 31.4102 7.78302 30.6313 7.86636C41.6903 9.04896 50.3037 18.4093 50.3037 29.7822V38.7355H55.045V29.7822C55.045 17.6081 45.1761 7.73926 33.002 7.73926Z"
                      fill="#BDBDBD"
                    />
                    <path
                      d="M55.043 38.7355C54.2877 38.7355 53.6753 38.1232 53.6753 37.3678V23.9107C53.6753 12.5103 44.4004 3.23538 33 3.23538C21.5995 3.23538 12.3247 12.5103 12.3247 23.9107V38.294C12.3247 39.0494 11.7124 39.6617 10.957 39.6617C10.2017 39.6617 9.58936 39.0494 9.58936 38.294V23.9107C9.58936 11.002 20.0912 0.5 33 0.5C45.9087 0.5 56.4107 11.002 56.4107 23.9107V37.3678C56.4107 38.1232 55.7983 38.7355 55.043 38.7355Z"
                      fill="#DEDBEC"
                    />
                    <path
                      d="M48.6204 31.8457H50.1539C53.959 31.8457 57.0436 34.9303 57.0436 38.7356C57.0436 39.68 56.8535 40.5801 56.5096 41.3997C56.164 42.223 55.6616 44.4197 55.0422 45.0437C54.6341 45.455 54.1758 44.3604 53.675 44.6588C52.6445 45.2728 51.4402 45.6255 50.1537 45.6255H48.6226L47.8726 37.6104L48.6204 31.8457Z"
                      fill="#1A4C65"
                    />
                    <path
                      d="M10.8206 61.8789C5.28695 61.8718 0.768831 66.352 0.761719 71.8859V90.6739C0.761719 91.6811 1.57814 92.4975 2.58531 92.4975H11.8415L13.2092 90.6739L14.5769 92.4975H27.4251L33.635 90.6739L38.5762 92.4975H51.4245L52.7921 90.6739L54.1598 92.4975H61.5924C62.5996 92.4975 63.416 91.6811 63.416 90.6739V71.9683C63.4231 66.4346 58.9429 61.8906 53.4091 61.8835L10.8206 61.8789Z"
                      fill="#395F8C"
                    />
                    <path
                      d="M55.2335 61.8835L10.8213 61.8789C10.8137 61.8789 10.806 61.8795 10.7983 61.8795L49.7629 61.8835C55.2968 61.8906 59.7768 66.4346 59.7699 71.9683V90.6739C59.7699 91.6811 58.9535 92.4975 57.9463 92.4975H63.4171C64.4242 92.4975 65.2407 91.6811 65.2407 90.6739V71.9683C65.2476 66.4346 60.7674 61.8904 55.2335 61.8835Z"
                      fill="#1A4C65"
                    />
                    <path
                      d="M14.5782 92.4974V81.3179C14.5782 80.5626 13.9658 79.9502 13.2105 79.9502C12.4551 79.9502 11.8428 80.5626 11.8428 81.3179V92.4974H14.5782Z"
                      fill="#1A4C65"
                    />
                    <path
                      d="M54.1612 92.4974V81.3179C54.1612 80.5626 53.5488 79.9502 52.7935 79.9502C52.0381 79.9502 51.4258 80.5626 51.4258 81.3179V92.4974H54.1612Z"
                      fill="#1A4C65"
                    />
                    <path
                      d="M27.4268 71.2668L33.0017 78.4676L38.5765 71.2668V68.0376H27.4268V71.2668Z"
                      fill="#5B5B5B"
                    />
                    <path
                      d="M27.4258 92.5L33.0014 78.4673L38.577 92.5H27.4258Z"
                      fill="#5B5B5B"
                    />
                    <path
                      d="M25.126 47.0376V64.1635L32.9632 68.0371L40.9478 63.1348V47.0376H25.126Z"
                      fill="#ACACAC"
                    />
                    <path
                      d="M17.3143 31.8457H15.7833C11.9782 31.8457 8.89355 34.9303 8.89355 38.7356C8.89355 42.5407 11.9782 45.6255 15.7833 45.6255H17.3167L18.6895 38.0888L17.3143 31.8457Z"
                      fill="#395F8C"
                    />
                    <path
                      d="M33.0008 59.954C32.1423 59.954 31.2998 60.0665 30.4786 59.9319C23.0165 58.7097 17.3184 52.1541 17.3184 44.25V33.2519C17.3184 24.4781 24.3395 17.3657 33.001 17.3657C41.6623 17.3657 46.8599 24.4783 46.8599 33.2519V44.25C46.8597 53.0238 41.6622 59.954 33.0008 59.954Z"
                      fill="#C4C4C4"
                    />
                    <path
                      d="M32.9996 17.3657C32.1408 17.3657 31.2987 17.4367 30.4775 17.5712C37.9395 18.7934 43.638 25.3481 43.638 33.2519V44.25C43.638 52.1539 37.9395 58.7085 30.4775 59.9306C31.2987 60.0652 32.141 60.1362 32.9996 60.1362C41.6607 60.1362 48.682 53.0236 48.682 44.25V33.2519C48.682 24.4783 41.6609 17.3657 32.9996 17.3657Z"
                      fill="#A9A9AA"
                    />
                    <path
                      d="M21.6621 17.3657C21.6621 17.3657 26.7634 27.4308 49.0453 27.7569C49.6159 27.7653 50.0225 27.2034 49.8364 26.664C48.5195 22.8491 42.5931 10.7818 21.6621 17.3657Z"
                      fill="#BDBDBD"
                    />
                    <path
                      d="M53.6767 44.6576V46.5165C53.6767 48.0801 52.4047 49.352 50.8412 49.352H33.0371C32.2818 49.352 31.6694 49.9644 31.6694 50.7197C31.6694 51.475 32.2818 52.0874 33.0371 52.0874H50.8412C53.913 52.0874 56.4121 49.5882 56.4121 46.5165V41.6211C55.8265 42.8885 54.8682 43.9476 53.6767 44.6576Z"
                      fill="#395F8C"
                    />
                    <path
                      d="M40.9465 58.2886L32.9619 68.0368L40.8599 73.8374C41.359 74.2039 42.0698 73.9233 42.1838 73.3146L44.1545 62.793C44.2616 62.2211 44.0894 61.6323 43.691 61.2083L40.9465 58.2886Z"
                      fill="#1A4C65"
                    />
                    <path
                      d="M25.1247 58.2886L32.962 68.0367L25.1415 73.8294C24.6426 74.1988 23.9292 73.9187 23.8149 73.3085L21.8476 62.8036C21.7393 62.225 21.9169 61.6296 22.3246 61.2049L25.1247 58.2886Z"
                      fill="#1A4C65"
                    />
                  </svg>
                </figure>
                <h3 className="heading-3 mt-5">Customer care</h3>
                <h4 className="heading-4 mt-3">(888) 379-0854</h4>
                <p className="paragraph mt-3">Mon-Fri: 5 a.m.-7 p.m. PT</p>
                <p className="paragraph">Weekends: 7 a.m.-4 p.m. PT</p>
              </div>
              <div className="contact-card text-center px-3 py-4 shadow-sm rounded-2 position-relative">
                <figure className="bg p-1 d-flex align-items-center justify-content-center position-absolute">
                  <svg
                    width="93"
                    height="94"
                    viewBox="0 0 93 94"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_0_501)">
                      <path
                        d="M63.4047 0.5H4.21826V88.6638H63.4047V0.5Z"
                        fill="#64798A"
                      />
                      <path
                        d="M18.4607 7.31982H10.8633V19.8872H18.4607V7.31982Z"
                        fill="#395F8C"
                      />
                      <path
                        d="M31.2263 7.31982H23.6289V19.8872H31.2263V7.31982Z"
                        fill="#395F8C"
                      />
                      <path
                        d="M43.9949 7.31982H36.3975V19.8872H43.9949V7.31982Z"
                        fill="#395F8C"
                      />
                      <path
                        d="M56.7634 7.31982H49.166V19.8872H56.7634V7.31982Z"
                        fill="#395F8C"
                      />
                      <path
                        d="M18.4607 27.1724H10.8633V39.7398H18.4607V27.1724Z"
                        fill="#395F8C"
                      />
                      <path
                        d="M31.2263 27.1724H23.6289V39.7398H31.2263V27.1724Z"
                        fill="#395F8C"
                      />
                      <path
                        d="M43.9949 27.1724H36.3975V39.7398H43.9949V27.1724Z"
                        fill="#27A2DB"
                      />
                      <path
                        d="M56.7639 27.1724H49.1665V39.7398H56.7639V27.1724Z"
                        fill="#27A2DB"
                      />
                      <path
                        d="M43.9934 59.5844H36.396L43.9934 47.0166V59.5844Z"
                        fill="#2D93BA"
                      />
                      <path
                        d="M56.7588 59.5844H49.1616L56.7588 47.0166V59.5844Z"
                        fill="#2D93BA"
                      />
                      <path
                        d="M18.4607 66.8652H10.8633V79.4326H18.4607V66.8652Z"
                        fill="#395F8C"
                      />
                      <path
                        d="M31.2263 66.8652H23.6289V79.4326H31.2263V66.8652Z"
                        fill="#395F8C"
                      />
                      <path
                        d="M43.9949 66.8652H36.3975V79.4326H43.9949V66.8652Z"
                        fill="#27A2DB"
                      />
                      <path
                        d="M56.7639 66.8652H49.1665V79.4326H56.7639V66.8652Z"
                        fill="#27A2DB"
                      />
                      <path
                        d="M18.4605 19.8886H10.8633L18.4605 7.3208V19.8886Z"
                        fill="#395F8C"
                      />
                      <path
                        d="M31.2278 19.8886H23.6304L31.2278 7.3208V19.8886Z"
                        fill="#395F8C"
                      />
                      <path
                        d="M43.9924 19.8886H36.395L43.9924 7.3208V19.8886Z"
                        fill="#395F8C"
                      />
                      <path
                        d="M56.7583 19.8886H49.1611L56.7583 7.3208V19.8886Z"
                        fill="#395F8C"
                      />
                      <path
                        d="M18.4605 39.7365H10.8633L18.4605 27.1689V39.7365Z"
                        fill="#395F8C"
                      />
                      <path
                        d="M31.2278 39.7365H23.6304L31.2278 27.1689V39.7365Z"
                        fill="#395F8C"
                      />
                      <path
                        d="M43.9934 39.7361H36.396L43.9934 27.1685V39.7361Z"
                        fill="#2D93BA"
                      />
                      <path
                        d="M56.7588 39.7361H49.1616L56.7588 27.1685V39.7361Z"
                        fill="#2D93BA"
                      />
                      <path
                        d="M18.4607 47.0122H10.8633V59.5796H18.4607V47.0122Z"
                        fill="#395F8C"
                      />
                      <path
                        d="M31.2263 47.0122H23.6289V59.5796H31.2263V47.0122Z"
                        fill="#395F8C"
                      />
                      <path
                        d="M43.9949 47.0122H36.3975V59.5796H43.9949V47.0122Z"
                        fill="#27A2DB"
                      />
                      <path
                        d="M56.7639 47.0122H49.1665V59.5796H56.7639V47.0122Z"
                        fill="#27A2DB"
                      />
                      <path
                        d="M18.4605 79.4328H10.8633L18.4605 66.8652V79.4328Z"
                        fill="#395F8C"
                      />
                      <path
                        d="M31.2278 79.4328H23.6304L31.2278 66.8652V79.4328Z"
                        fill="#395F8C"
                      />
                      <path
                        d="M43.9934 79.4328H36.396L43.9934 66.8652V79.4328Z"
                        fill="#2D93BA"
                      />
                      <path
                        d="M56.7588 79.4328H49.1616L56.7588 66.8652V79.4328Z"
                        fill="#2D93BA"
                      />
                      <path
                        d="M87.1507 27.04H36.3975V88.6692H87.1507V27.04Z"
                        fill="#D5D6DB"
                      />
                      <path
                        d="M70.2372 71.7539H53.3198V88.6687H70.2372V71.7539Z"
                        fill="#64798A"
                      />
                      <path
                        d="M72.3497 68.9067H51.1953V71.755H72.3497V68.9067Z"
                        fill="#3A556A"
                      />
                      <path
                        d="M47.6231 32.791H40.6221V45.0025H47.6231V32.791Z"
                        fill="#27A2DB"
                      />
                      <path
                        d="M59.3917 32.791H52.3906V45.0025H59.3917V32.791Z"
                        fill="#27A2DB"
                      />
                      <path
                        d="M71.1573 32.791H64.1562V45.0025H71.1573V32.791Z"
                        fill="#27A2DB"
                      />
                      <path
                        d="M82.919 32.791H75.918V45.0025H82.919V32.791Z"
                        fill="#27A2DB"
                      />
                      <path
                        d="M47.6267 45.0027H40.6255L47.6267 32.791V45.0027Z"
                        fill="#2D93BA"
                      />
                      <path
                        d="M59.3918 45.0027H52.3906L59.3918 32.791V45.0027Z"
                        fill="#2D93BA"
                      />
                      <path
                        d="M71.1563 45.0027H64.1553L71.1563 32.791V45.0027Z"
                        fill="#2D93BA"
                      />
                      <path
                        d="M82.919 45.0027H75.918L82.919 32.791V45.0027Z"
                        fill="#2D93BA"
                      />
                      <path
                        d="M47.6231 50.9434H40.6221V63.1549H47.6231V50.9434Z"
                        fill="#27A2DB"
                      />
                      <path
                        d="M59.3917 50.9434H52.3906V63.1549H59.3917V50.9434Z"
                        fill="#27A2DB"
                      />
                      <path
                        d="M71.1573 50.9434H64.1562V63.1549H71.1573V50.9434Z"
                        fill="#27A2DB"
                      />
                      <path
                        d="M82.919 50.9434H75.918V63.1549H82.919V50.9434Z"
                        fill="#27A2DB"
                      />
                      <path
                        d="M82.919 68.9072H75.918V81.1187H82.919V68.9072Z"
                        fill="#27A2DB"
                      />
                      <path
                        d="M47.6231 68.9072H40.6221V81.1187H47.6231V68.9072Z"
                        fill="#27A2DB"
                      />
                      <path
                        d="M47.6267 63.1556H40.6255L47.6267 50.9438V63.1556Z"
                        fill="#2D93BA"
                      />
                      <path
                        d="M59.3918 63.1556H52.3906L59.3918 50.9438V63.1556Z"
                        fill="#2D93BA"
                      />
                      <path
                        d="M71.1563 63.1556H64.1553L71.1563 50.9438V63.1556Z"
                        fill="#2D93BA"
                      />
                      <path
                        d="M82.919 63.1556H75.918L82.919 50.9438V63.1556Z"
                        fill="#2D93BA"
                      />
                      <path
                        d="M82.919 81.1183H75.918L82.919 68.9067V81.1183Z"
                        fill="#2D93BA"
                      />
                      <path
                        d="M47.6267 81.1183H40.6255L47.6267 68.9067V81.1183Z"
                        fill="#2D93BA"
                      />
                      <path
                        d="M90.5523 93.5001H2.44803C1.76328 93.5001 1.20801 92.9449 1.20801 92.2601V89.909C1.20801 89.2242 1.76308 88.6689 2.44803 88.6689H90.5523C91.2371 88.6689 91.7923 89.224 91.7923 89.909V92.2601C91.7923 92.9449 91.2371 93.5001 90.5523 93.5001Z"
                        fill="#3A556A"
                      />
                      <path
                        d="M18.4605 59.5844H10.8633L18.4605 47.0166V59.5844Z"
                        fill="#395F8C"
                      />
                      <path
                        d="M31.2278 59.5844H23.6304L31.2278 47.0166V59.5844Z"
                        fill="#395F8C"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_0_501">
                        <rect
                          width="93"
                          height="93"
                          fill="white"
                          transform="translate(0 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </figure>
                <h3 className="heading-3 mt-5">Sales</h3>
                <h4 className="heading-4 mt-3">(855) 787-1922</h4>
                <p className="paragraph mt-3">Mon-Fri: 5 a.m.-7 p.m. PT</p>
                <p className="paragraph">Weekends: 7 a.m.-4 p.m. PT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main>
        <div className="faq__container mt-md-5 py-5">
          <div className="container">
            <h2 className="heading-2 text-center">
              Frequently asked questions
            </h2>
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
                    consectetur augue praesent. Lorem vulputate orci eget mi,
                    sed pulvinar. Ornare etiam erat volutpat tempor fringilla
                    mi. Elit a blandit faucibus est, dui interdum ut amet.
                    Adipiscing feugiat vel at posuere in. Pellentesque volutpat
                    vestibulum.Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Nascetur imperdiet at a augue ullamcorper.
                    Leo faucibus feugiat rutrum aenean. Nisi, lectus aliquet
                    aliquam consectetur augue praesent. Lorem vulputate orci
                    eget mi, sed pulvinar. Ornare etiam erat volutpat tempor
                    fringilla mi. Elit a blandit faucibus est, dui interdum ut
                    amet. Adipiscing feugiat vel at posuere in. Pellentesque
                    volutpat vestibulum.
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
                    consectetur augue praesent. Lorem vulputate orci eget mi,
                    sed pulvinar. Ornare etiam erat volutpat tempor fringilla
                    mi. Elit a blandit faucibus est, dui interdum ut amet.
                    Adipiscing feugiat vel at posuere in. Pellentesque volutpat
                    vestibulum.Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Nascetur imperdiet at a augue ullamcorper.
                    Leo faucibus feugiat rutrum aenean. Nisi, lectus aliquet
                    aliquam consectetur augue praesent. Lorem vulputate orci
                    eget mi, sed pulvinar. Ornare etiam erat volutpat tempor
                    fringilla mi. Elit a blandit faucibus est, dui interdum ut
                    amet. Adipiscing feugiat vel at posuere in. Pellentesque
                    volutpat vestibulum.
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
                    What is the no-risk trial period for Toptal visual
                    designers?
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
                    consectetur augue praesent. Lorem vulputate orci eget mi,
                    sed pulvinar. Ornare etiam erat volutpat tempor fringilla
                    mi. Elit a blandit faucibus est, dui interdum ut amet.
                    Adipiscing feugiat vel at posuere in. Pellentesque volutpat
                    vestibulum.Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Nascetur imperdiet at a augue ullamcorper.
                    Leo faucibus feugiat rutrum aenean. Nisi, lectus aliquet
                    aliquam consectetur augue praesent. Lorem vulputate orci
                    eget mi, sed pulvinar. Ornare etiam erat volutpat tempor
                    fringilla mi. Elit a blandit faucibus est, dui interdum ut
                    amet. Adipiscing feugiat vel at posuere in. Pellentesque
                    volutpat vestibulum.
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
                    What is the no-risk trial period for Toptal visual
                    designers?
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
                    consectetur augue praesent. Lorem vulputate orci eget mi,
                    sed pulvinar. Ornare etiam erat volutpat tempor fringilla
                    mi. Elit a blandit faucibus est, dui interdum ut amet.
                    Adipiscing feugiat vel at posuere in. Pellentesque volutpat
                    vestibulum.Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Nascetur imperdiet at a augue ullamcorper.
                    Leo faucibus feugiat rutrum aenean. Nisi, lectus aliquet
                    aliquam consectetur augue praesent. Lorem vulputate orci
                    eget mi, sed pulvinar. Ornare etiam erat volutpat tempor
                    fringilla mi. Elit a blandit faucibus est, dui interdum ut
                    amet. Adipiscing feugiat vel at posuere in. Pellentesque
                    volutpat vestibulum.
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
                    What is the no-risk trial period for Toptal visual
                    designers?
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
                    consectetur augue praesent. Lorem vulputate orci eget mi,
                    sed pulvinar. Ornare etiam erat volutpat tempor fringilla
                    mi. Elit a blandit faucibus est, dui interdum ut amet.
                    Adipiscing feugiat vel at posuere in. Pellentesque volutpat
                    vestibulum.Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Nascetur imperdiet at a augue ullamcorper.
                    Leo faucibus feugiat rutrum aenean. Nisi, lectus aliquet
                    aliquam consectetur augue praesent. Lorem vulputate orci
                    eget mi, sed pulvinar. Ornare etiam erat volutpat tempor
                    fringilla mi. Elit a blandit faucibus est, dui interdum ut
                    amet. Adipiscing feugiat vel at posuere in. Pellentesque
                    volutpat vestibulum.
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
                    What is the no-risk trial period for Toptal visual
                    designers?
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
                    consectetur augue praesent. Lorem vulputate orci eget mi,
                    sed pulvinar. Ornare etiam erat volutpat tempor fringilla
                    mi. Elit a blandit faucibus est, dui interdum ut amet.
                    Adipiscing feugiat vel at posuere in. Pellentesque volutpat
                    vestibulum.Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Nascetur imperdiet at a augue ullamcorper.
                    Leo faucibus feugiat rutrum aenean. Nisi, lectus aliquet
                    aliquam consectetur augue praesent. Lorem vulputate orci
                    eget mi, sed pulvinar. Ornare etiam erat volutpat tempor
                    fringilla mi. Elit a blandit faucibus est, dui interdum ut
                    amet. Adipiscing feugiat vel at posuere in. Pellentesque
                    volutpat vestibulum.
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
                    What is the no-risk trial period for Toptal visual
                    designers?
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
                    consectetur augue praesent. Lorem vulputate orci eget mi,
                    sed pulvinar. Ornare etiam erat volutpat tempor fringilla
                    mi. Elit a blandit faucibus est, dui interdum ut amet.
                    Adipiscing feugiat vel at posuere in. Pellentesque volutpat
                    vestibulum.Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Nascetur imperdiet at a augue ullamcorper.
                    Leo faucibus feugiat rutrum aenean. Nisi, lectus aliquet
                    aliquam consectetur augue praesent. Lorem vulputate orci
                    eget mi, sed pulvinar. Ornare etiam erat volutpat tempor
                    fringilla mi. Elit a blandit faucibus est, dui interdum ut
                    amet. Adipiscing feugiat vel at posuere in. Pellentesque
                    volutpat vestibulum.
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
                    What is the no-risk trial period for Toptal visual
                    designers?
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
                    consectetur augue praesent. Lorem vulputate orci eget mi,
                    sed pulvinar. Ornare etiam erat volutpat tempor fringilla
                    mi. Elit a blandit faucibus est, dui interdum ut amet.
                    Adipiscing feugiat vel at posuere in. Pellentesque volutpat
                    vestibulum.Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Nascetur imperdiet at a augue ullamcorper.
                    Leo faucibus feugiat rutrum aenean. Nisi, lectus aliquet
                    aliquam consectetur augue praesent. Lorem vulputate orci
                    eget mi, sed pulvinar. Ornare etiam erat volutpat tempor
                    fringilla mi. Elit a blandit faucibus est, dui interdum ut
                    amet. Adipiscing feugiat vel at posuere in. Pellentesque
                    volutpat vestibulum.
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
                    What is the no-risk trial period for Toptal visual
                    designers?
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
                    consectetur augue praesent. Lorem vulputate orci eget mi,
                    sed pulvinar. Ornare etiam erat volutpat tempor fringilla
                    mi. Elit a blandit faucibus est, dui interdum ut amet.
                    Adipiscing feugiat vel at posuere in. Pellentesque volutpat
                    vestibulum.Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Nascetur imperdiet at a augue ullamcorper.
                    Leo faucibus feugiat rutrum aenean. Nisi, lectus aliquet
                    aliquam consectetur augue praesent. Lorem vulputate orci
                    eget mi, sed pulvinar. Ornare etiam erat volutpat tempor
                    fringilla mi. Elit a blandit faucibus est, dui interdum ut
                    amet. Adipiscing feugiat vel at posuere in. Pellentesque
                    volutpat vestibulum.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default BusinessFormation;
