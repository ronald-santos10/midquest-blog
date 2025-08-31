import axios from "axios";
import type { Post } from './types';

const API_BASE_URL = `${import.meta.env.PUBLIC_API_URL}/api`;

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getRecentPosts = async (limit: number = 5) => {
  try {
    const response = await api.get(
      `/posts?sort=publishedAt:desc&pagination[limit]=${limit}&populate=*`
    );

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
      `/posts?populate=*&filters[category][slug][$eq]=${categorySlug}`
    );
    return response.data.data;
  } catch (error) {
    console.error(`Erro ao buscar posts da categoria ${categorySlug}:`, error);
    return [];
  }
};

export const getPostBySlug = async (slug: string): Promise<Post | null> => {
  try {
    const response = await api.get(`/posts?populate=*&filters[slug][$eq]=${slug}`);
    
    const post = response.data.data[0] as Post | undefined;

    return post ?? null;
  } catch (error) {
    console.error(`Erro ao buscar o post com slug ${slug}:`, error);
    return null;
  }
};
