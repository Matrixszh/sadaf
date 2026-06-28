import Image from "next/image";
import Silk from "../components/Silk";
import ScrollVelocity from "../components/ScrollVelocity";
import CircularGallery from "../components/CircularGallery";
import { NavbarDemo } from "../components/NavbarDemo";
import ScrollFloat from "@/components/ScrollFloat";
import ScrollReveal from "@/components/ScrollReveal";
import ImageCarousel from "@/components/ImageCarousel";
import MagicRings from "@/components/MagicRings";
import CountUp from "@/components/CountUp";
import EmailContactForm from "@/components/EmailContactForm";

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
              Happy 24th Birthday, Sadaf.
            </h1>
            <p className="mt-6 text-base text-white/80 sm:text-lg">
              This little corner of the internet is made just for you, to
              celebrate your smile, your kindness, and the beautiful way you
              make my world feel softer every single day.
            </p>
          </div>
        </div>
      </section>


      <section id="gallery" className="bg-black px-4 pb-12">
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
      <section id="contact" className="bg-black px-4 h-[100vh] pb-[60px]">
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
              For Sadaf
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
              This Comes late , yet it has come to you as a gift that was meant to be for your birthday , I have never loved anyone before you and I don't think I ever knew loving before you . Sadaf "A Mother Pearl" just like a pearl is held within a warm emabrce you hold my heart with divinity I never imagined existed . Sadaf I cannot love you enough and that is my misfortune that all the time in this world is not for you and me and how much ever time I had with you I tried to squeeze every second of it living with you like it was last day .... and here it is , the last days are upon us . 25th June a day that marks the happiest day in my life a star was born you shine brighter than anyhting and warmer than my own skin . you are the embodiment of pretty , caring , Glamorous , hot etc . Adjectives aren't of any justice to you . My special Someone my lovely little Sadaf this is your place to remember me , this is made so that no matter where in the world you are ; you can see that there is a person that loves you more than anything and everything . This is your celebration my love . I hope My love to you is felt as much as it is meant by me .
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="relative bg-black px-6 py-[25vh] overflow-hidden">
        <Image
          src="/flower1.png"
          alt="Flower decoration 1"
          width={360}
          height={360}
          className="pt-[25vh] pointer-events-none absolute -left-10 -top-16 z-0 w-40 rotate-[-15deg] opacity-90 md:w-56"
          priority={false}
        />
        <Image
          src="/flower2.png"
          alt="Flower decoration 2"
          width={360}
          height={360}
          className="pb-15 pointer-events-none absolute -bottom-16 -right-10 z-0 w-40 rotate-[15deg] opacity-90 md:w-56"
          priority={false}
        />

        <div className="relative z-10 mx-auto w-full max-w-5xl">
          <h2 className="text-center text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Moments Of You
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-white/70">
            Swipe through a few little frames made for us.
          </p>
          <div className="mt-10">
            <ImageCarousel />
          </div>
        </div>
      </section>

      <section className="relative bg-black pt-[5vh]">
        <div className="relative h-[420px] w-full sm:h-[520px]">
          <MagicRings
            color="#EC4899"
            colorTwo="#EC4899"
            ringCount={6}
            speed={1}
            attenuation={10}
            lineThickness={2}
            baseRadius={0.35}
            radiusStep={0.1}
            scaleRate={0.1}
            opacity={1}
            blur={0}
            noiseAmount={0.1}
            rotation={0}
            ringGap={1.5}
            fadeIn={0.7}
            fadeOut={0.5}
            followMouse={false}
            mouseInfluence={0.2}
            hoverScale={1.2}
            parallax={0.05}
            clickBurst={false}
          />

          <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-6">
            <h2 className="text-center text-4xl font-light tracking-tight text-white drop-shadow sm:text-6xl">
              Sadaf's Sweet 24
            </h2>
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-20">
        <div className="mx-auto w-full max-w-6xl">
          <p className="mb-10 text-center text-lg text-white/70 sm:text-xl">
            Every second of celebrating you feels special.
          </p>
          <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-3">
            <div className="rounded-2xl  px-8 py-10">
              <div className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                <CountUp
                  from={0}
                  to={8760}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                  delay={0}
                />
              </div>
              <div className="mt-3 text-sm font-medium uppercase tracking-widest text-white/60">
                Days
              </div>
            </div>

            <div className="rounded-2xl px-8 py-10">
              <div className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                <CountUp
                  from={0}
                  to={288}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                  delay={0.1}
                />
              </div>
              <div className="mt-3 text-sm font-medium uppercase tracking-widest text-white/60">
                Months
              </div>
            </div>

            <div className="rounded-2xl  px-8 py-10">
              <div className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                <CountUp
                  from={0}
                  to={25}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                  delay={0.2}
                />
              </div>
              <div className="mt-3 text-sm font-medium uppercase tracking-widest text-white/60">
                June
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="message" className="bg-black px-6 py-20">
        <div className="mx-auto w-full max-w-5xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Leave A Little Note
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/70 sm:text-lg">
            If you want, you can send sweet messages here .
          </p>
        </div>

        <div className="mt-10">
          <EmailContactForm />
        </div>
      </section>
      
    </main>
  );
}
