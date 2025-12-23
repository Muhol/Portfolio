# Mohol Samwel | Professional Portfolio

A premium, interactive portfolio website designed to showcase full-stack development expertise, featuring a modern glassmorphic UI and high-performance animations.

##  Features

- **Interactive Matrix Background**: High-performance "Matrix" rain effect.
- **Hybrid Navigation System**: 
  - **Desktop**: Sleek vertical sidebar on the right.
  - **Mobile**: Thumb-friendly bottom navigation bar.
  - **Scroll-Spy**: Active section tracking with glowing indicators and tooltips.
- **Premium Design System**: 
  - Implementation of **Glassmorphism** utility classes.
  - Custom refined typography using **Outfit**, **Inter**, and **Nunito** fonts.
  - Seamless dark mode aesthetic with vibrant accent glows.
- **Dynamic Content**:
  - **Hero**: Animated job titles and call-to-actions.
  - **Achievements**: Live counting statistics for projects and experience.
  - **Skills Showcase**: Interactive marquee displaying technical proficiencies.
  - **Projects Carousel**: Responsive showcase of featured web and mobile applications.
  - **Testimonials**: Glassmorphic carousel for client feedback.
  - **Contact System**: Fully functional form integrated with EmailJS and real-time toast notifications.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, Turbopack)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/), [React Type Animation](https://www.npmjs.com/package/react-type-animation), [React Animated Numbers](https://www.npmjs.com/package/react-animated-numbers)
- **Icons**: [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/)
- **Utility**: [EmailJS](https://www.emailjs.com/), [React Hot Toast](https://react-hot-toast.com/)

## 🛠️ Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/muhol/my-portfolio.git
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up Environment Variables**:
   Create a `.env` file in the root and add your EmailJS keys:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Build for production**:
   ```bash
   npm run build
   ```