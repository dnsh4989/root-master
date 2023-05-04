import { articleActions } from "./blogs-slice";
import { uiActions } from "./ui-slice";

export const fetchBlogPosts = () => {
  return async (dispatch: any) => {
    const fetchData = async () => {
      const response = await fetch(
        "http://127.0.0.1:8001/api/subscriber/articles/frontend/",
        {
          method: "GET",
        }
      );

      if (!response.ok) {
        throw new Error("Couldn't fetch blog posts!");
      }

      const data: any = await response.json();

      return data;
    };

    try {
      const blogPosts = await fetchData();
      dispatch(articleActions.replaceAllArticles(blogPosts));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error..!",
          message: "Fetching blog posts failed..!!",
        })
      );
    }
  };
};

export const sendCartData = (cart: any) => {
  return async (dispatch: any) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending..",
        message: "Sending cart data..!!",
      })
    );

    const sendApiCall = async () => {
      const response = await fetch(
        "https://test-db-8d88d.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed!");
      }
    };

    try {
      await sendApiCall();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success..!",
          message: "Sent cart data successfully..!!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error..!",
          message: "Send cart data failed..!!",
        })
      );
    }
  };
};
