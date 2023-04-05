import { axiosInstance } from "../../utils/axios";

export const getRelatedPosts = async ({tags, id}) => {
  const queryString =
    tags?.length > 0
      ? tags.map((tag) => `tags_like=${tag}`).join("&") + `&id_ne=${id}`
      : `id_ne=${id}`;

      const response = await axiosInstance(`/blogs?${queryString}`);
      return response.data;
};
