import FeatureCards from "@/components/FeatureCards"
import StartFreeButton from "@/components/StartFreeButton"

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-[70vh] text-center gap-6 px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold">Buy Me a Chai ☕</h1>
        <p className="text-xl text-gray-600 max-w-xl">A crowdfunding platform for creators. Get funded by your fans and supporters. Start your page in one click.</p>
        <StartFreeButton />
      </div>
      <FeatureCards />
    </div>
  )
}
