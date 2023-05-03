import { cartActions } from "./blogs-slice";
import { uiActions } from "./ui-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://test-db-8d88d.firebaseio.com/cart.json",
        {
          method: "GET",
        }
      );

      if (!response.ok) {
        throw new Error("Couldn't fetch cart data!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(cartActions.replaceCart(cartData));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error..!",
          message: "Fetching cart data failed..!!",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
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
