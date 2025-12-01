interface PersonStructuredDataProps {
  /** Override default structured data with custom schema */
  schema?: Record<string, unknown>;
}

export function PersonStructuredData({ schema }: PersonStructuredDataProps = {}) {
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Zildjian Garcia",
    alternateName: "Zee Jay",
    url: "https://zildjiangarcia.dev",
    image: "https://zildjiangarcia.dev/og-image.webp",
    jobTitle: "Frontend Developer",
    // worksFor: {
    //   "@type": "EducationalOrganization",
    //   name: "Nanyang Technological University",
    // },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Nanyang Technological University",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Singapore",
      addressCountry: "SG",
    },
    sameAs: [
      "https://github.com/Zackyization",
      "https://www.linkedin.com/in/zildjian-aquino-garcia",
    ],
    email: "zildjiangarciaa@gmail.com",
  };

  const finalSchema = schema || defaultSchema;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(finalSchema) }}
    />
  );
}

/** Structured data for creative works (projects) */
interface WorkStructuredDataProps {
  name: string;
  description: string;
  url: string;
  image?: string;
  keywords?: string[];
  datePublished?: string;
  author?: {
    name: string;
    url: string;
  };
}

export function WorkStructuredData({
  name,
  description,
  url,
  image,
  keywords = [],
  datePublished,
  author = {
    name: "Zildjian Garcia",
    url: "https://zildjiangarcia.dev",
  },
}: WorkStructuredDataProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name,
    description,
    url,
    ...(image && { image }),
    ...(keywords.length > 0 && { keywords: keywords.join(", ") }),
    ...(datePublished && { datePublished }),
    author: {
      "@type": "Person",
      name: author.name,
      url: author.url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}