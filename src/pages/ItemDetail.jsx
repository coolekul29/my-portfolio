// Import React and some hooks we need
import React, { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet";
// Import Link and useParams from react-router so we can read the URL and make links
import { Link, useParams } from "react-router-dom";
// Functions to load data from GitHub, DEV.to and Youtube
import { fetchRepoById } from "../services/github";
import { fetchDevToArticles } from "../services/devto";
import { fetchYouTubeVideos } from "../services/youtube";


// This page shows details for one item
export default function ItemDetail() {
  // Type can be "repo" or "post"
  const { type, id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load data when the page first opens or when type/id changes
  useEffect(() => {
    let live = true;
    (async () => {
      try {
        if (type === "repo") {
          // GitHub repo by ID
          const repo = await fetchRepoById(id);
          if (live) setItem(repo);

        } else if (type === "post") {
          // Dev.to article by ID
          const posts = await fetchDevToArticles();
          const post = posts?.find(p => String(p.id) === String(id)) || null;
          if (live) setItem(post);

        } else if (type === "youtube") {
          // YouTube video by ID
          const vids = await fetchYouTubeVideos();
          const vid = vids?.find(v => String(v.id) === String(id)) || null;
          if (live) setItem(vid);
        }
      } catch (e) {
        console.error(e);
      } finally {
        if (live) setLoading(false);
      }
    })();
    return () => { live = false; };
  }, [type, id]);


  // Build view object 
  const view = useMemo(() => {
    if (!item) return null;

    if (type === "repo") {
      const updatedAt = item.pushed_at || item.updated_at;
      return {
        title: item.name,
        description: item.description || "No description provided.",
        language: item.language || "N/A",
        stars: item.stargazers_count || 0,
        forks: item.forks || 0,
        watchers: item.watchers || 0,
        lastPush: updatedAt ? new Date(updatedAt).toLocaleString() : "—",
        href: item.html_url,
        secondaryHref: item.homepage || null,
        secondaryLabel: item.homepage ? "Live site" : null,
      };
    }

    if (type === "post") {
      return {
        title: item.title,
        description: item.description || item.summary || "No description provided.",
        language: "Article",
        stars: null,
        forks: null,
        watchers: null,
        lastPush: item.published_at
          ? new Date(item.published_at).toLocaleString()
          : "—",
        href: item.url || item.canonical_url,
        secondaryHref: null,
        secondaryLabel: null,
      };
    }

    if (type === "youtube") {
      return {
        title: item.title || "Untitled video",
        description: item.description || "No description provided.",
        language: "YouTube Video",
        stars: null,
        forks: null,
        watchers: null,
        lastPush: item.publishedAt
          ? new Date(item.publishedAt).toLocaleString()
          : "—",
        href: item.url || (item.id ? `https://www.youtube.com/watch?v=${item.id}` : null),
        secondaryHref: null,
        secondaryLabel: null,
      };
    }

    return null;
  }, [item, type]);

  // While waiting for data
  if (loading) {
    return (
      <section className="container">
        <div className="detail-wrap">
          <div className="skeleton-card" />
        </div>
      </section>
    );
  }

  // If it couldn't load the item at all
  if (!view) {
    return (
      <section className="container">
        <div className="detail-wrap">
          <p>We couldn’t load this item.</p>
          <Link className="btn btn-ghost" to="/portfolio">
            ← Back to Portfolio
          </Link>
        </div>
      </section>
    );
  }

  // Main layout for the details page
  return (
    <section className="container">
      <Helmet>
      <title>My Portfolio | Item Details</title>
      </Helmet>
      <div className="detail-wrap">

        {/* Top bar with back button */}
        <div className="detail-topbar">
          <Link to="/portfolio" className="back-link">
            ← Back to Portfolio
          </Link>
        </div>

        {/* Card that shows all info about this item */}
        <article className="detail-card">
          <header className="detail-header">
            {/* Title of the repo or post or video clip name*/}
            <h1 className="detail-title">{view.title}</h1>

            {/* Badges: shows what type it is and repo stats like stars */}
            <div className="detail-badges">
              <span className="badge">{view.language}</span>

              {/* Only show stars/forks/watchers if it's a GitHub repo */}
              {type === "repo" && (
                <>
                  <span className="badge">Star {view.stars}</span>
                  <span className="badge">Forks {view.forks}</span>
                  <span className="badge">Watch {view.watchers}</span>
                </>
              )}
            </div>

            {/* Last update / published time */}
            <div className="detail-sub">
              <span className="stat">
                <strong>Last update:</strong> {view.lastPush}
              </span>
            </div>
          </header>

          {/* Description text */}
          <div className="detail-body">
            <p className="detail-desc">{view.description}</p>
          </div>

          {/* Buttons to open GitHub or the article, or the live site if it exists */}
          <div className="detail-actions">
            {view.href && (
              <a
                href={view.href}
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                {type === "repo"
                ? "Open on GitHub"
                : type === "post"
                ? "Read article"
                : type === "youtube"
                ? "Watch YouTube"
                : "View item"}
              </a>
            )}

            {view.secondaryHref && (
              <a
                href={view.secondaryHref}
                className="btn btn-outline"
                target="_blank"
                rel="noreferrer"
              >
                {view.secondaryLabel}
              </a>
            )}
          </div>
        </article>
      </div>
    </section>
  );
}