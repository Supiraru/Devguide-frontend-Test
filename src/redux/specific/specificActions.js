import { SPECIFIC_SUCCESS, SPECIFIC_FAILED } from "./specificTypes";
import axios from "axios";

export const fetchSpecific = (id, headers) => {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_URL_BACKEND}/comment/specific/${id}/`, {
        headers: {
          Authorization: headers,
        },
      })
      .then((response) => {
        // response.data is the users
        const specifics = response.data;
        dispatch(specificSuccess(specifics));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(specificFailure(error.message));
      });
  };
};

export const specificSuccess = (data) => {
  return {
    type: SPECIFIC_SUCCESS,
    payload: data,
  };
};

export const specificFailure = (error) => {
  return {
    type: SPECIFIC_FAILED,
    payload: error,
  };
};
