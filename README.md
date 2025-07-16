# Tennis Landing Page

This project is a landing page for a tennis instructor, built using React with TypeScript and styled with TailwindCSS. The design is inspired by the world of tennis, featuring a color palette reminiscent of clay courts and incorporating tennis-related icons.

## Project Structure

```
tennis-landing-page
├── public
│   └── index.html          # Main HTML file
├── src
│   ├── assets              # Directory for static assets (images, icons)
│   ├── components          # React components for different sections of the landing page
│   │   ├── Header.tsx      # Navigation bar component
│   │   ├── Hero.tsx        # Hero section component
│   │   ├── About.tsx       # About section component
│   │   ├── Gallery.tsx      # Gallery section component
│   │   ├── Contact.tsx      # Contact section component
│   │   └── Footer.tsx      # Footer component
│   ├── App.tsx             # Main application component
│   ├── main.tsx            # Entry point for the React application
│   ├── index.css           # Global styles and TailwindCSS imports
│   └── types               # TypeScript types and interfaces
│       └── index.ts
├── tailwind.config.js      # TailwindCSS configuration
├── postcss.config.js       # PostCSS configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # npm configuration
└── README.md               # Project documentation
```

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd tennis-landing-page
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the application:**
   ```bash
   npm start
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to view the landing page.

## Features

- **Responsive Design:** The landing page is fully responsive and adapts to different screen sizes using TailwindCSS.
- **Sections:** The page includes a Header, Hero section, About section, Gallery, Contact section, and Footer.
- **Tennis Theme:** The design elements and color scheme are inspired by tennis, creating an engaging user experience.

## Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.