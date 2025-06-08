'use client';

import { useState } from 'react';
import { VideoSections } from './VideoSections';
import { ChatInterface } from './ChatInterface';
import { YouTubePlayer } from './YouTubePlayer';

export const VideoAnalyzer = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [sections, setSections] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [seekToTime, setSeekToTime] = useState(0);
  const [summary, setSummary] = useState('');

  const handleAnalyze = async () => {
    if (!videoUrl) {
      setError('Please enter a YouTube video URL');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:8000/sections', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ video_url: videoUrl }),
      });

      if (!response.ok) {
        throw new Error('Failed to analyze video');
      }

      const data = await response.json();
      setSections(data.sections);
      setSummary(data.summary);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Video Analysis</h1>
        <div className="flex gap-4">
          <input
            type="text"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            placeholder="Enter YouTube video URL"
            className="flex-1 p-2 border rounded"
          />
          <button
            onClick={handleAnalyze}
            disabled={loading}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
          >
            {loading ? 'Analyzing...' : 'Analyze Video'}
          </button>
        </div>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>

      {videoUrl && <YouTubePlayer videoUrl={videoUrl} seekTo={seekToTime} />}

      {sections.length > 0 && (
        <>
          <h2 className="text-2xl font-bold mb-4">Video Summary</h2>
          <p className="mb-8 text-gray-700">{summary}</p>
          <VideoSections sections={sections} onTimestampClick={setSeekToTime} />
          <ChatInterface videoUrl={videoUrl} onTimestampClick={setSeekToTime} />
        </>
      )}
    </div>
  );
}; 