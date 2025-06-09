# Modern Astro Project with Tailwind CSS and Neon DB

A modern web application built with Astro, featuring a dark theme, Tailwind CSS for styling, and PostgreSQL integration using Neon.tech.

## 🚀 Features

- ⚡️ **Astro** - High-performance web framework
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🌙 **Dark Theme** - Built-in dark mode support
- 🗄️ **Neon PostgreSQL** - Serverless Postgres database
- 📱 **Responsive Design** - Mobile-first approach
- 🔧 **Type Safety** - TypeScript support

## 🛠️ Tech Stack

- [Astro](https://astro.build)
- [Tailwind CSS](https://tailwindcss.com)
- [Neon Database](https://neon.tech)
- [TypeScript](https://www.typescriptlang.org)

## 📁 Project Structure

```
my-astro-project
├── public
│   └── favicon.svg         # Favicon for the project
├── src
│   ├── components          # Reusable components
│   ├── layouts             # Layout components
│   ├── pages
│   │   └── index.astro     # Main entry point for the application
│   └── styles
│       └── global.css      # Global CSS styles
├── astro.config.mjs        # Configuration file for Astro
├── package.json            # npm configuration file
└── README.md               # Project documentation
```

## 🚦 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/jaidevopsai/my-astro-project.git
   cd my-astro-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL="your-neon-database-url"
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

   Visit `http://localhost:4321` to see your application.

## 🔥 API Endpoints

- `GET /api/db/test` - Test database connectivity

## 🎨 Styling

The project uses Tailwind CSS with a custom dark theme configuration. Key features:
- Custom color palette
- Responsive design utilities
- Dark mode support

## 🗄️ Database

This project uses Neon's serverless PostgreSQL. To set up:
1. Create an account at [neon.tech](https://neon.tech)
2. Create a new project
3. Copy your database connection string
4. Update your `.env` file

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 📝 License

This project is licensed under the MIT License.