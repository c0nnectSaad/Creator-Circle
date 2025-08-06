# Contributing to Creator Circle 🤝

Thank you for considering contributing to Creator Circle! This document provides guidelines and instructions for contributing to our creator-focused platform.

## 🎯 How You Can Contribute

### 🐛 Bug Reports
- Use GitHub Issues to report bugs
- Include steps to reproduce the issue
- Provide browser/device information
- Add screenshots if applicable

### 💡 Feature Requests
- Suggest new features via GitHub Issues
- Explain the use case and benefit to creators
- Provide mockups or examples if possible

### 🔧 Code Contributions
- Fix bugs or implement new features
- Improve documentation
- Enhance UI/UX
- Optimize performance

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- Git knowledge
- Basic understanding of React/Next.js
- Familiarity with CSS Modules

### Setting Up Development Environment

1. **Fork the repository**
   ```bash
   git clone https://github.com/yourusername/creator-circle.git
   cd creator-circle
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment**
   ```bash
   cp .env.example .env
   # Configure your database URL
   ```

4. **Run database migrations**
   ```bash
   npx prisma migrate dev
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

## 📝 Development Guidelines

### Code Style
- Use ESLint configuration provided
- Follow existing naming conventions
- Write meaningful variable and function names
- Add comments for complex logic

### Component Structure
```jsx
// components/ComponentName.js
import React from 'react';
import styles from '@/styles/ComponentName.module.css';

const ComponentName = ({ prop1, prop2 }) => {
  return (
    <div className={styles.container}>
      {/* Component content */}
    </div>
  );
};

export default ComponentName;
```

### CSS Guidelines
- Use CSS Modules for component styling
- Follow BEM-like naming: `.container`, `.button`, `.buttonPrimary`
- Use CSS variables for consistent theming
- Mobile-first responsive design

### Commit Message Format
```
type(scope): description

Examples:
feat(editor): add bold text formatting
fix(contact): resolve email validation bug
docs(readme): update installation instructions
style(blog): improve card hover animations
```

### Commit Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

## 🔍 Pull Request Process

### Before Submitting
1. **Test your changes thoroughly**
   - Run `npm run dev` and test locally
   - Check responsive design on mobile
   - Verify all forms work correctly

2. **Check code quality**
   ```bash
   npm run lint
   ```

3. **Update documentation**
   - Update README if needed
   - Add JSDoc comments for new functions
   - Update CHANGELOG if applicable

### PR Guidelines
1. **Create descriptive title**
   - Clear, concise description of changes
   - Reference issue number if applicable

2. **Provide detailed description**
   - What changes were made and why
   - How to test the changes
   - Screenshots for UI changes

3. **Keep PRs focused**
   - One feature/fix per PR
   - Avoid mixing unrelated changes

### PR Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Code refactoring

## Testing
- [ ] Tested locally
- [ ] Mobile responsive
- [ ] Forms validation works
- [ ] No console errors

## Screenshots (if applicable)
Add screenshots for UI changes

## Checklist
- [ ] Code follows project standards
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No breaking changes
```

## 🎨 Design Guidelines

### UI/UX Principles
- **Creator-First**: Design with content creators in mind
- **Accessibility**: Follow WCAG guidelines
- **Performance**: Optimize for fast loading
- **Mobile-First**: Ensure mobile experience is priority

### Color Scheme
```css
:root {
  --accent: #8b5cf6;
  --foreground: #1a1a1a;
  --background: #ffffff;
  --muted: #6b7280;
  --border: #e5e7eb;
}
```

### Typography
- **Headings**: Inter font, 600-700 weight
- **Body**: Inter font, 400-500 weight
- **Line Height**: 1.6 for readability

## 🐛 Bug Report Template

When reporting bugs, please use this template:

```markdown
**Bug Description**
Clear description of the bug

**Steps to Reproduce**
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

**Expected Behavior**
What should happen

**Actual Behavior**
What actually happens

**Environment**
- Browser: [e.g., Chrome 120]
- Device: [e.g., iPhone 12, Desktop]
- OS: [e.g., iOS 17, Windows 11]

**Screenshots**
Add screenshots if applicable
```

## 💡 Feature Request Template

```markdown
**Feature Description**
Clear description of the proposed feature

**Problem Statement**
What problem does this solve for creators?

**Proposed Solution**
How should this feature work?

**Alternatives Considered**
Other solutions you've considered

**Additional Context**
Mockups, examples, or additional information
```

## 🧪 Testing Guidelines

### Manual Testing Checklist
- [ ] All pages load correctly
- [ ] Navigation works on all devices
- [ ] Forms submit successfully
- [ ] Rich text editor functions properly
- [ ] Contact form validation works
- [ ] Blog posts display correctly
- [ ] Dark/light theme switches properly

### Areas to Focus On
1. **Rich Text Editor**
   - All formatting options work
   - Content saves correctly
   - HTML output is clean

2. **Contact Form**
   - Email validation (@ symbol required)
   - Phone validation (+country code format)
   - Error messages display properly

3. **Blog System**
   - Posts display with proper formatting
   - Tags work correctly
   - Slug generation is SEO-friendly

## 🏆 Recognition

Contributors will be:
- Listed in the README
- Mentioned in release notes
- Given credit in the about page
- Invited to the contributor Discord

## 📞 Getting Help

- **Discord**: Join our contributor channel
- **GitHub Discussions**: Ask questions
- **Email**: dev@creatorcircle.dev

## 📜 Code of Conduct

### Our Pledge
We pledge to make participation in Creator Circle a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.

### Expected Behavior
- Be respectful and inclusive
- Focus on constructive feedback
- Help newcomers learn
- Credit others' work appropriately

### Unacceptable Behavior
- Harassment or discrimination
- Spam or off-topic content
- Sharing private information
- Unprofessional conduct

---

**Thank you for contributing to Creator Circle! Together, we're building something amazing for the creator community.** 🚀