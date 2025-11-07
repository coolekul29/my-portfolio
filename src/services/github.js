// Import axios so we can get data from the internet
import axios from "axios";

// This uses the public GitHub API (no key needed)
const USERNAME = process.env.REACT_APP_GITHUB_USERNAME;

// Get all public repos from the GitHub account
export async function fetchRepos() {
  
  const res = await axios.get(`https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=pushed`);
  
  return res.data;
}

// Get one repo by its ID
export async function fetchRepoById(id) {
  
  const res = await axios.get(`https://api.github.com/repositories/${id}`);
  
  return res.data;
}
