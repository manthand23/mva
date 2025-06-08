'use client';

import React from 'react';

interface Section {
  title: string;
  timestamp: number;
  content: string;
}

interface VideoSectionsProps {
  sections: Section[];
  onTimestampClick: (timestamp: number) => void;
}

export const VideoSections: React.FC<VideoSectionsProps> = ({ sections, onTimestampClick }) => {
  const formatTimestamp = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.floor(totalSeconds % 60);

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Video Sections</h2>
      <div className="space-y-4">
        {sections.map((section, index) => (
          <div key={index} className="border rounded p-4">
            <div className="flex items-center gap-2 mb-2">
              <span
                className="text-blue-500 font-mono cursor-pointer hover:underline"
                onClick={() => onTimestampClick(section.timestamp)}
              >
                {formatTimestamp(section.timestamp)}
              </span>
              <h3 className="text-lg font-semibold">{section.title}</h3>
            </div>
            <p className="text-gray-600">{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}; 