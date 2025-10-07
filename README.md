# React PDL Landing Page

A modern, responsive landing page for online loan services built with Next.js and Tailwind CSS. This project is optimized for mobile devices and compliant with Google Ads policies.

## 🚀 Features

- **📱 Mobile-First Design** - Fully responsive and optimized for all devices
- **⚡ Performance Optimized** - Fast loading with 60fps animations
- **🎨 Modern UI/UX** - Clean, professional design with smooth interactions
- **🔒 Google Ads Compliant** - Follows all Google Ads financial services policies
- **♿ Accessibility** - WCAG compliant with proper ARIA labels
- **🎯 Conversion Optimized** - Built-in social proof and trust signals

## 🛠️ Tech Stack

- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** React Icons
- **Deployment:** Vercel/Netlify ready

## 📋 Components

### Core Components
- **Banner** - Hero section with dynamic content
- **Form Banner** - Interactive loan amount selector
- **How It Works** - Feature showcase with animations
- **Loan Calculator** - Payment estimation tool
- **FAQ** - Accordion-style questions and answers
- **Social Proof** - Real-time statistics and testimonials
- **Trust Signals** - Security badges and certifications
- **Disclaimer** - Legal compliance information

### Mobile Optimizations
- **Touch-Friendly** - 48px minimum touch targets
- **Safe Area Support** - iPhone notch and home indicator compatible
- **Smooth Scrolling** - Optimized for mobile browsers
- **Performance** - Reduced animations and GPU acceleration

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/fusionfx1/react-pdl-03.git
   cd react-pdl-03
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 📦 Build & Deployment

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on every push
3. Custom domain support available

### Deploy to Netlify
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`

## 🎨 Customization

### Colors
Edit `app/globals.css` to customize the color scheme:
```css
.bg-green-dark {
  background-color: #471396; /* Primary purple */
}
```

### Content
Update `app/content/text.ts` for dynamic content:
```typescript
export const content = {
  domain: "YourDomain.com",
  title1: "Your Main Title",
  // ... other content
};
```

## 📱 Mobile Optimization Features

- **Responsive Breakpoints:** Mobile-first design with sm, md, lg breakpoints
- **Touch Targets:** Minimum 48px touch targets for better usability
- **Safe Areas:** Support for iPhone notch and home indicator
- **Performance:** Optimized animations and reduced motion support
- **Typography:** Improved readability with proper line heights

## 🔒 Google Ads Compliance

This project follows Google Ads financial services policies:
- No guaranteed approval claims
- Transparent APR ranges
- Proper disclaimers and terms
- No misleading promises
- Clear risk disclosures

## 📊 Performance Metrics

- **Lighthouse Score:** 90+ on all metrics
- **Mobile Performance:** Optimized for 60fps
- **Core Web Vitals:** All green scores
- **Accessibility:** WCAG 2.1 AA compliant

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)

## 📞 Support

For support, email support@yourdomain.com or create an issue in this repository.

---

**Built with ❤️ for better user experiences**