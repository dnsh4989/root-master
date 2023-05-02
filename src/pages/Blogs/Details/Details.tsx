import { useParams } from "react-router";
import "./Details.scss";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Chevrolet from "../../../img/astro.png";
import Optimize from "../../../img/optimize.png";
import Header from "../../../components/Header/Header";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";

const Details = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <Container>
        <div className="details-container">
          <Header />

          <div className="article-content">
            <div className="container">
              <div className="cs-blog-detail">
                <div className="cs-main-post">
                  <figure>
                    <img
                      data-pagespeed-url-hash="2714250504"
                      alt="jobline-blog (8)"
                      src="http://jobcareer.chimpgroup.com/jobdoor/wp-content/uploads/jobline-blog-8.jpg"
                    />
                  </figure>
                </div>
                <div className="cs-post-title">
                  <div className="cs-author">
                    <figure>
                      <a href="http://jobcareer.chimpgroup.com/jobdoor/user/jobcareer-admin/">
                        <img
                          width="32"
                          height="32"
                          data-pagespeed-url-hash="1229941675"
                          className="avatar avatar-32 photo"
                          src="http://1.gravatar.com/avatar/7a20fad302fc2dd4b4649dc5bdb3c463?s=32&amp;d=mm&amp;r=g"
                          alt=""
                        />
                      </a>
                    </figure>
                    <div className="cs-text">
                      <a href="http://jobcareer.chimpgroup.com/jobdoor/user/jobcareer-admin/">
                        Julia Andrason
                      </a>
                    </div>
                  </div>
                  <div className="post-option">
                    <span className="post-date">
                      <a href="http://jobcareer.chimpgroup.com/jobdoor/2015/11/">
                        <i className="cs-color icon-calendar6"></i>Nov 23, 2015
                      </a>
                    </span>
                    <span className="post-comment">
                      <a href="http://jobcareer.chimpgroup.com/jobdoor/experience-writing-for-producing-a-newscast/#comments">
                        <i className="cs-color icon-chat6"></i>4 Comments
                      </a>
                    </span>
                  </div>
                </div>
                <div className="cs-post-option-panel">
                  <div className="rich-editor-text">
                    <p>
                      Ravenously while stridently coughed far promiscuously
                      below jeez much yikes bland that salamander cunningly some
                      over abhorrent as house with between ouch that well
                      scurrilously alas capybara massive outdid oh said hello
                      majestically roadrunner lobster much bled alas lighted
                      together waved upheld more far woolly ahead darn far far
                      bore far far saw baneful upset rebound bowed possessive
                      before or indisputably against.
                    </p>
                    <p>
                      After hamster hello less far astride where accordingly
                      much because some far innocently invoked far pre-set or
                      objective this pangolin tendentiously eagle near spread
                      and overlay as abysmal a and before walrus much therefore
                      some close victorious jeepers deeply forward while jeez
                      and overlaid save hey ritually notwithstanding mounted
                      about nonchalantly and less hence far like hey kissed.
                      Hello impotent ravenous hey accordingly well much
                      lopsidedly one far blinked lorikeet sternly futile jeepers
                      strewed well following subconscious far on egregiously and
                      away far alas much forward in but far opposite less
                      editorial some together.
                    </p>
                    <h4>Simple answer is, because other candidates won’t.</h4>
                    <p>
                      Ravenously while stridently coughed far promiscuously
                      below jeez much yikes bland that salamander cunningly some
                      over abhorrent as house with between ouch that well
                      scurrilously alas capybara massive outdid oh said hello
                      majestically roadrunner lobster much bled alas lighted
                      together waved upheld.
                    </p>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <blockquote className="text-left-align">
                        <span>
                          {" "}
                          Ravenously while stridently coughed far promiscuously
                          below jeez much yikes bland that salamander cunningly
                          some over abhorrent as house with between ouch that
                          well scurrilously alas capybara massive outdid oh said
                          hello majestically roadrunner lobster much bled alas
                          lighted together waved upheld.
                        </span>
                        <span className="author-name">
                          {" "}
                          <a href="#">-- Robert Deneairo</a>
                        </span>
                      </blockquote>
                    </div>
                    <p>
                      Ravenously while stridently coughed far promiscuously
                      below jeez much yikes bland that salamander cunningly some
                      over abhorrent as house with between ouch that well
                      scurrilously alas capybara massive outdid oh said hello
                      majestically roadrunner lobster much bled alas lighted
                      together waved upheld.
                    </p>
                  </div>
                </div>
                <div className="cs-tags">
                  <div className="tags">
                    <span>Tags</span>
                    <ul>
                      <li>
                        <a
                          rel="tag"
                          href="http://jobcareer.chimpgroup.com/jobdoor/tag/college/"
                        >
                          College
                        </a>
                      </li>
                      <li>
                        <a
                          rel="tag"
                          href="http://jobcareer.chimpgroup.com/jobdoor/tag/job/"
                        >
                          Job
                        </a>
                      </li>
                      <li>
                        <a
                          rel="tag"
                          href="http://jobcareer.chimpgroup.com/jobdoor/tag/search/"
                        >
                          Search
                        </a>
                      </li>
                      <li>
                        <a
                          rel="tag"
                          href="http://jobcareer.chimpgroup.com/jobdoor/tag/teacher/"
                        >
                          Teacher
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Details;
