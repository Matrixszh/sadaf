import Silk from "../components/Silk";
import ScrollVelocity from "../components/ScrollVelocity";
import CircularGallery from "../components/CircularGallery";
import { NavbarDemo } from "../components/NavbarDemo";
import ScrollFloat from "@/components/ScrollFloat";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <NavbarDemo />

      <section id="features" className="relative min-h-screen w-full overflow-hidden">
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

      <section id="pricing" className="py-12 bg-black">
        <ScrollVelocity
          texts={["React Bits", "Scroll Down"]}
          velocity={100}
          className="custom-scroll-text"
          numCopies={6}
          damping={50}
          stiffness={400}
        />
      </section>

      <section id="contact" className="bg-black px-4 pb-12">
        <div className="relative h-[600px] w-full">
          <CircularGallery
            bend={1}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollSpeed={2}
            scrollEase={0.05}
          />
        </div>
      </section>
      <section id="contact" className="bg-black px-4 h-[200vh]">
        <div className="relative pt-24 text-center">
          <div className="relative z-20">
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
              textClassName="text-white drop-shadow"
            >
              React Bits
            </ScrollFloat>
          </div>

          <div className="relative z-10 mt-10 text-white">
            <ScrollReveal
              baseOpacity={0.1}
              enableBlur
              baseRotation={3}
              blurStrength={4}
              textClassName="text-white"
            >
              When does a man die? When he is hit by a bullet? No! When he suffers a disease?
              No! When he ate a soup made out of a poisonous mushroom?
              No! A man dies when he is forgotten!
            </ScrollReveal>
          </div>
        </div>
      </section>
      
    </main>
  );
}
