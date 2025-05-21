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
export const fetchBlogBySlug = async (id) => {
  const reqObj = {
    path: `/blog/view/${id}`,
    method: "GET",
    headers: {
    },

    body: {},
  };
  return invokeApi(reqObj);
};
export const getComments = async (data) => {
  const reqObj = {
    path: `/comment/approved-comment`,
    method: "GET",
    headers: {
    
    },

    postData: {data},
  };
  return invokeApi(reqObj);
};
