// Bring in axios so we can get data from the internet
import axios from "axios";

// Get info from our hidden .env file
const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;     // YouTube API key
const CHANNEL_ID = "UCaCVGueKcvxnMjV1waiu5cA";             // Youtube Channel ID
const MAX_RESULTS = 20;                                    // Number of videos to load

// Get videos from the YouTube channel
export async function fetchYouTubeVideos() {
  console.log("[YT] env present?", !!API_KEY, "channel:", CHANNEL_ID);

  // If the key or channel ID is missing, stop and return nothing
  if (!API_KEY || !CHANNEL_ID) {
    console.warn("[YT] Missing API key or channel id. Returning empty.");
    return [];
  }

  try {
    // Query YouTube for the channel’s upload playlist
    const { data: chData } = await axios.get(
      "https://www.googleapis.com/youtube/v3/channels",
      { params: { key: API_KEY, id: CHANNEL_ID, part: "contentDetails" } }
    );

    // Find the playlist that has all the uploaded videos
    const uploads =
      chData?.items?.[0]?.contentDetails?.relatedPlaylists?.uploads ||
      (CHANNEL_ID.startsWith("UC") ? "UU" + CHANNEL_ID.slice(2) : null);

    console.log("[YT] uploads playlist:", uploads);

    // If we can’t find the playlist, stop here
    if (!uploads) {
      console.error("[YT] Could not resolve uploads playlist.");
      return [];
    }

    // Query YouTube for the list of videos from that playlist
    const { data: plData } = await axios.get(
      "https://www.googleapis.com/youtube/v3/playlistItems",
      {
        params: {
          key: API_KEY,
          playlistId: uploads,
          part: "snippet",
          maxResults: MAX_RESULTS,
        },
      }
    );

    // Fix up details form the video info received from Youtube
    const items = (plData.items || [])
      .map((it) => {
        const s = it.snippet || {};
        const id = s.resourceId?.videoId;
        const t = s.thumbnails || {};
        return {
          id,
          title: s.title,
          description: (s.description || "").trim(),
          publishedAt: s.publishedAt,
          url: id ? `https://www.youtube.com/watch?v=${id}` : null,
          thumbnails: {
            maxres: t.maxres?.url,
            standard: t.standard?.url,
            high: t.high?.url,
            medium: t.medium?.url,
            default: t.default?.url,
          },
          _type: "youtube",
        };
      })
      // Keep only videos that have an ID
      .filter((v) => v.id);

    console.log("[YT] fetched items:", items.length);

    return items;
  } catch (e) {
    // If something goes wrong, show an error
    console.error("[YT] API error:", e?.response?.data || e.message);
    return [];
  }
}