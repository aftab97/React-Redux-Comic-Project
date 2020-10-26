import Axios from "axios";

export const REQUEST_COMICS = "REQUEST_COMICS";
export const RECEIVE_COMICS = "RECEIVE_COMICS";
export const ERROR_COMICS = "ERROR_COMICS";

const requestUsers = () => ({
  type: REQUEST_COMICS,
});

const receiveUsers = (comics) => ({
  type: RECEIVE_COMICS,
  payload: comics,
});

const errorComics = () => ({
  type: ERROR_COMICS,
});

export const requestComicsAction = (number) => {
  return async (dispatch) => {
    dispatch(requestUsers());

    // SOLUTION 1 - using a proxy
    const comics = await Axios.get(`/${number}/info.0.json`)
      .then((res) => {
        dispatch(receiveUsers(res.data));
      })
      .catch((err) => {
        dispatch(errorComics());

        console.log(err);
      });

    // SOLUTION 2 - commment out "proxy":"https://xkcd.com" , in the package.json file
    // const comics = await Axios.get(
    //   `https://cors-anywhere.herokuapp.com/https://xkcd.com/${number}/info.0.json`,
    // );
  };
};
