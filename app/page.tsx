import Silk from "../components/Silk";
import ScrollVelocity from "../components/ScrollVelocity";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <section className="relative min-h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <Silk
            speed={5}
            scale={1}
            color="#EC4899"
            noiseIntensity={1.5}
            rotation={0}
          />
        </div>

        <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
          <div className="max-w-3xl text-center text-white">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
              Modern digital experiences that feel smooth and premium.
            </h1>
            <p className="mt-6 text-base text-white/80 sm:text-lg">
              Built with performance in mind, designed to stand out, and crafted
              for your brand.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <ScrollVelocity
          texts={["React Bits", "Scroll Down"]}
          velocity={100}
          className="custom-scroll-text"
          numCopies={6}
          damping={50}
          stiffness={400}
        />
      </section>
    </main>
  );
}
