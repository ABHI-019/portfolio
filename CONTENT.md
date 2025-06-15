# Portfolio Content Guide

This guide will help you customize your portfolio website with your personal information and content.

## 1. Personal Information

### Profile Section
- Update your name in `src/app/page.tsx`:
  ```tsx
  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 dark:text-white">
    Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">Your Name</span>
  </h1>
  ```
- Add your profile picture:
  - Place your profile image in the `public` directory as `profile.jpg`
  - Recommended size: 400x400 pixels
  - Format: JPG or PNG
  - Keep file size under 200KB for optimal loading

### About Section
Update your information in `src/components/About.tsx`:
```tsx
<p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
  // Your personal description here
</p>

// Update Education
<p className="text-gray-600 dark:text-gray-300">
  // Your education details
</p>

// Update Achievements
<ul className="text-gray-600 dark:text-gray-300 list-disc list-inside">
  // Your achievements
</ul>

// Update Coursework
<ul className="text-gray-600 dark:text-gray-300 list-disc list-inside">
  // Your coursework
</ul>
```

## 2. Projects

Update your projects in `src/components/Projects.tsx`:
```tsx
const projects = [
  {
    title: "Project Name",
    description: "Project description",
    highlights: [
      "Key feature 1",
      "Key feature 2",
      "Key feature 3"
    ],
    tech: ["Technology 1", "Technology 2"],
    github: "GitHub link",
    demo: "Live demo link"
  },
  // Add more projects
];
```

## 3. Skills

Update your skills in `src/components/Skills.tsx`:
```tsx
const skills = {
  languages: [
    // Your programming languages
  ],
  webTechnologies: [
    // Your web technologies
  ],
  tools: [
    // Your tools and software
  ]
};
```

## 4. Contact Information

### Contact Section
Update your contact information in `src/components/Contact.tsx`:
```tsx
const contactInfo = [
  {
    label: "Email",
    value: "your.email@example.com",
    href: "mailto:your.email@example.com",
    icon: EnvelopeIcon
  },
  {
    label: "Location",
    value: "Your Location",
    icon: MapPinIcon
  }
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/yourusername"
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/yourusername"
  },
  {
    name: "LeetCode",
    href: "https://leetcode.com/yourusername"
  }
];
```

### Contact Form
The contact form is set up to use EmailJS. To configure it:

1. Sign up for EmailJS (https://www.emailjs.com/)
2. Create an email service
3. Create an email template
4. Update the following in `src/components/ContactForm.tsx`:
   ```tsx
   const EMAILJS_SERVICE_ID = 'your_service_id';
   const EMAILJS_TEMPLATE_ID = 'your_template_id';
   const EMAILJS_PUBLIC_KEY = 'your_public_key';
   ```

## 5. Blog Section

The blog section is currently set to "Coming Soon". When you're ready to add blog posts:

1. Create a new component for blog posts
2. Add your blog content
3. Update the Blog component to display your posts

## 6. Testimonials Section

The testimonials section is currently set to "Coming Soon". When you have testimonials:

1. Create a testimonials data structure
2. Add your client testimonials
3. Update the Testimonials component to display them

## 7. Resume

1. Add your resume PDF to the `public` directory as `resume.pdf`
2. The download link is already set up in the hero section

## 8. Theme Customization

### Colors
Update the color scheme in `tailwind.config.ts`:
```ts
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      }
    }
  }
}
```

### Fonts
The website uses the Inter font by default. To change it:
1. Import your preferred font in `src/app/layout.tsx`
2. Update the font class in the body tag

## 9. Meta Information

Update the website metadata in `src/app/layout.tsx`:
```tsx
export const metadata: Metadata = {
  title: "Your Name - Portfolio",
  description: "Your professional description",
};
```

## 10. Deployment

1. Push your changes to GitHub
2. Deploy to Vercel or your preferred hosting platform
3. Set up a custom domain if desired

## Important Notes

1. Keep all images optimized for web use
2. Regularly update your projects and skills
3. Ensure all links are working
4. Test the website on different devices and browsers
5. Keep your contact information up to date

## Need Help?

If you need assistance with any customization:
1. Check the Next.js documentation
2. Review the Tailwind CSS documentation
3. Open an issue in the repository
4. Contact the developer for support