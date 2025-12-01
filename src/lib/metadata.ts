import type { Metadata } from "next";

interface GenerateMetadataParams {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  keywords?: string[];
}

export function generatePageMetadata({
  title,
  description,
  path,
  ogImage = "/og-image.webp",
  keywords = [],
}: GenerateMetadataParams): Metadata {
  const url = `https://zildjiangarcia.dev${path}`;
  
  return {
    title,
    description,
    keywords: [
      "Zildjian Garcia",
      "Frontend Developer",
      "Software Engineer",
      "Portfolio",
      ...keywords,
    ],
    openGraph: {
      title: `Zildjian Garcia - ${title}`,
      description,
      url,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Zildjian Garcia - ${title}`,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: path,
    },
  };
}