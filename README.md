# Baris Ariburnu - Portfolio

A Visual Studio Code themed developer portfolio website built with Next.js and deployed on GitHub Pages at barisariburnu.github.io.

## Features Roadmap

- [ ] Themes and customizations
  - [x] GitHub Dark (default)
  - [ ] One Dark Pro
  - [x] Dracula
  - [x] Ayu
  - [x] Nord
- [ ] Interactive custom terminal

For other features and themes suggestions, please open an issue.

## Environment Variables

For GitHub API integration, create an `.env.local` file inside the project directory. Check the `.env.local.example` file for more information.

## Running Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

All VSCode related components can be found in the `components` folder. To change the content of the portfolio, check out the `pages` folder. To add or remove pages, modify `components/Sidebar.jsx` and `components/Tabsbar.jsx`.

## Next.js Resources

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/)

## Deploy on GitHub Pages

This portfolio is configured for GitHub Pages deployment. The project uses Next.js static export to generate static HTML files that can be served from the `barisariburnu.github.io` repository.

To deploy:

1. Build the project: `npm run export`
2. Copy the contents of the `out` directory to your `barisariburnu.github.io` repository
3. Enable GitHub Pages in your repository settings

For detailed deployment instructions, check the GitHub Actions workflow in `.github/workflows/deploy.yml`.
