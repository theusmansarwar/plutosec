import { invokeApi } from "../utils/InvokeApi";

export const fetchallBloglist = async ( page, rowsPerPages) => {
  const reqObj = {
    path: `/blog/list?limit=${rowsPerPages}&page=${page}`,
    method: "GET",
    headers: {},

    body: {},
  };
  return invokeApi(reqObj);
};
export const fetchBlogById = async (id) => {
  const reqObj = {
    path: `/blog/viewbyid/${id}`,
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    },

    body: {},
  };
  return invokeApi(reqObj);
};
