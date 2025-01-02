import { Post } from './types';
export const blogPosts: Post[] = [
  {
    slug: 'getting-started-with-web-development',
    title: 'Getting Started with Web Development',
    date: new Date('2024-03-20'),
    coverImage: '/images/webdev.jpg',
    excerpt: 'A comprehensive guide for beginners looking to start their journey in web development.',
    content: `Web development is an exciting field that combines creativity with technical skills. In this post, we'll explore the fundamental concepts and tools you need to begin your journey.

Starting with HTML, CSS, and JavaScript, we'll build a strong foundation for creating modern web applications. We'll also discuss best practices and common pitfalls to avoid.

Remember, every expert was once a beginner. The key is to stay curious and keep learning.`,
  },
  {
    slug: 'mastering-react-hooks',
    title: 'Mastering React Hooks',
    date: new Date('2024-03-19'),
    coverImage: '/images/reacthooks.jpg',
    excerpt: 'Deep dive into React Hooks and how they revolutionize state management in functional components.',
    content: `React Hooks have transformed how we write React components. They enable us to use state and other React features without writing class components.

useState and useEffect are the most commonly used hooks, but there's so much more to explore. Custom hooks allow us to extract component logic into reusable functions.

Let's explore how hooks can make our code more readable and maintainable.`,
  },
  {
    slug: 'building-responsive-layouts',
    title: 'Building Responsive Layouts',
    date: new Date('2024-03-18'),
    coverImage: '/images/blog-2.avif',
    excerpt: 'Learn how to create beautiful, responsive layouts that work across all devices.',
    content: `Responsive design is no longer optional in modern web development. Users access websites from various devices, and our layouts need to adapt accordingly.

Using CSS Grid and Flexbox, we can create flexible layouts that look great on any screen size. Combined with media queries, we have powerful tools for responsive design.

Let's explore practical examples and best practices for building responsive layouts.`,
  },

  {
    slug: 'understanding-javascript-es6',
    title: 'Understanding JavaScript ES6',
    date: new Date('2024-03-23'),
    coverImage: '/images/js.jpg',
    excerpt: 'Learn about the features and benefits of ES6, the latest version of JavaScript.',
    content: `JavaScript ES6 (also known as ECMAScript 2015) introduced a wealth of new features that make the language more powerful and easier to work with.
  
  Explore key features like arrow functions, template literals, destructuring, and modules. Learn how to use promises and async/await for cleaner asynchronous code.
  
  With real-world examples, you will see how these features can simplify and modernize your JavaScript code.`,
  },
  {
    slug: 'exploring-css-grid',
    title: 'Exploring CSS Grid',
    date: new Date('2024-03-24'),
    coverImage: '/images/css.jpg',
    excerpt: 'A beginner’s guide to mastering the powerful CSS Grid layout system.',
    content: `CSS Grid is a two-dimensional layout system that allows you to create complex web designs with ease.
  
  Learn how to set up a grid container, define rows and columns, and place items within the grid. Explore advanced features like grid gaps, auto-fill, and fractional units to create responsive layouts.
  
  By the end, you'll be able to create flexible, responsive designs without the need for floats or positioning.`,
  },
  {
    slug: 'introduction-to-typescript',
    title: 'Introduction to TypeScript',
    date: new Date('2024-03-25'),
    coverImage: '/images/ts.jpg',
    excerpt: 'An introduction to TypeScript, a typed superset of JavaScript that improves development productivity.',
    content: `TypeScript is a powerful language that builds on JavaScript by adding static typing, which helps catch errors early and improve code quality.
  
  Learn about type annotations, interfaces, and classes in TypeScript. Discover how TypeScript can enhance your code with better tooling, autocompletion, and refactoring support.
  
  Whether you're working on a large project or just starting out, TypeScript can help you write more reliable and maintainable code.`,
  },
  {
    slug: 'building-responsive-websites',
    title: 'Building Responsive Websites',
    date: new Date('2024-03-26'),
    coverImage: './images/blog-2.avif',
    excerpt: 'Learn how to build websites that look great on any device, from mobile to desktop.',
    content: `Responsive web design ensures your website is user-friendly on all devices, adjusting the layout and content based on screen size.
  
  Explore the basics of media queries, flexible grids, and responsive images. Learn how to create a mobile-first design approach to ensure a seamless experience for all users.
  
  With practical examples, you’ll be able to build websites that work perfectly on any screen size.`,
  },
  {
    slug: 'optimizing-web-performance',
    title: 'Optimizing Web Performance',
    date: new Date('2024-03-27'),
    coverImage: './images/blog-2.avif',
    excerpt: 'Boost your website’s speed with techniques to reduce load time and enhance user experience.',
    content: `Website performance plays a crucial role in user experience and SEO rankings. Optimizing load time can significantly improve user retention and satisfaction.
  
  Learn strategies like lazy loading, image optimization, code splitting, and minification to speed up your website. Understand the importance of caching and performance testing tools.
  
  By applying these techniques, you’ll be able to ensure a faster, smoother experience for your users.`,
  }
  
];