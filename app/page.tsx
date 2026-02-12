import Header from "@/components/Header";
import LeftColumn from "@/components/LeftColumn";
import RightColumn from "@/components/RightColumn";


export default function Home() {
  return (
    <div className="min-h-screen bg-white  px-4 sm:px-6 relative">
      <div
        className="fixed inset-0 z-0 pointer-events-none bg-no-repeat bg-cover bg-center opacity-[0.4]"
        style={{ backgroundImage: "url(/gridlines.svg)" }}
      />
      <div className="relative z-10 flex flex-col min-h-screen">
        <div className="max-w-[1500px] mx-auto flex flex-col flex-1 w-full">
          <Header />
          <main className="flex-1 flex items-center lg:items-start px-4 sm:px-8 lg:px-12 pt8 sm:pt-h10 lg:pt-0 pb-12 sm:pb-16">
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-center w-full">
              <LeftColumn />
              <RightColumn />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
