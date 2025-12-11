export interface Work {
  id: string;
  title: string;
  image: string;
  tags: string[];
  slug: string;
  description?: string;
  datePublished?: string;
  links?: {
    website?: string;
    github?: string;
    figma?: string;
  };
  gallery?: string[]; // Additional screenshots
}

export const WORKS_DATA: Work[] = [
  {
    id: "1",
    title: "Hall 3 Website",
    image: "/assets/works/hall-3-website/hall3_website_preview.png",
    tags: ["Web Development", "UI/UX"],
    slug: "hall-3-website",
    description:
      "The NTU Hall 3 Official Website is a comprehensive platform designed to showcase the vibrant community, events, and facilities of Hall 3 at Nanyang Technological University, Singapore. This project was developed using Hugo, a fast static site generator, and deployed on Netlify for seamless hosting and performance optimization.",
    datePublished: "11 Dec 2025",
    links: {
      website: "https://hall3.netlify.app",
      github: "https://github.com/Zackyization/ntu-hall-3-official-website",
      figma:
        "https://www.figma.com/design/fqsbhElpx7x6OpPmX9zWk7/Hall-3-Weebly-Website-Makeover?node-id=0-1&t=AjmZTVBw0cBcoZzt-1",
    },
    gallery: [
      "/assets/works/hall-3-website/hall3_website_preview.png",
      "/assets/works/hall-3-website/hall3_website_1.png",
      "/assets/works/hall-3-website/hall3_website_2.png",
      "/assets/works/hall-3-website/hall3_website_3.png",
    ],
  },
  // Add more work items as needed
];

export function getWorkBySlug(slug: string): Work | undefined {
  return WORKS_DATA.find((work) => work.slug === slug);
}
