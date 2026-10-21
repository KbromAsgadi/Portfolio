# Kbrom Asgadi Portfolio

A responsive developer portfolio built with React, Vite and plain CSS. It has Home, About, Skills, Projects, Education and Contact sections, and no extra dependencies beyond React.

## Run it locally

You need Node.js 18 or newer.

```bash
npm install
npm run dev      # start the dev server, usually http://localhost:5173
npm run build    # production build into /dist
npm run preview  # serve the production build locally
```

## Add your real information

All content lives in `src/data/`, so you rarely need to touch the components.

| File | What to edit |
| --- | --- |
| `profile.js` | Name, headline, email, phone, address, GitHub URL, LinkedIn URL, profile photo path, CV path |
| `projects.js` | Descriptions, features, screenshots, GitHub and live demo URLs |
| `skills.js` | Skills, and whether each is `project` (used in a project) or `studied` |
| `education.js` | Education, training, certificates and site engineering experience |

Anything marked `TODO` or left as `''` shows a visible placeholder on the page. Only add details that are true.

**Screenshots and photo:** put images in the `public/` folder (for example `public/projects/forum.png` and `public/profile.jpg`) and set the path in the data files, such as `'/projects/forum.png'`. Compress images before adding them.

**Live demos:** leave `demo: ''` for any project that is not deployed. The "Live demo" button only appears when a URL is set.

## Contact form

The form validates name, email and message and shows clear messages, but it does **not** send anything because no email service is connected. To make it work, connect a service such as Formspree or EmailJS in the `onSubmit` function in `src/components/Contact.jsx`. Never put secret API keys in frontend code.

## Deploy for free

**Vercel**
1. Push the project to a GitHub repository.
2. Import the repository at vercel.com.
3. Keep the detected settings (build command `npm run build`, output folder `dist`) and deploy.

**Netlify**
1. Push the project to GitHub and choose "Import from Git" on netlify.com.
2. Build command `npm run build`, publish directory `dist`.

**GitHub Pages**
1. In `vite.config.js`, set `base` to `'/your-repo-name/'`.
2. Run `npm run build` and publish the `dist` folder (for example with the `gh-pages` package or a GitHub Actions workflow).

## Structure

```
src/
  data/          profile, skills, projects, education
  components/    Navbar, Hero, About, Skills, Projects, Education, TimelineColumns, Contact, Footer, Icon, SocialLinks
  hooks/         useReveal (scroll-in animation)
  styles/        index.css
  App.jsx
  main.jsx
```
