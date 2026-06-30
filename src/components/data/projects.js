// src/data/projects.js
// Edit this file to add/update your real projects, GitHub repos, and demo links.
// `languages` drives the filter pills on the Projects page — keep it short (1-3 per project).

const projects = [
  {
    slug: 'paws-in-recovery',
    title: 'PAWS in Recovery — Community Directory',
    blurb: 'A searchable map of community services for a Windsor-Essex nonprofit.',
    description: `A React + Vite community services directory built for PAWS in Recovery,
a Windsor-Essex area nonprofit. Features bidirectional map/card interactivity with
Leaflet, geolocation-based "near me" search, fuzzy search via Fuse.js, and a
store-locator-style filter bar. Includes role-based login and full CRUD for
managing listings, currently backed by a static JSON dataset pending a PHP/MySQL
backend.`,
    languages: ['JavaScript'],
    tech: ['React', 'Vite', 'Leaflet', 'Tailwind CSS', 'Fuse.js'],
    status: 'In Progress',
    github: 'https://github.com/your-username/paws-in-recovery',
    demo: null,
  },
  {
    slug: 'image-organizer',
    title: 'Image Organizer',
    blurb: 'A local desktop app that tags and deduplicates your photo library with AI.',
    description: `A local-first image organization and tagging desktop app built with
Electron, Vite, and React on the frontend and FastAPI on the backend. Uses Ollama
(llava:7b) and Claude Haiku for AI-generated tags and perceptual hashing to detect
and remove duplicate images — all running locally without sending photos to the
cloud.`,
    languages: ['Python', 'JavaScript'],
    tech: ['Electron', 'React', 'Vite', 'FastAPI', 'Ollama', 'Claude Haiku'],
    status: 'Completed',
    github: 'https://github.com/your-username/image-organizer',
    demo: null,
  },
  {
    slug: 'movie-steam-library',
    title: 'Movie + Steam Game Library',
    blurb: 'A full-stack app for tracking movies and games with reviews and watchlists.',
    description: `A full-stack web app combining a movie tracker and Steam game library
into one platform. Built with a React frontend and a Java Spring Boot + MongoDB
backend, it supports Steam OAuth login, a unified review system across both movies
and games, personal watchlists, and full CRUD for user-generated content.`,
    languages: ['JavaScript', 'Java'],
    tech: ['React', 'Spring Boot', 'MongoDB', 'Steam OAuth'],
    status: 'Completed',
    github: 'https://github.com/your-username/movie-steam-library',
    demo: 'https://your-demo-url.com',
  },
  {
    slug: 'composition-game-prototype',
    title: 'Composition Over Inheritance — Game Prototype',
    blurb: 'A Unity prototype exploring composable entity systems over class inheritance.',
    description: `An educational Unity 6 prototype demonstrating composition over
inheritance in game architecture, inspired by a JavaScript functional composition
pattern. Entities are built from small, swappable ability components (IAbility)
rather than deep inheritance trees, making behaviors easy to mix, match, and
extend.`,
    languages: ['C#'],
    tech: ['Unity 6'],
    status: 'In Progress',
    github: 'https://github.com/your-username/composition-game-prototype',
    demo: null,
  },
  {
    slug: 'meeting-note-summarizer',
    title: 'Meeting Note Summarizer',
    blurb: 'A local, private alternative to AI meeting notes — no cloud required.',
    description: `A local meeting transcription and summarization tool built as a
self-hosted alternative to cloud note-taking assistants. Uses faster-whisper for
on-device transcription and Ollama for summarization, with a FastAPI backend and
an Electron + React frontend. The transcription pipeline is complete; summarization
and UI polish are in progress.`,
    languages: ['Python', 'JavaScript'],
    tech: ['faster-whisper', 'Ollama', 'FastAPI', 'Electron', 'React'],
    status: 'In Progress',
    github: 'https://github.com/your-username/meeting-note-summarizer',
    demo: null,
  },
  {
    slug: 'mini-rocket-data-platform',
    title: 'Mini Rocket Data Platform',
    blurb: 'A hands-on AWS data pipeline built around NYC Taxi trip data.',
    description: `A hands-on AWS data engineering project processing NYC Taxi trip
data through an event-driven pipeline. Uses S3 for raw and processed data storage,
Lambda for transformation logic, and EventBridge to orchestrate the pipeline on
a schedule — built to get practical experience with serverless data infrastructure.`,
    languages: ['Python'],
    tech: ['AWS S3', 'AWS Lambda', 'AWS EventBridge'],
    status: 'In Progress',
    github: 'https://github.com/your-username/mini-rocket-data-platform',
    demo: null,
  },
];

export default projects;
