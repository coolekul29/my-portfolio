// Import React and some hooks we need
import React, { useMemo, useState } from "react";
// Import Link so we can go to the details page
import { Link } from "react-router-dom";

// This component shows one item (a repo, post, or YouTube video)
export default function ItemCard({ item, type }) {
  // Used to show or hide the full description
  const [expanded, setExpanded] = useState(false);

  // Set up data for each item based on its type
  const { title, desc, id, externalHref, externalLabel, thumb } = useMemo(() => {

    // If the item is from GitHub
    if (type === "repo") {
      return {
        title: item?.name ?? "Untitled repo",
        desc: item?.description ?? "",
        id: item?.id,
        externalHref: item?.html_url ?? null,
        externalLabel: "GitHub",
        thumb: null,
      };
    }

    // If the item is from DEV.to
    if (type === "post") {
      return {
        title: item?.title ?? "Untitled post",
        desc: item?.description ?? item?.summary ?? "",
        id: item?.id,
        externalHref: item?.url ?? item?.canonical_url ?? null,
        externalLabel: "Read on DEV",
        thumb: null,
      };
    }

    // If the item is a YouTube video
    const t = item?.thumbnails || {};
    const thumbUrl = t.maxres || t.standard || t.high || t.medium || t.default || "";

    return {
      title: item?.title ?? "Untitled video",
      desc: item?.description ?? "",
      id: item?.id,
      externalHref: item?.url ?? (item?.id ? `https://www.youtube.com/watch?v=${item.id}` : null),
      externalLabel: "Watch",
      thumb: thumbUrl,
    };
  }, [item, type]);

  // Check if the description is long (more than 140 characters)
  const tooLong = (desc || "").trim().length > 140;

  return (
    // One card for each item
    <article className="card">

      {/* Show the YouTube thumbnail if the item is a video */}
      {type === "youtube" && thumb && (
        <a
          href={externalHref || "#"}
          target="_blank"
          rel="noreferrer"
          className="thumb-wrap"
          aria-label={`Open YouTube: ${title}`}
        >
          <img className="card-thumb" src={thumb} alt={title} loading="lazy" />
        </a>
      )}

      {/* The item’s title */}
      <h3 className="card-title">{title || "Untitled"}</h3>

      {/* The description (can expand or collapse) */}
      <p className={`card-desc ${expanded ? "expanded" : "clamp-3"}`}>
        {desc || "No description provided."}
      </p>

      {/* Button to see more or less of the description */}
      {tooLong && (
        <button
          type="button"
          className="see-more"
          onClick={() => setExpanded(v => !v)}
          aria-expanded={expanded}
        >
          {expanded ? "see less" : "see more…"}
        </button>
      )}

      {/* Buttons for viewing details or opening external link */}
      <div className="card-actions">
        {/* Goes to the internal details page */}
        {id != null && (
          <Link className="btn" to={`/portfolio/${type}/${id}`}>
            View details
          </Link>
        )}

        {/* Opens the external link like GitHub, DEV.to, or YouTube */}
        {externalHref && (
          <a className="btn btn-ghost" href={externalHref} target="_blank" rel="noreferrer">
            {externalLabel}
          </a>
        )}
      </div>
    </article>
  );
}
