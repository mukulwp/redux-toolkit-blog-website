import { axiosInstance } from "../../utils/axios";

export const getBlogs = async ({sortValue, checkedValue}) => {
  let queryString = "";

  if(sortValue === "newest"){
    queryString += `_sort=id&_order=desc`;
  }
  if(sortValue === "most_liked"){
    queryString += `_sort=likes&_order=desc`;
  }

  if(checkedValue === "saved"){
    queryString += "&isSaved=true";
  }

  const response = await axiosInstance.get(`/blogs?${queryString}`);
  return response.data;
};
