import React from "react";
import Wrapper from "./components/Wrapper";
import Home from "./components/Home";
import Aboutus from "./components/Aboutus";
import Affiliate from "./components/Affiliate";
import Blog from "./components/Blog";
import Blog2 from "./components/Blog2";
import BusinessFormation from "./components/BusinessFormation";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import JoinNetwork from "./components/JoinNetwork";
import LimitedLiability from "./components/LimitedLiability";
import PressRelease from "./components/PressRelease";
import Search from "./components/Search";
import { BlogProvider } from './context/BlogState';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BlogProvider>
      <Router>
        <Switch>
          <Wrapper>
            <Route
              component={({ match }) => (
                <div>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about-us" component={Aboutus} />
                  <Route exact path="/affiliate" component={Affiliate} />
                  <Route exact path="/blog/:blogId" component={Blog} />
                  <Route exact path="/blog-2" component={Blog2} />
                  <Route
                    exact
                    path="/business-formation"
                    component={BusinessFormation}
                  />
                  <Route exact path="/contact" component={Contact} />
                  <Route exact path="/faq" component={FAQ} />
                  <Route exact path="/join-network" component={JoinNetwork} />
                  <Route
                    exact
                    path="/limited-liability"
                    component={LimitedLiability}
                  />
                  <Route exact path="/press-release" component={PressRelease} />
                  <Route exact path="/search" component={Search} />
                  <Route path="/search/:category" component={Search} />
                </div>
              )}
            />
          </Wrapper>
        </Switch>
      </Router>
    </BlogProvider>
  );
}

export default App;
