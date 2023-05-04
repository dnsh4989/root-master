import "./Blogs.scss";
import Header from "../../components/Header/Header";
import { useEffect } from "react";
import { fetchBlogPosts } from "../../store/blogs-actions";
import { useAppDispatch, useAppSelector } from "../../shared/hooks/hooks";
import { useFetchBlogsQuery } from "../../store/blogs-api-slice";
import { Blog } from "../../shared/interfaces/blogs.interface";

const Blogs = () => {
  const dispatch = useAppDispatch();

  console.log(document);
  document.getElementsByTagName("html")[0].style.overflow = "scroll";

  const articles = useAppSelector((state: any) => state.articles);

  const { data = [], isFetching } = useFetchBlogsQuery();

  console.log(data);

  useEffect(() => {
    dispatch(fetchBlogPosts());
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className="blogs-main">
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
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
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
          {data.map((article: Blog) => {
            return (
              <div className={"item-" + article.id} key={article.id}>
                <a href={article.image} className="card2">
                  <div
                    className="thumb"
                    style={{
                      backgroundImage:
                        "url(https://live.staticflickr.com/65535/52756975910_69de8f798a_c.jpg)",
                    }}
                  ></div>
                  <article>
                    <h1>{article.title}</h1>
                    <span>{article.description}</span>
                  </article>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Blogs;
