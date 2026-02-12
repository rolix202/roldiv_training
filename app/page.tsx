import Header from "@/components/Header";
import LeftColumn from "@/components/LeftColumn";
import RightColumn from "@/components/RightColumn";

const raw = process.env.NEXT_PUBLIC_SITE_URL || "https://learn.zeenomtech.com";
const siteUrl = raw.startsWith("http") ? raw : `https://${raw.trim()}`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Frontend Development From Scratch",
  description:
    "Learn HTML, CSS, JavaScript & React through practical, beginner-friendly training. Build an in-demand tech skill for 2026.",
  provider: {
    "@type": "Organization",
    name: "Zeenomtech",
    url: siteUrl,
  },
  teaches: ["HTML", "CSS", "JavaScript", "React"],
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "online",
  },
  url: siteUrl,
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    <div className="min-h-dvh bg-white px-4 sm:px-6 relative flex flex-col">
      <div
        className="fixed inset-0 z-0 pointer-events-none bg-no-repeat bg-cover bg-center opacity-[0.4]"
        style={{ backgroundImage: "url(/gridlines.svg)" }}
      />
      <div className="relative z-10 flex flex-col flex-1 min-h-0">
        <div className="max-w-[1500px] mx-auto flex flex-col flex-1 min-h-0 w-full py-4 sm:py-6">
          <Header />
          <main className="flex-1 flex items-center lg:items-start min-h-0 px-4 sm:px-8 lg:px-12 pt-4 sm:pt-6 pb-6 sm:pb-8">
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 items-center w-full">
              <LeftColumn />
              <RightColumn />
            </div>
          </main>
        </div>
      </div>
    </div>
    </>
  )
}
