// status: 'project'  = used in one of my projects
//         'studied'  = learned and practised, not yet shipped in a project
// TODO: check the status of each item and change it if it is not accurate.

export const skillGroups = [
  {
    title: 'Frontend',
    icon: 'layout',
    items: [
      { name: 'HTML5', status: 'project' },
      { name: 'CSS3', status: 'project' },
      { name: 'JavaScript (ES6+)', status: 'project' },
      { name: 'React.js', status: 'project' },
      { name: 'Vite', status: 'project' },
      { name: 'Responsive web design', status: 'project' },
    ],
  },
  {
    title: 'Backend',
    icon: 'server',
    items: [
      { name: 'Node.js', status: 'project' },
      { name: 'Express.js', status: 'project' },
      { name: 'REST APIs', status: 'project' },
      { name: 'Authentication (JWT)', status: 'project' },
    ],
  },
  {
    title: 'Databases',
    icon: 'database',
    items: [
      { name: 'MySQL', status: 'project' },
      { name: 'MySQL2', status: 'project' },
    ],
  },
  {
    title: 'AI and RAG',
    icon: 'spark',
    items: [
      { name: 'Gemini API integration', status: 'project' },
      { name: 'Generative AI', status: 'project' },
      { name: 'Retrieval-Augmented Generation (RAG)', status: 'studied' },
      { name: 'Text embeddings', status: 'studied' },
      { name: 'Semantic search', status: 'studied' },
      { name: 'Document retrieval', status: 'studied' },
    ],
  },
  {
    title: 'Development Tools',
    icon: 'tool',
    items: [
      { name: 'Git and GitHub', status: 'project' },
      { name: 'npm', status: 'project' },
      { name: 'VS Code', status: 'project' },
      { name: 'Terminal', status: 'project' },
    ],
  },
  {
    title: 'Civil Engineering Software',
    icon: 'ruler',
    marquee: true, // also shown in the moving strip at the top of the Skills section
    items: [
      { name: 'AutoCAD', status: 'civil' },
      { name: 'ArchiCAD', status: 'civil' },
      { name: 'ETABS', status: 'civil' },
      { name: 'SAP', status: 'civil' },
      { name: 'Civil 3D', status: 'civil' },
      { name: 'Eagle Point', status: 'civil' },
      { name: 'Minitab', status: 'civil' },
    ],
  },
];
