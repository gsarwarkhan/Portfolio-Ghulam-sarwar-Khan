# Ghulam Sarwar Khan - Executive Portfolio

A modern, authoritative, and professional portfolio for **Ghulam Sarwar Khan**, Secretary General of the Pakistan Tea Association. This project showcases executive leadership, trade governance expertise, and specialization in AI development.

## 🚀 Live Demo
- **Vercel**: [https://portfolio-ghulam-sarwar-khan-j5hc.vercel.app/](https://portfolio-ghulam-sarwar-khan-j5hc.vercel.app/)

## ✨ Key Features

### Executive Identity
- **Secretary General Positioning**: Prominent display of leadership role at Pakistan Tea Association
- **Professional Branding**: Executive color palette (blue #4f46e5, orange #d97706)
- **Authoritative Typography**: Inter for body, Playfair Display for headings

### Content Sections
- **Hero Section**: Profile image with animated border, executive title, badges, and CTAs
- **Career Journey**: Comprehensive professional story from education to AI integration
- **The Digital Ark**: AI services and innovation hub showcase
- **Projects**: Featured AI Agent and portfolio of technical projects
- **Experience Timeline**: Visual timeline of professional journey
- **Skills**: Animated progress bars for technical and professional skills
- **Contact**: Integrated Formspree contact form with social links
- **Khizr AI Companion**: Introduction to AI thinking partner

### Technical Excellence
- **Next.js 15**: Latest framework with App Router
- **TypeScript**: Full type safety
- **Tailwind CSS**: Modern, responsive design system
- **SEO Optimized**: Enhanced meta tags, Open Graph, JSON-LD structured data
- **Performance**: Static pre-rendering, optimized images, 124 kB First Load JS
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation

## 🛠 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Fonts**: [Inter](https://fonts.google.com/specimen/Inter) & [Playfair Display](https://fonts.google.com/specimen/Playfair+Display)
- **Form**: [Formspree](https://formspree.io/)
- **Deployment**: [Vercel](https://vercel.com/)

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with SEO and fonts
│   ├── page.tsx             # Main page component
│   └── globals.css          # Global styles and Tailwind
├── components/
│   ├── AnimatedBackground.tsx
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── DigitalArk.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   ├── Skills.tsx
│   ├── Contact.tsx
│   ├── Khizr.tsx
│   ├── Footer.tsx
│   └── FloatingHireButton.tsx
├── lib/
│   ├── utils.ts             # Utility functions
│   └── constants.ts         # Portfolio data
├── public/
│   ├── images/              # Profile and logo images
│   └── Resume-GSK.pdf       # Downloadable CV
├── legacy/                  # Preserved original HTML/CSS/JS
└── package.json

## 💻 Local Development

### Prerequisites
- Node.js 20+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/gsarwarkhan/Portfolio-Ghulam-sarwar-Khan.git
cd Portfolio-Ghulam-sarwar-Khan
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#4f46e5` - Executive leadership, trust
- **Accent Orange**: `#d97706` - AI innovation, energy
- **Neutral Gray**: `#64748b` - Professional, balanced

### Typography
- **Body Text**: Inter (modern, clean, highly readable)
- **Headings**: Playfair Display (executive, authoritative)

### Animations
- Floating geometric background shapes
- Rotating profile image border
- Animated skill progress bars
- Smooth scroll navigation
- Hover effects on interactive elements

## 📊 Performance

### Build Results
- **First Load JS**: 124 kB
- **Homepage Size**: 21.7 kB
- **Build Time**: ~10 seconds
- **Static Pre-rendering**: Enabled

### Lighthouse Scores (Target)
- **Performance**: > 90
- **Accessibility**: > 95
- **Best Practices**: > 95
- **SEO**: > 95

## 🔒 SEO Features

- Enhanced meta tags for executive positioning
- Open Graph tags for social media sharing
- Twitter Card support
- JSON-LD structured data (Person schema)
- Semantic HTML structure
- Optimized images with alt text
- Mobile-friendly responsive design

## 📱 Responsive Design

- **Mobile**: < 768px - Hamburger menu, stacked layout
- **Tablet**: 768px - 1024px - Optimized grid layouts
- **Desktop**: > 1024px - Full multi-column layouts

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub:
```bash
git add .
git commit -m "Update portfolio"
git push origin master
```

2. Vercel will automatically:
   - Detect Next.js project
   - Run build
   - Deploy to production

3. Your site will be live at your Vercel URL

### Manual Deployment

```bash
npm run build
npm start
```

## 📧 Contact Integration

The contact form is integrated with [Formspree](https://formspree.io/). Form submissions are sent to: **sarwaronline@gmail.com**

To update the form endpoint, edit the `action` in [components/Contact.tsx](file:///E:/Quarter%202/Copy%20milestone%20two/Milestoneonetwo/components/Contact.tsx).

## 🔄 Updating Content

### Personal Information
Edit [lib/constants.ts](file:///E:/Quarter%202/Copy%20milestone%20two/Milestoneonetwo/lib/constants.ts):
- Contact information
- Social media links
- Projects data
- Experience timeline
- Skills levels

### Images
Replace files in `public/images/`:
- `Profile.png` - Your profile photo
- `logo-ark.png` - Digital Ark logo

### Resume
Replace `public/Resume-GSK.pdf` with your updated CV

## 🌟 Features Showcase

### Real-Time Clock
Navbar displays current date and time, updating every second

### Smooth Scroll Navigation
Click navigation links for smooth scrolling to sections

### WhatsApp Integration
"Hire Me" button opens WhatsApp with pre-filled message

### Social Media Links
Direct links to LinkedIn, Facebook, YouTube, and GitHub

### Downloadable CV
One-click download of professional resume

### Contact Form
Functional form with validation and Formspree integration

## 👨‍💻 Author

**Ghulam Sarwar Khan**
- **Position**: Secretary General, Pakistan Tea Association
- **Email**: sarwaronline@gmail.com
- **Phone**: +92 3232777272
- **LinkedIn**: [ghulam-sarwar-khan-b989b48a](https://www.linkedin.com/in/ghulam-sarwar-khan-b989b48a)
- **GitHub**: [gsarwarkhan](https://github.com/gsarwarkhan)

## 📄 License

This project is private and proprietary. All rights reserved.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for seamless deployment
- Tailwind CSS for the utility-first CSS framework
- Formspree for contact form integration

---

**Built with ❤️ using Next.js 15, TypeScript, and Tailwind CSS**
