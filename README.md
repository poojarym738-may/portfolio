# Manya Poojary | Personal Portfolio

A clean, responsive portfolio website for a 5th-semester BCA student applying for software development and cybersecurity internships.

## My Approach

- **Plan first:** I listed the required sections (navbar, hero, about, skills, projects, contact form) and designed them mobile-first so the layout scales up to tablet and desktop.
- **Keep it simple:** I used plain HTML, CSS and JavaScript with no frameworks, so the site opens directly in a browser and deploys to GitHub Pages without a build step.
- **Consistent design:** Colors, spacing and shadows are defined once as CSS variables and reused across all sections.
- **Accessible by default:** Semantic HTML, visible keyboard focus, labelled form fields, and reduced-motion support.
- **Form validation:** JavaScript checks each field on blur and on submit, and shows a clear error message under the field that needs fixing.
- **Honest content:** Each project shows its real status, and unfinished work is labelled "Currently Developing".

## Technologies Used

- HTML5
- CSS3 (custom properties, Grid, Flexbox, media queries)
- Vanilla JavaScript (no frameworks or build tools)
- Google Fonts (Plus Jakarta Sans, with system-font fallback)

## Features

- Responsive layout for mobile, tablet and desktop
- Sticky navbar with smooth scrolling and active-section highlight
- Mobile hamburger menu
- Sections: Home, About, Skills, Projects, Certificates, Contact
- Project cards with honest status labels (e.g. "Currently Developing")
- Contact form with inline JavaScript validation (name, email, message)
- Hover effects, one subtle load animation, and `prefers-reduced-motion` support
- Automatic light/dark theme based on system setting

## Folder Structure

```
portfolio/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    └── profile.jpg
```

## How to Run

1. Download or clone this repository.
2. Open `index.html` in any modern browser. No installation needed.

## Customize Before Publishing

- Replace `assets/profile.jpg` with your own photo (square, around 600x600 px).
- In `index.html`, update the LinkedIn and GitHub links in the footer.
- In `script.js`, set `CONTACT_EMAIL` to your real email address. The contact form is static, so a valid submission opens the visitor's email app with the message pre-filled.
- Update the project list as you finish new projects.

## How to Deploy (GitHub Pages)

1. Create a new repository on GitHub (e.g. `portfolio`).
2. Upload the contents of this folder so `index.html` is at the repository root.
3. Go to **Settings > Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then click **Save**.
5. After a minute, your site will be live at `https://<your-username>.github.io/<repository-name>/`.

## License

Free to use and adapt for your own portfolio.
