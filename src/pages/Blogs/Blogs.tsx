import LandingPage from "../../components/LandingPage/LandingPage";
import "./Blogs.scss";

const Blogs = () => {
  console.log(document);
  document.getElementsByTagName("html")[0].style.overflow = "scroll";

  return (
    <>
      <div className="blogs-main">
        <div className="header__logo-box">
          <span className="header__logo">Dinesh SanaLa</span>
        </div>

        <div className="band" style={{ display: "block" }}>
          <div className="search-container" style={{ width: "100%" }}>
            <div className="Card">
              <div className="CardInner">
                <label>Search for your favourite technologies</label>
                <div className="container">
                  <div className="Icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#657789"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-search"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                  </div>
                  <div className="InputContainer">
                    <input placeholder="It just can't be JavaScript..." />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="band">
          <div className="item-1">
            <a
              href="https://design.tutsplus.com/articles/international-artist-feature-malaysia--cms-26852"
              className="card2"
            >
              <div
                className="thumb"
                style={{
                  backgroundImage:
                    "url(https://live.staticflickr.com/65535/52756975910_69de8f798a_c.jpg)",
                }}
              ></div>
              <article>
                <h1>International Artist Feature: Malaysia</h1>
                <span>Mary Winkler</span>
              </article>
            </a>
          </div>
          <div className="item-2">
            <a
              href="https://webdesign.tutsplus.com/articles/how-to-conduct-remote-usability-testing--cms-27045"
              className="card2"
            >
              <div
                className="thumb"
                style={{
                  backgroundImage:
                    "url(https://live.staticflickr.com/65535/52756032442_6a3a46eca5_c.jpg)",
                }}
              ></div>
              <article>
                <h1>How to Conduct Remote Usability Testing</h1>
                <span>Harry Brignull</span>
              </article>
            </a>
          </div>
          <div className="item-3">
            <a
              href="https://design.tutsplus.com/articles/envato-tuts-community-challenge-created-by-you-july-edition--cms-26724"
              className="card2"
            >
              <div
                className="thumb"
                style={{
                  backgroundImage:
                    "url(https://live.staticflickr.com/65535/52756032412_ea3fd4f6c8_c.jpg)",
                }}
              ></div>
              <article>
                <h1>Created by You, July Edition</h1>
                <p>
                  Welcome to our monthly feature of fantastic tutorial results
                  created by you, the Envato Tuts+ community!{" "}
                </p>
                <span>Melody Nieves</span>
              </article>
            </a>
          </div>
          <div className="item-4">
            <a
              href="https://webdesign.tutsplus.com/tutorials/how-to-code-a-scrolling-alien-lander-website--cms-26826"
              className="card2"
            >
              <div
                className="thumb"
                style={{
                  backgroundImage:
                    "url(https://live.staticflickr.com/65535/52757055928_1ff35552b7_c.jpg)",
                }}
              ></div>
              <article>
                <h1>How to Code a Scrolling “Alien Lander” Website</h1>
                <p>
                  We’ll be putting things together so that as you scroll down
                  from the top of the page you’ll see an “Alien Lander” making
                  its way to touch down.
                </p>
                <span>Kezz Bracey</span>
              </article>
            </a>
          </div>
          <div className="item-5">
            <a
              href="https://design.tutsplus.com/tutorials/stranger-things-inspired-text-effect--cms-27139"
              className="card2"
            >
              <div
                className="thumb"
                style={{
                  backgroundImage:
                    "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/china.png)",
                }}
              ></div>
              <article>
                <h1>
                  How to Create a “Stranger Things” Text Effect in Adobe
                  Photoshop
                </h1>
                <span>Rose</span>
              </article>
            </a>
          </div>
          <div className="item-6">
            <a
              href="https://photography.tutsplus.com/articles/5-inspirational-business-portraits-and-how-to-make-your-own--cms-27338"
              className="card2"
            >
              <div
                className="thumb"
                style={{
                  backgroundImage:
                    "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/china.png)",
                }}
              ></div>
              <article>
                <h1>
                  5 Inspirational Business Portraits and How to Make Your Own
                </h1>

                <span>Marie Gardiner</span>
              </article>
            </a>
          </div>
          <div className="item-7">
            <a
              href="https://photography.tutsplus.com/articles/5-inspirational-business-portraits-and-how-to-make-your-own--cms-27338"
              className="card2"
            >
              <div
                className="thumb"
                style={{
                  backgroundImage:
                    "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/china.png)",
                }}
              ></div>
              <article>
                <h1>
                  Notes From Behind the Firewall: The State of Web Design in
                  China
                </h1>
                <span>Kendra Schaefer</span>
              </article>
            </a>
          </div>

          <div className="item-8">
            <a
              href="https://design.tutsplus.com/tutorials/stranger-things-inspired-text-effect--cms-27139"
              className="card2"
            >
              <div
                className="thumb"
                style={{
                  backgroundImage:
                    "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/china.png)",
                }}
              ></div>
              <article>
                <h1>
                  How to Create a “Stranger Things” Text Effect in Adobe
                  Photoshop
                </h1>
                <span>Rose</span>
              </article>
            </a>
          </div>
          <div className="item-9">
            <a
              href="https://photography.tutsplus.com/articles/5-inspirational-business-portraits-and-how-to-make-your-own--cms-27338"
              className="card2"
            >
              <div
                className="thumb"
                style={{
                  backgroundImage:
                    "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/china.png)",
                }}
              ></div>
              <article>
                <h1>
                  5 Inspirational Business Portraits and How to Make Your Own
                </h1>

                <span>Marie Gardiner</span>
              </article>
            </a>
          </div>
          <div className="item-10">
            <a
              href="https://photography.tutsplus.com/articles/5-inspirational-business-portraits-and-how-to-make-your-own--cms-27338"
              className="card2"
            >
              <div
                className="thumb"
                style={{
                  backgroundImage:
                    "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/china.png)",
                }}
              ></div>
              <article>
                <h1>
                  Notes From Behind the Firewall: The State of Web Design in
                  China
                </h1>
                <span>Kendra Schaefer</span>
              </article>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
