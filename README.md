# 🚀 Kartik Bhatt's Portfolio

Welcome to the repository for my personal portfolio website! 🌟 This is where I showcase my **skills**, **projects**, and **professional journey** in the world of software development. Dive in and explore! 🎨

🌐 Live Site: [Kartik's Portfolio](https://kartik-portfolio-vert.vercel.app/)

---

## 🗂 Directory Structure

```
├── README.md
├── Dockerfile
├── components.json
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── .Dockerignore
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── Css/
│   │   └── ShinyText.css
│   ├── api/
│   │   └── nodemailer/
│   │       └── route.ts
│   └── projects/
│       └── page.tsx
├── components/
│   ├── aboutMe.tsx
│   ├── contact.tsx
│   ├── navbar.tsx
│   ├── projects.tsx
│   ├── skills.tsx
│   └── ui/
│       ├── Hypertext.tsx
│       ├── Marques.tsx
│       ├── container-scroll-animation.tsx
│       ├── github.tsx
│       ├── scrollprogress.tsx
│       └── typing-animation.tsx
├── lib/
│   └── utils.ts
├── public/
└── .github/
    └── workflows/
        └── nextjs.yml
```

---

## ✨ Features

- **🎨 Responsive Design:** Built with Tailwind CSS for seamless responsiveness.
- **⚡ Modern Frameworks:** Powered by Next.js and TypeScript.
- **📧 API Integration:** Includes a Nodemailer API for the contact form.
- **🎥 Animations Galore:** Smooth UI interactions using custom animations.
- **🐳 Dockerized Deployment:** Fully containerized for consistent environments.
- **✨ Advanced UI Libraries:** Shadcn UI, Magic UI, and Acentricity add an extra layer of style and functionality.

---

## 🛠 Tech Stack

- **Frontend:** Next.js, React.js, TypeScript, Tailwind CSS
- **Backend:** Node.js, Express.js
- **UI/UX Tools:** Shadcn UI, Magic UI, Acentricity UI
- **Database:** MongoDB, Prisma
- **DevOps:** Docker, GitHub Actions
- **Others:** PostCSS, Eslint, Nodemailer

---

## 🚀 Getting Started

### Prerequisites
Make sure you have the following installed:
- 🟢 Node.js (v16 or later)
- 📦 npm or Yarn
- 🐳 Docker (optional, for containerized deployment)

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/kartik-212004/portfolio.git
   cd portfolio
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```

### Setting Up Environment Variables
To configure the Nodemailer API, create a `.env` file in the root directory with the following variables:

```
EMAIL_FROM=<your-email-address>
EMAIL_PASSWORD=<your-google-app-password>
```

- **EMAIL_FROM:** Your email address that will be used to send emails (e.g., `yourname@gmail.com`).
- **EMAIL_PASSWORD:** Your Google App Password. [Learn how to generate one here](https://support.google.com/accounts/answer/185833?hl=en).

Once the `.env` file is configured, restart the development server for the changes to take effect.

### Running the Development Server
Start the development server:
```bash
npm run dev
```
🌟 The application will be accessible at `http://localhost:3000`.

### Building for Production
To build the project for production:
```bash
npm run build
```
Serve the production build:
```bash
npm run start
```

### Using Docker
1. **Build the Docker image:**
   ```bash
   docker build -t kartik-portfolio .
   ```
2. **Run the Docker container:**
   ```bash
   docker run -p 3000:3000 kartik-portfolio
   ```


## 🤝 Contributions

Contributions are welcome! To contribute:

1. **Fork the repository.**
2. **Create a new branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Commit your changes:**
   ```bash
   git commit -m "Add your message here"
   ```
4. **Push to your branch:**
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Open a pull request.**

---

## 📬 Contact

Feel free to reach out if you have any questions or suggestions:

- **📧 Email:** kartik200421@gmail.com
- **🔗 LinkedIn:** [Kartik Bhatt](https://www.linkedin.com/in/kartikbhatt)
- **🐙 GitHub:** [Kartik Bhatt](https://github.com/<your-github-username>)

---

Thank you for visiting my portfolio repository! 💻 I hope this inspires you, and I look forward to your feedback or collaboration. 💡

