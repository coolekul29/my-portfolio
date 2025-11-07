// Import React and the tools we need
import React, { useEffect, useState } from "react";
// Import the function that gets YouTube videos
import { fetchYouTubeVideos } from "../services/youtube";

export default function YouTubeDebug() {
  // Keep track of the videos we get
  const [videos, setVideos] = useState([]);

  // Run this once when the page loads
  useEffect(() => {
    (async () => {
      // Get videos from YouTube
      const v = await fetchYouTubeVideos();

      // Save them into our videos state
      setVideos(v);
    })();
  }, []);

  // If there are no videos
  if (!videos.length) return <p className="muted">[debug] no videos from fetchYouTubeVideos()</p>;

  // If videos exist
  return (
    <div style={{ padding: 8, border: "1px dashed rgba(255,255,255,.2)", borderRadius: 8 }}>
      <div style={{ marginBottom: 6 }}>[debug] fetched {videos.length} videos</div>
      <ul style={{ margin: 0, paddingLeft: 16 }}>
        {videos.slice(0, 3).map(v => <li key={v.id}>{v.title}</li>)}
      </ul>
    </div>
  );
}