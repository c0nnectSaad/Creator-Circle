# Creator Circle 🎯

A modern, full-stack blog platform built specifically for content creators and social media influencers. Share insights, growth strategies, and build a community of creators helping creators succeed.

![Next.js](https://img.shields.io/badge/Next.js-15.3.4-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![Prisma](https://img.shields.io/badge/Prisma-6.13.0-2D3748?style=for-the-badge&logo=prisma)
![CSS Modules](https://img.shields.io/badge/CSS-Modules-1572B6?style=for-the-badge&logo=css3)

## ✨ Features

### 🚀 Core Functionality
- **Rich Text Blog Editor** - Full-featured WYSIWYG editor with formatting options
- **Responsive Design** - Mobile-first approach, works on all devices
- **SEO Optimized** - Proper meta tags, structured data, and performance optimization
- **Dark/Light Theme** - Automatic theme switching based on user preference
- **Contact System** - Advanced contact form with validation and email notifications

### 📝 Content Management
- **Rich Text Editing** - Bold, italic, underline, headings (H1-H3), lists, quotes, links
- **Tag System** - Categorize posts with up to 2 tags per article
- **Content Validation** - Ensures quality content before publishing
- **Auto-generated Slugs** - SEO-friendly URLs created automatically
- **Read Time Calculation** - Automatic reading time estimation

### 🎨 User Experience
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Toast Notifications** - Real-time feedback for user actions
- **Loading States** - Smooth loading experiences throughout the app
- **Error Handling** - Graceful error handling with user-friendly messages
- **Floating Action Button** - Smooth scroll-to-top functionality

### 🔐 Advanced Validation
- **Email Validation** - Must contain @ symbol with proper format
- **Phone Validation** - International format (+country code) with no spaces
- **Content Validation** - Rich text content validation and sanitization
- **Form Security** - CSRF protection and input sanitization

## 🛠️ Tech Stack

### Frontend
- **Next.js 15.3.4** - React framework with SSR and static generation
- **React 19** - Latest React with concurrent features
- **CSS Modules** - Scoped styling with CSS variables for theming
- **Custom Rich Text Editor** - Built-in WYSIWYG editor

### Backend
- **Next.js API Routes** - Serverless API endpoints
- **Prisma ORM** - Type-safe database operations
- **MySQL Database** - Reliable relational database
- **File System Storage** - Contact form backup storage

### Development
- **ESLint** - Code linting and formatting
- **Git** - Version control
- **npm** - Package management

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- MySQL database

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/creator-circle.git
   cd creator-circle
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL="mysql://username:password@localhost:3306/creator_circle"
   ```
   
   Replace with your actual MySQL database credentials.

4. **Set up the database**
   ```bash
   npx prisma migrate dev
   npx prisma generate
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000)

## 📱 Pages Overview

### 🏠 Home Page (`/`)
- Hero section with call-to-action
- Professional branding and introduction
- Links to main features

### 📖 Blog Page (`/blog`)
- Grid layout of all blog posts
- Tag filtering and categorization
- Author information and read times
- Responsive card design

### ✍️ Write Page (`/write`)
- Rich text editor with formatting toolbar
- Tag selection system (max 2 tags)
- Content validation and preview
- SEO meta description input

### 👤 About Page (`/about`)
- Platform mission and values
- Community information
- Creator-focused messaging

### 📞 Contact Page (`/contact`)
- Advanced form validation
- International phone number format
- Email validation with @ requirement
- Toast notifications for feedback

### 📄 Blog Post Page (`/blogpost/[slug]`)
- Full blog post display
- Proper HTML rendering
- Back navigation
- SEO optimized

## 🎨 Styling Architecture

### CSS System
- **CSS Modules** - Scoped component styling
- **CSS Variables** - Consistent theming system
- **Responsive Design** - Mobile-first breakpoints
- **Animation System** - Smooth transitions and micro-interactions

### Theme Support
- **Automatic Detection** - Respects user's system preference
- **CSS Variables** - Easy theme customization
- **Dark/Light Modes** - Full support for both themes

## 🗄️ Database Schema

### Blog Table
```sql
Blog {
  id        Int      @id @default(autoincrement())
  title     String
  content   String   @db.LongText
  author    String
  metadesc  String
  slug      String   @unique
  tags      String
  createdAt DateTime @default(now())
}
```

### Contact Table
```sql
Contact {
  id        Int      @id @default(autoincrement())
  name      String
  phone     String
  email     String
  desc      String
  createdAt DateTime @default(now())
}
```

## 🔧 API Endpoints

### Blog APIs
- `GET /api/blogs` - Fetch all blog posts
- `POST /api/postblog` - Create new blog post
- `GET /api/getblog?slug=[slug]` - Fetch specific blog post
- `GET /api/blogs-paginated` - Paginated blog posts

### Contact APIs
- `POST /api/postcontact` - Submit contact form

## 📝 Content Creation Guide

### Using the Rich Text Editor

1. **Formatting Text**
   - Select text and use toolbar buttons
   - **Bold**, *Italic*, <u>Underline</u> options available

2. **Creating Headings**
   - Use H1, H2, H3 buttons for proper structure
   - Select text first, then apply heading

3. **Adding Lists**
   - Bullet points for unordered lists
   - Numbered lists for sequential content

4. **Inserting Links**
   - Select text, click Link button
   - Enter URL in the prompt

5. **Quotes**
   - Use blockquote for highlighting important text

### Best Practices
- Use headings to structure your content
- Keep paragraphs concise and readable
- Add relevant tags for discoverability
- Write compelling meta descriptions for SEO

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables
4. Deploy automatically

### Other Platforms
- **Netlify** - Static deployment with serverless functions
- **Railway** - Full-stack deployment with database
- **Heroku** - Container-based deployment

## 🤝 Contributing

We welcome contributions from the creator community!

### How to Contribute
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow the existing code style
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built for the creator community
- Inspired by the need for authentic content sharing
- Thanks to all contributors and beta testers

## 📞 Support

- **Email**: support@creatorcircle.dev
- **Issues**: [GitHub Issues](https://github.com/yourusername/creator-circle/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/creator-circle/discussions)

---

**Made with ❤️ by creators, for creators**

