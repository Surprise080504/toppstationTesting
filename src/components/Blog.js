import React, {useEffect, useContext, useState} from "react";
import "../styling/blog.css";

import { Link, useHistory, useParams } from "react-router-dom"
import { BlogContext } from '../context/BlogState';


const Blog = (props) => {
  const {getBlogs, getBlog, ...blogsState} = useContext(BlogContext);
  const [blog, setblog] = useState({});
  const [categories, setCategories] = useState([]);
  const [posts, setPosts] = useState([]);

  let { blogId } = useParams();

  useEffect(() => {
    getBlog(blogId).then((res) => {
      setblog(res[0])
      getBlogs().then((ress) => {
        setPosts(ress)
        createCategories(res ,ress)
      });
    });
  }, [blogId]);

  const createCategories = (item, list) => {
    let categorieslist = {tag: item[0].tags[0], posts: []};
      list.forEach(listItem => {
        listItem.tags.forEach((tag) => {
            if(categorieslist.posts.length < 3 && 
             listItem._id != item[0]._id && 
             !findIfInList(listItem, categorieslist.posts) &&
              tag == item[0].tags[0]){
              categorieslist.posts.push(listItem)
            }
        });
      });
    setCategories(categorieslist)
  }

  const findIfInList = (item, list) => {
    list.forEach((listItem) => {
      if(listItem._id == item._id) return true;
    })
    return false;
  }
  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hours: 'numeric', minutes: 'numeric'};

  const getReadTimer = (blog) => {
    let timer =  Math.round(blog.text.length / 60);
    if (timer > 60) return Math.trunc((timer / 60)) + " Min read"
    else return Math.trunc((timer)) + " Sec read"
  }

  const fixText = (text) => {
    if(text){
    let holder = text.replace('<p></p>', '');
    return holder;
    }
  }

  return (
    <div className="blog-page">
      <section className="blog pt-5">
        <div className="container">
          <div className="row">
            <div className="col-12 coverImageContainer">
              <img
                src={blog.image}
                alt="Blog Image"
                className="img-fluid coverImage"
              />
            </div>
          </div>
          <div className="row align-items-center blog__user-info mt-4 gap-4 gap-md-0">
            <div className="col-12 col-md-6 d-flex align-items-center gap-3">
              <figure className="mb-0">
                <img
                  src='images/person.svg'
                  alt="Blog Writer Image"
                  className="img-fluid user-thumbnail"
                  width="40"
                />
              </figure>
              <div className="user-name__wrapper">
                <h5 className="h5 mb-1 user-name">{blog.creator}</h5>
                <p className="mb-0  posted-date">Posted on {new Date(blog.creationDate).toLocaleDateString("en-US", dateOptions)}</p>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="social-icons__wrapper d-flex align-items-center justify-content-start justify-content-md-end gap-3">
                <a
                  href="#"
                  className="d-flex align-items-center justify-content-start social-icon__wrapper rounded-circle p-2 bg-white"
                >
                  <img src="images/facebook.png" alt="Facebook" />
                </a>
                <a
                  href="#"
                  className="d-flex align-items-center justify-content-start social-icon__wrapper rounded-circle p-2 bg-white"
                >
                  <img src="images/twitter.png" alt="Twitter" />
                </a>
                <a
                  href="#"
                  className="d-flex align-items-center justify-content-start social-icon__wrapper rounded-circle p-2 bg-white"
                >
                  <img src="images/instagram.png" alt="Instagram" />
                </a>
                <a
                  href="#"
                  className="d-flex align-items-center justify-content-start social-icon__wrapper rounded-circle p-2 bg-white"
                >
                  <img src="images/youtube.png" alt="Youtube" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-data bg-white">
        <div className="container">
          <div className="row">
            <h1 className="h1 my-5 blogTitle">{blog.title}</h1>
             <div className="textElement " dangerouslySetInnerHTML={{ __html: fixText(blog.text) }} />
          </div>
          
          <div className="text-center mt-3 mt-md-2 mb-5 ctaButton">
            <a
              href={blog.cta}
              className="text-white text-decoration-none rounded-pill start-btn"
            >
              {blog.ctaText}
            </a>
          </div>
        </div>
      </section>
      <section className="post-writer__data">
        {blog.user && <div className="container">
          <div className="row align-items-center p-4 gap-3 gap-md-0">
            <div className="col-md-3 text-center">
              <img
                src='images/person.svg'
                alt="User"
                className="img-fluid"
              />
            </div>
            <div className="col-md-9 text-center text-md-start">
              <h3 className="h3 text-white">{blog.creator}</h3>
              <p className="font-ubuntu writer-job">{blog.user.job}</p>
              <p className="text-white font-ubuntu">
                {blog.user.description}
              </p>
            </div>
          </div>
        </div>}
      </section>
      <section className="related-topics mb-5">
        <div className="container">
          <h2 className="h2 my-4">Related Topics</h2>
          <div className="d-flex align-items-center flex-wrap gap-2 gap-md-4">
            {blog.tags && blog.tags.map((tag, index) => {
              return <a href={`/search/${tag}`} key={index} className="text-decoration-none rounded-pill bg-white related-topics__btn" > {tag} </a>
            })}
          </div>
        </div>
      </section>
      <section className="popular-blog-posts">
        <div className="container">
          <h2 className="h2 my-4">You Might Like</h2>
          <div className="row gap-5 gap-sm-5 gap-md-0">
            {categories.posts && categories.posts.map((post) => {
                  return <a key={post._id} href={`/blog/${post._id}`} className="col-md-4">
                  <figure className="card-image">
                    <img src={post.image} alt="card image" />
                  </figure>
                  {post.tags.map((tag, index) => {
                    return <a key={index} href={`/search/${tag}`} className="card-tag d-inline-block">
                            {tag}
                          </a>
                  })}
                  
                  <h3 className="heading-3 mt-3">
                    {post.title}
                  </h3>
                  <p className="card-date">{new Date(post.creationDate).toLocaleDateString("en-US", dateOptions)} • {getReadTimer(post)}</p>
                  <p className="card-text">
                  {post.description}
                  </p>
                </a>
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
