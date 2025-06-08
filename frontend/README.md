# Video Analysis Frontend

This is the frontend application for the Video Analysis project. It provides a user interface for analyzing YouTube videos, viewing video sections, and chatting with the video content.

## Features

- Upload and analyze YouTube videos
- View video sections with timestamps
- Chat with the video content
- Get timestamp references for relevant video portions

## Prerequisites

- Node.js 18.x or later
- npm 9.x or later

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The application will be available at http://localhost:3000

## Backend Integration

This frontend is designed to work with the Video Analysis backend. Make sure the backend server is running at http://localhost:8000 before using the frontend.

## Development

- The application is built with Next.js 14
- Uses TypeScript for type safety
- Styled with Tailwind CSS
- Components are located in the `src/components` directory

## Project Structure

- `src/components/VideoAnalyzer.tsx` - Main component for video analysis
- `src/components/VideoSections.tsx` - Component for displaying video sections
- `src/components/ChatInterface.tsx` - Component for chatting with video content
- `src/app/page.tsx` - Main page component 