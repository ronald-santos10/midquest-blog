import axios from "axios";

const API_BASE_URL = "http://localhost:1337/api";

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getRecentPosts = async (limit: number = 5) => {
  try {
    const response = await api.get(`/posts?sort=publishedAt:desc&pagination[limit]=${limit}&populate=*`);

    return response.data.data;
  } catch (error) {
    console.error("Erro ao buscar posts recentes:", error);
    return [];
  }
};

export const getCategories = async () => {
  try {
    const response = await api.get("/categories?populate=*");
    return response.data.data;
  } catch (error) {
    console.error("Erro ao buscar categorias:", error);
    return [];
  }
};

export const getAllPosts = async () => {
  try {
    const response = await api.get("/posts?populate=*");
    return response.data.data;
  } catch (error) {
    console.error("Erro ao buscar todos os posts:", error);
    return [];
  }
};

export const getPostsByCategory = async (categorySlug: string) => {
  try {
    const response = await api.get(
      `/posts?populate=cover,category,author&filters[category][slug][$eq]=${categorySlug}`
    );
    return response.data.data;
  } catch (error) {
    console.error(`Erro ao buscar posts da categoria ${categorySlug}:`, error);
    return [];
  }
};

export const getPostBySlug = async (slug: string) => {
  try {
    const response = await api.get(
      `/posts?populate=cover,category,author&filters[slug][$eq]=${slug}`
    );
    return response.data.data[0];
  } catch (error) {
    console.error(`Erro ao buscar o post com slug ${slug}:`, error);
    return null;
  }
};
