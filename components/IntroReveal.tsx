import Image from "next/image";

interface IntroRevealProps {
  children: React.ReactNode;
}

export default function IntroReveal({ children }: IntroRevealProps) {
  return (
    <div className="relative min-h-full">
      <div className="intro-content">{children}</div>

      <div aria-hidden="true" className="intro-overlay">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="intro-pulse">
            <Image
              src="/tulip.png"
              alt="Tulip"
              width={520}
              height={520}
              priority
              className="pointer-events-none h-auto w-[200px] select-none sm:w-[280px] md:w-[320px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
