import Header from "@/components/Header";
import LeftColumn from "@/components/LeftColumn";
import RightColumn from "@/components/RightColumn";


export default function Home() {
  return (
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
  )
}
