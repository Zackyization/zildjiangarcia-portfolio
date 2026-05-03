import { ImageResponse } from "next/og";
import { getWorkBySlug } from "@/lib/works-data";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image({ params }: { params: { slug: string } }) {
  const project = getWorkBySlug(params.slug);

  return new ImageResponse(
    <div
      style={{
        background: "#0f0f0f",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px",
      }}
    >
      <p style={{ color: "#888", fontSize: 28, margin: "0 0 16px" }}>
        Zildjian Garcia
      </p>
      <h1 style={{ color: "#fff", fontSize: 64, fontWeight: 700, margin: 0 }}>
        {project?.title}
      </h1>
      <p
        style={{
          color: "#aaa",
          fontSize: 28,
          marginTop: 24,
          textAlign: "center",
        }}
      >
        {project?.description}
      </p>
    </div>,
    { ...size },
  );
}
