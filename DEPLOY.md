# Publish This Resume Site

The local URL only works on your computer:

```text
http://127.0.0.1:4321/
```

To send someone a link, publish the folder to static hosting.

## Option 1: GitHub Pages

Best long-term free option.

This project includes:

```text
.github/workflows/pages.yml
```

That workflow publishes the static site from the repository root whenever `main` is pushed.

1. Create a new GitHub repository, for example `resume-showcase-page`.
2. Upload these project files to the repository:
   - `index.html`
   - `src/styles.css`
   - `src/resume-data.js`
   - `src/app.js`
   - `README.md`
3. In GitHub, open the repository.
4. Go to `Settings` -> `Pages`.
5. Under `Build and deployment`, choose `GitHub Actions`.
6. Push to `main` and wait for the workflow to finish.

Your public link will look like:

```text
https://YOUR-GITHUB-USERNAME.github.io/resume-showcase-page/
```

## Option 2: Netlify Drop

Fastest no-code option.

1. Go to Netlify.
2. Use the deploy/drop option.
3. Drag the entire `resume-showcase-page` folder into Netlify.
4. Netlify gives you a public link immediately.

## Option 3: Vercel

Good option if you already use Vercel.

1. Create a new Vercel project.
2. Import a GitHub repo or upload the static project.
3. Keep build settings empty because this is plain HTML/CSS/JS.
4. Deploy.

## Option 4: Azure Static Web Apps

Best fit if this needs to live in an Azure environment.

1. Push the project to GitHub.
2. Create an Azure Static Web App.
3. Connect it to the GitHub repository.
4. Use `/` as the app location.
5. Leave build output empty.

## Before Publishing

Edit:

```text
src/resume-data.js
```

Replace placeholder fields such as email, LinkedIn, GitHub, experience, projects, and certifications.
