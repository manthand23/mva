'use client';

import React from 'react';
import { VideoAnalyzer } from '../components/VideoAnalyzer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8">
        <VideoAnalyzer />
      </div>
    </main>
  );
} 