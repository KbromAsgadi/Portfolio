// Project details. Features come from your brief. Edit them so they match what you really built.
// image:  put screenshots in /public/projects/ and set e.g. '/projects/forum.png'. '' shows a placeholder.
// github / demo: leave '' until you have real URLs. Never add a demo link for something that is not deployed.

export const projects = [
  {
    id: 'evangadi-forum',
    title: 'AI-Powered Evangadi Forum',
    description:
      'A community question-and-answer application where users post questions and answers, with AI-assisted functionality on top.',
    stack: ['React', 'Node.js', 'Express', 'MySQL', 'REST API', 'JWT', 'AI / RAG'],
    features: [
      'Question and answer workflow for a community of users',
      'User authentication with JWT',
      'REST API built with Express and a MySQL database',
      'AI-assisted features (confirm which RAG features you implemented)',
    ],
    image: 'src/data/images/Forum.PNG',
    github: 'https://github.com/KbromAsgadi/ai-powered-evangadi-forum-frontend.git',
    demo: 'https://ai-powered-evangadi-forum-frontend.vercel.app/',
  },
  {
    id: 'gpt-clone',
    title: 'Full GPT Clone',
    description:
      'An AI chat application where users hold a conversation with a Gemini-powered assistant.',
    stack: ['React', 'Node.js', 'Express', 'MySQL', 'Gemini API'],
    features: [
      'Conversational chat interface',
      'Gemini API integration through the Express backend',
      'Conversation persistence in MySQL (confirm this matches your build)',
      'API key kept on the server, never in the frontend',
    ],
    image: 'src/data/images/GPTclone.png',
    github: 'https://github.com/KbromAsgadi/Full-GPT-clone.git',
    demo: 'https://full-gpt-clone-git-main-kbrom.vercel.app',
  },
  {
    id: 'netflix-clone',
    title: 'Netflix Clone',
    description:
      'A Netflix-inspired movie browsing interface that loads real movie data from the TMDB API.',
    stack: ['React', 'JavaScript', 'TMDB API', 'CSS3'],
    features: [
      'Movie discovery in browsable rows',
      'Dynamic banner for featured movies',
      'External API integration with TMDB',
      'Responsive layout for phone, tablet and desktop',
    ],
    image: 'src/data/images/Netflix.PNG',
    github: 'https://github.com/KbromAsgadi/Netflix-clone.git',
    demo: 'https://netflix-clone-41o0pgv2s-kbrom.vercel.app/',
  },
  {
    id: 'apple-website-replica',
    title: 'Apple Website Replica / YouTube Video Project',
    description:
      'A frontend project built with reusable React components and video data loaded from an external source.',
    stack: ['React', 'JavaScript', 'CSS3', 'External video data'],
    features: [
      'Reusable React components',
      'Video data fetched from an external source',
      'Edit this list to describe exactly what the project does',
    ],
    image: 'src/data/images/Appleweb.PNG',
    github: 'https://github.com/KbromAsgadi/Apple-clone.git',
    demo: 'https://applereplica-i4pqlrtn7-kbrom.vercel.app/',
  },
];
