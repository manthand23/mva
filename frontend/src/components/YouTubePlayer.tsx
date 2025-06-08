'use client';

import React, { useRef, useEffect } from 'react';
import YouTube from 'react-youtube';

interface YouTubePlayerProps {
  videoUrl: string;
  seekTo: number; // Time in seconds to seek to
}

export const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ videoUrl, seekTo }) => {
  const playerRef = useRef<any>(null);

  useEffect(() => {
    if (playerRef.current && seekTo !== 0) {
      playerRef.current.seekTo(seekTo, true);
    }
  }, [seekTo]);

  if (!videoUrl) {
    return null;
  }

  // Extract video ID from YouTube URL
  const videoIdMatch = videoUrl.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\/))([\w-]{11})(?:\S+)?/);
  const videoId = videoIdMatch ? videoIdMatch[1] : null;

  if (!videoId) {
    return <p className="text-red-500">Invalid YouTube video URL.</p>;
  }

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  const onReady = (event: any) => {
    playerRef.current = event.target;
  };

  return (
    <div className="aspect-video w-full mb-8">
      <YouTube videoId={videoId} opts={opts} onReady={onReady} />
    </div>
  );
}; 