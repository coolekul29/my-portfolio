// Import React and some hooks we need
import React, { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet";
// Import fetch functions to get data from APIs
import { fetchRepos } from "../services/github";
import { fetchDevToArticles } from "../services/devto";
import { fetchYouTubeVideos } from "../services/youtube";
// Reuse these components
import ItemCard from "../components/ItemCard";
import SearchBar from "../components/SearchBar";

// How many cards to show in each section
const VISIBLE_LIMIT = 8;

// This is the Portfolio page. It shows my YouTube videos, GitHub projects, and Dev.to posts
export default function Portfolio() {
  // Store data from each API
  const [repos, setRepos] = useState([]);
  const [posts, setPosts] = useState([]);
  const [videos, setVideos] = useState([]);

  // Loading spinner state
  const [loading, setLoading] = useState(true);

  const [query, setQuery] = useState("");

  // This runs once when the page first loads. It gets data from GitHub, Dev.to, and YouTube at the same time
  useEffect(() => {
    let live = true; 

    (async () => {
      // Run all 3 requests in parallel
      const [r, p, v] = await Promise.allSettled([
        fetchRepos(),
        fetchDevToArticles(),
        fetchYouTubeVideos(),
      ]);

      // if component unmounted, just stop
      if (!live) return;

      // If the request worked, use the data. If it failed, use []
      setRepos(r.status === "fulfilled" ? r.value || [] : []);
      setPosts(p.status === "fulfilled" ? p.value || [] : []);
      setVideos(v.status === "fulfilled" ? v.value || [] : []);

      setLoading(false);
    })();

    return () => { live = false; };
  }, []);

  // Filter GitHub repos by search text
  const filteredRepos = useMemo(() => {
    const q = query.trim().toLowerCase();
    return repos.filter(repo =>
      !q ||
      repo.name?.toLowerCase().includes(q) ||
      repo.description?.toLowerCase().includes(q)
    );
  }, [repos, query]);

  // Filter Dev.to posts by search text
  const filteredPosts = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter(post =>
      !q ||
      post.title?.toLowerCase().includes(q) ||
      post.description?.toLowerCase().includes(q)
    );
  }, [posts, query]);

  // Filter YouTube videos by search text
  const filteredVideos = useMemo(() => {
    const q = query.trim().toLowerCase();
    return videos.filter(v =>
      !q ||
      (v.title || "").toLowerCase().includes(q) ||
      (v.description || "").toLowerCase().includes(q)
    );
  }, [videos, query]);

  // Only show the first results
  const reposToShow  = useMemo(
    () => filteredRepos.slice(0, VISIBLE_LIMIT),
    [filteredRepos]
  );

  const postsToShow  = useMemo(
    () => filteredPosts.slice(0, VISIBLE_LIMIT),
    [filteredPosts]
  );

  const videosToShow = useMemo(
    () => filteredVideos.slice(0, VISIBLE_LIMIT),
    [filteredVideos]
  );

  // Show loading message while we wait for data
  if (loading) return <p className="container">Loading portfolio…</p>;

  // Main page layout
  return (
    <section className="container portfolio-section">
      <Helmet>
        <title>My Portfolio | Portfolio</title>
      </Helmet>
      <h2>Portfolio</h2>
      <p>
        Browse my code projects from <b>GitHub</b>, articles from <b>Dev.to</b>,
        and <b>YouTube</b> videos. Use the search to filter.
      </p>

      {/* Search bar (only keyword search, no dropdown filter) */}
      <SearchBar query={query} setQuery={setQuery} />

      {/* Videos Section */}
      <h3 className="section-heading">Videos</h3>
      <div className="grid">
        {videosToShow.map(v => (
          <ItemCard key={`yt-${v.id}`} item={v} type="youtube" />
        ))}
        {filteredVideos.length === 0 && (
          <p>No videos match your search.</p>
        )}
      </div>
      {filteredVideos.length > VISIBLE_LIMIT && (
        <p className="muted">
          +{filteredVideos.length - VISIBLE_LIMIT} more
        </p>
      )}

      {/* Projects Section (GitHub repos) */}
      <h3 className="section-heading">Projects</h3>
      <div className="grid">
        {reposToShow.map(r => (
          <ItemCard key={`repo-${r.id}`} item={r} type="repo" />
        ))}
        {filteredRepos.length === 0 && (
          <p>No projects match your search.</p>
        )}
      </div>
      {filteredRepos.length > VISIBLE_LIMIT && (
        <p className="muted">
          +{filteredRepos.length - VISIBLE_LIMIT} more
        </p>
      )}

      {/* Articles Section (Dev.to posts) */}
      <h3 className="section-heading">Articles</h3>
      <div className="grid">
        {postsToShow.map(p => (
          <ItemCard key={`post-${p.id}`} item={p} type="post" />
        ))}
        {filteredPosts.length === 0 && (
          <p>No articles match your search.</p>
        )}
      </div>
      {filteredPosts.length > VISIBLE_LIMIT && (
        <p className="muted">
          +{filteredPosts.length - VISIBLE_LIMIT} more
        </p>
      )}
    </section>
  );
}