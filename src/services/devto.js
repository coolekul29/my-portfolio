// Import axios so we can get data from the internet
import axios from "axios";

// DEV.to API lets us read public blog posts
const DEVTO_USERNAME = process.env.REACT_APP_DEVTO_USERNAME;

// Get all articles from the DEV.to account
export async function fetchDevToArticles() {
  
  const res = await axios.get(`https://dev.to/api/articles?username=${DEVTO_USERNAME}`);
  
  return res.data;
}

// Get one article by its ID
export async function fetchDevToArticleById(id) {
  
  const res = await axios.get(`https://dev.to/api/articles/${id}`);

  return res.data;
}