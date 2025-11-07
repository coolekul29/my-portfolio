### Environment Setup

Before running the project, create a file named `.env.local` in the project root and add your own environment variables:
    * REACT_APP_YOUTUBE_API_KEY=YOUR_YOUTUBE_API_KEY_HERE
    * REACT_APP_GITHUB_USERNAME=RPA-UiPath-Projects
    * REACT_APP_DEVTO_USERNAME=vivekk101

# Personal Portfolio React App

This project is a personal portfolio built with React.

It shows:
    * An intro / hero section (Home page)
    * About me
    * Resume (skills, education, work experience)
    * Portfolio page that pulls in:
        * GitHub repos
        * Dev.to blog posts
        * YouTube videos

The app also supports light mode / dark mode, and it was designed to be easy for someone else to download and run on their own computer.

## Main Features

### Theme toggle
    - You can switch between light mode and dark mode. The theme is passed from App.jsx down into the Header and Footer.

### Pages
    * Home – intro, animated job titles, social links, Download CV button
    * About – short bio and social links
    * Resume – shows profile, contact info, education, skills, etc.
    * Portfolio – shows videos, coding projects, and articles all in one list
        * ItemDetail – when you click “View details,” you see more info about that item

### Search
    - On the Portfolio page, there is a search bar. You can type a word and it will filter:
        * GitHub repos
        * Dev.to posts
        * YouTube videos

### External data
    - The project gets live data from 3 places:
        * GitHub API (public repos)
        * Dev.to API (articles/blog posts)
        * YouTube Data API (channel uploads)

### Project Structure (main folders/files)
    /src
        /components
            Header.jsx
            Footer.jsx
            ItemCard.jsx
            SearchBar.jsx
            YouTubeDebug.jsx
        /pages
            Home.jsx
            About.jsx
            Resume.jsx
            Portfolio.jsx
            ItemDetail.jsx
        /services
            github.js
            devto.js
            youtube.js
        /assets
            (images, icons, logos)
    App.jsx
    index.jsx
    styles.css

### IMPORTANT: .env.local Setup (YouTube API Key)

The YouTube section (Portfolio → “Videos”) needs a YouTube API key to load videos from a channel.

You MUST create a .env.local file in the root of the project before running it.

    1. In the main project folder (same level as package.json), create a new file called:
    2. Inside that file, add this line:
        * REACT_APP_YOUTUBE_API_KEY=YOUR_YOUTUBE_API_KEY_HERE
    3. Replace YOUR_YOUTUBE_API_KEY_HERE with your own YouTube Data API v3 key.
        Without this key, the YouTube videos section will just return an empty list (this is normal and handled in code).
        We do not commit .env.local to GitHub because API keys are private.

### How to Run This Project on Your Own Computer
Follow these steps to run the React app locally.

    1. Download / extract the project
        * If you got this as a .zip, unzip it.
        * Open the project folder in VS Code (or any code editor).

    2. Install Node.js (if you don’t have it)
        * You need Node.js and npm.
        * You can check by opening a terminal and running:
            * node -v
            * npm -v
        * If both commands show versions (like v18.x.x / 10.x.x), you’re good.
    3. Install the dependencies
        * In the project folder, run:
            * npm install
        * This will create the node_modules folder and download all required packages (React, react-router-dom, axios, etc).
    4. Update .env.local
        * As explained above, make sure you have a .env.local file with:
            * REACT_APP_YOUTUBE_API_KEY=YOUR_YOUTUBE_API_KEY_HERE
        * If you don’t have a YouTube key, you can still run the app — but the video list might be empty.
    5. Start the dev server
        * Run:
            * npm start
        * This will:
            * build the app in development mode
            * open it in your browser (usually http://localhost:3000)
        * If it doesn’t auto-open, just go to http://localhost:3000 yourself.
    6. Stop the server
        * To stop the app, go back to the terminal where it’s running and press:
            * Ctrl + C
### APIs Used

    * GitHub
        * File: src/services/github.js
        * Gets public repos for a username.
        * You can change the GitHub username in .env.local file if you want to show different repos instead of the default.
            * REACT_APP_GITHUB_USERNAME=RPA-UiPath-Projects

    * Dev.to
        * File: src/services/devto.js
        * Gets blog posts/articles from a Dev.to user.
        * You can also change the username in .env.local file or leave it as default
            REACT_APP_DEVTO_USERNAME=vivekk101

    * YouTube

        * File: src/services/youtube.js
        * Uses REACT_APP_YOUTUBE_API_KEY from .env.local
        * Pulls recent uploads from a default YouTube channel ID.

            * If you want to point it at a different channel, you can edit:
                * const CHANNEL_ID = "UCaCVGueKcvxnMjV1waiu5cA"; // replace this default Channel ID

### Theme (Light / Dark)
    * The theme is stored in App.jsx like this:
        * const [theme, setTheme] = React.useState("light");
    * This theme value is passed to <Header />, <Footer />, and also added as a class on the main <div className={\app-shell ${theme}`}>`.
    * The CSS then uses:
        * .app-shell.light { ... }
        * .app-shell.dark { ... }
    * So when you click the toggle icon in the header, it switches styles for the whole site.

### Notes
    * The project shows understanding of:
        * React components and props
        * React hooks (useState, useEffect, useMemo)
        * React Router (Routes, Route, Link, useParams)
        * Using REST APIs with axios
        * Responsive design in CSS
        * Basic light/dark theming using CSS variables
    * The comments in each component are written in simple language to explain what each part does.

### Common Issues / Tips
    1. Getting an error about REACT_APP_YOUTUBE_API_KEY being undefined?
        * Make sure you created .env.local and restarted npm start.

    2. API rate limits
        * GitHub and Dev.to are public, so sometimes they may throttle if you refresh a lot. YouTube definitely needs a valid key.

    3. Blank portfolio sections
        * If a section (like videos or posts) can’t load, the code will safely fall back to []. The page will still render.