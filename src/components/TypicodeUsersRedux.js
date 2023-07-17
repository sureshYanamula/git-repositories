import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const userData = () => {
  return axios.get("https://jsonplaceholder.typicode.com/todos");
};

function TypicodeUsersRedux() {
  const dispatch = useDispatch();

  const { typicodeReduxStateReducer } = useSelector((state) => ({ ...state }));

  React.useEffect(() => {
    dispatch({
      type: "TYPI_USER_PENDING",
      payload: "",
    });
    userData()
      .then((resp) => {
        dispatch({
          type: "TYPI_USER_SUCCESS",
          payload: resp.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: "TYPI_USER_FAILURE",
          payload: "",
        });
      });
  }, []);

  return (
    <div>
      {typicodeReduxStateReducer.loading && <h1>Loading...</h1>}
      {typicodeReduxStateReducer.error && (
        <h1>{typicodeReduxStateReducer.error}</h1>
      )}
      {typicodeReduxStateReducer.userData.length
        ? typicodeReduxStateReducer.userData.map((item) => (
            <>
              <table>
                <tr>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                </tr>
              </table>
            </>
          ))
        : null}
    </div>
  );
}

export default TypicodeUsersRedux;
