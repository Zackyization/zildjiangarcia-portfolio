import Image from "next/image";
import Link from "next/link";

interface WorkCardProps {
  title: string;
  image: string;
  tags: string[];
  slug: string;
}

export function WorkCard({ title, image, tags, slug }: WorkCardProps) {
  return (
    <Link href={`/works/${slug}`} className="group block rounded-lg p-6 hover:bg-white/5 transition-colors">
      <div className="overflow-hidden rounded-lg border-2 border-muted-text">
        <Image
          src={image}
          alt={title}
          width={400}
          height={300}
          className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="mt-4 text-2xl font-bold font-outfit text-white">
        {title}
      </h3>
      <div className="mt-2 flex gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/20 px-3 py-1 text-xs font-outfit text-tertiary-text"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}