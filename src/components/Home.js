import React, { useState, useContext, useEffect } from "react";

import "../styling/style.css";
import "../styling/home.styles.scss";

import { BlogContext } from '../context/BlogState';


const Home = (props) => {
  const {getBlogs, getBlog, ...blogsState} = useContext(BlogContext);

  const [searchInput, setSearchInput] = useState("");
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoriesCount, setCategoriesCount] = useState({});

  
  const searchItems = (value) => {
    setSearchInput(value);
  };

  const searchArticle = () => {
    window.localStorage.setItem("searchInput", searchInput);
    window.location.href = `/search/${searchInput}`;
  };

  const increaseCount = (targetC) => {
    setCategoriesCount({
      ...categoriesCount,
      [targetC]: categoriesCount[targetC] + 1
    });
  }

  useEffect(() => {
    getBlogs().then((res) => {
      setPosts(res)
      createCategories(res)
    });
  }, [0]);


  const findInCategories = (categorieslist, tag) => {
    let status = -1;
    categorieslist.forEach((cat, index) => {
      if(cat.tag == tag) status = index; 
    })
    return status;
  }

  const findIfAdded = (listOfItems, item) => {
    console.log(listOfItems, item)
    let status = false;
    listOfItems.forEach((listOfTags) => {
      console.log(listOfTags)
      listOfTags.posts.forEach((taggedItem) => {
        console.log(item._id, taggedItem._id)
        if(item._id == taggedItem._id) return true;
        else status = false;
        return;
      })
    })
    return status
  }
  
  const createCategories = (list) => {
    let categorieslist = [];
    // let indexesList = [];
    list.forEach(item => {
        item.tags.forEach((tag) => {
          let indexDefiner = findInCategories(categorieslist, tag);
          if(item.visibility){
            if(indexDefiner == -1){
                categorieslist.push({tag: tag, posts: [item]})
            } else {
                categorieslist[indexDefiner].posts.push(item);
            }
          }
        });
    });



    const asc = categorieslist.sort((a,b) => {
      return b.posts.length - a.posts.length
    });
    setCategories(asc)
  }

  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hours: 'numeric', minutes: 'numeric'};

  const getReadTimer = (blog) => {
    let timer =  Math.round(blog.text.length / 60);
    if (timer > 60) return Math.trunc((timer / 60)) + " Min read"
    else return Math.trunc((timer)) + " Sec read"
  }


  

  return (
    <>
      <img
        className="hero-bg position-absolute w-50"
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
                    value={searchInput}
                    placeholder="search article"
                    onChange={(e) => searchItems(e.target.value)}
                  />
                  <button type="submit" onClick={searchArticle}>
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

      {categories[0] && categories[0].tag && <section className="blog-card__container py-sm-5 bg-light-shade">
        <div className="container">
          <div className="title--wrapper d-flex align-items-center">
            <img
              className="title-bg me-2"
              src="images/Rectangle.png"
              alt="heading-bg"
            />
            <h2 className="heading-2">{categories[0].tag}</h2>
          </div>
          
          <div className="row mt-4">
          {categories[0].posts.map((blog, index) => {
            if(index > 2) return;
            if(blog.tags.indexOf(categories[0].tag) != -1){
              
              return <a key={blog._id} href={`/blog/${blog._id}`} className="col-md-4">
                      <figure className="card-image">
                        <img src={blog.image} alt="card image" />
                      </figure>
                      {blog.tags.map((tag, index) => {
                        return <a key={index} href={`/search/${tag}`} className="card-tag d-inline-block">
                                {tag}
                              </a>
                      })}
                      
                      <h3 className="heading-3 mt-3">
                        {blog.title}
                      </h3>
                      <p className="card-date">{new Date(blog.creationDate).toLocaleDateString("en-US", dateOptions)} • {getReadTimer(blog)}</p>
                      <p className="card-text">
                      {blog.description}
                      </p>
                    </a>
            }
          })}
          </div>
          <a href={`/search/${categories[0].tag}`} className="btn d-flex align-items-center gap-3 mt-5">
            See More {categories[0].tag}
            <i className="far fa-arrow-right"></i>
          </a>
        </div>
      </section> }

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



      {categories[1] && categories[1].tag && <section className="blog-card__container py-sm-5 bg-light-shade">
        <div className="container">
          <div className="title--wrapper d-flex align-items-center">
            <img
              className="title-bg me-2"
              src="images/Rectangle.png"
              alt="heading-bg"
            />
            <h2 className="heading-2">{categories[1].tag}</h2>
          </div>
          
          <div className="row mt-4">
          {categories[1].posts.map((blog) => {
            if (categoriesCount[categories[1].tag] == 2) return;
            if(blog.tags.indexOf(categories[1].tag) != -1 ){
              // increaseCount(categories[1].tag)
              return <a key={blog._id} href={`/blog/${blog._id}`} className="col-md-4">
                      <figure className="card-image">
                        <img src={blog.image} alt="card image" />
                      </figure>
                      {blog.tags.map((tag, index) => {
                        return <a key={index} href={`/search/${tag}`} className="card-tag d-inline-block">
                                {tag}
                              </a>
                      })}
                      <h3 className="heading-3 mt-3">
                        {blog.title}
                      </h3>
                      <p className="card-date">{new Date(blog.creationDate).toLocaleDateString("en-US", dateOptions)} • {getReadTimer(blog)}</p>
                      <p className="card-text">
                      {blog.description}
                      </p>
                    </a>
            }
          })}
          </div>
          <a href={`/search/${categories[1].tag}`} className="btn d-flex align-items-center gap-3 mt-5">
            See More {categories[1].tag}
            <i className="far fa-arrow-right"></i>
          </a>
        </div>
      </section> }

      {categories[2] && categories[2].tag && <section className="blog-card__container py-sm-5 bg-light-shade">
        <div className="container">
          <div className="title--wrapper d-flex align-items-center">
            <img
              className="title-bg me-2"
              src="images/Rectangle.png"
              alt="heading-bg"
            />
            <h2 className="heading-2">{categories[2].tag}</h2>
          </div>
          
          <div className="row mt-4">
          {categories[2].posts.map((blog) => {
            
            if(blog.tags.indexOf(categories[2].tag) != -1){
              
              return <a key={blog._id} href={`/blog/${blog._id}`} className="col-md-4">
                      <figure className="card-image">
                        <img src={blog.image} alt="card image" />
                      </figure>
                      {blog.tags.map((tag, index) => {
                        return <a key={index} href={`/search/${tag}`} className="card-tag d-inline-block">
                                {tag}
                              </a>
                      })}
                      
                      <h3 className="heading-3 mt-3">
                        {blog.title}
                      </h3>
                      <p className="card-date">{new Date(blog.creationDate).toLocaleDateString("en-US", dateOptions)} • {getReadTimer(blog)}</p>
                      <p className="card-text">
                      {blog.description}
                      </p>
                    </a>
            }
          })}
          </div>
          <a href={`/search/${categories[2].tag}`} className="btn d-flex align-items-center gap-3 mt-5">
            See More {categories[2].tag}
            <i className="far fa-arrow-right"></i>
          </a>
        </div>
      </section> }

      {categories[3] && categories[3].tag && <section className="blog-card__container py-sm-5 bg-light-shade">
        <div className="container">
          <div className="title--wrapper d-flex align-items-center">
            <img
              className="title-bg me-2"
              src="images/Rectangle.png"
              alt="heading-bg"
            />
            <h2 className="heading-2">{categories[3].tag}</h2>
          </div>
          <div className="row mt-4">
          {categories[3].posts.map((blog) => {
            if(blog.tags.indexOf(categories[3].tag) != -1){
              return <a key={blog._id} href={`/blog/${blog._id}`} className="col-md-4">
                      <figure className="card-image">
                        <img src={blog.image} alt="card image" />
                      </figure>
                      {blog.tags.map((tag, index) => {
                        return <a key={index} href={`/search/${tag}`} className="card-tag d-inline-block">
                                {tag}
                              </a>
                      })}
                      <h3 className="heading-3 mt-3">
                        {blog.title}
                      </h3>
                      <p className="card-date">{new Date(blog.creationDate).toLocaleDateString("en-US", dateOptions)} • {getReadTimer(blog)}</p>
                      <p className="card-text">
                      {blog.description}
                      </p>
                    </a>
            }
          })}
          </div>
          <a href={`/search/${categories[3].tag}`} className="btn d-flex align-items-center gap-3 mt-5">
            See More {categories[3].tag}
            <i className="far fa-arrow-right"></i>
          </a>
        </div>
      </section> }

      {categories[4] && categories[4].tag && <section className="blog-card__container py-sm-5 bg-light-shade">
        <div className="container">
          <div className="title--wrapper d-flex align-items-center">
            <img
              className="title-bg me-2"
              src="images/Rectangle.png"
              alt="heading-bg"
            />
            <h2 className="heading-2">{categories[4].tag}</h2>
          </div>
          
          <div className="row mt-4">
          {categories[4].posts.map((blog) => {
            
            if(blog.tags.indexOf(categories[4].tag) != -1){
              
              return <a key={blog._id} href={`/blog/${blog._id}`} className="col-md-4">
                      <figure className="card-image">
                        <img src={blog.image} alt="card image" />
                      </figure>
                      {blog.tags.map((tag, index) => {
                        return <a key={index} href={`/search/${tag}`} className="card-tag d-inline-block">
                                {tag}
                              </a>
                      })}
                      
                      <h3 className="heading-3 mt-3">
                        {blog.title}
                      </h3>
                      <p className="card-date">{new Date(blog.creationDate).toLocaleDateString("en-US", dateOptions)} • {getReadTimer(blog)}</p>
                      <p className="card-text">
                      {blog.description}
                      </p>
                    </a>
            }
          })}
          </div>
          <a href={`/search/${categories[4].tag}`} className="btn d-flex align-items-center gap-3 mt-5">
            See More {categories[4].tag}
            <i className="far fa-arrow-right"></i>
          </a>
        </div>
      </section> }

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
