'use client'
import useReveal from '@/hooks/useReveal'
import RevealWrapper from '../animation/RevealWrapper'
import CircleTextAnimation from './CircleTextAnimation'

interface AboutProps {
  marquee?: boolean
}

const AboutAcess = ({ marquee = true }: AboutProps) => {
  const { revealRef } = useReveal()

  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[120px]">
      <div className="container">
        <RevealWrapper>
          <h3 className="pb-6 text-3xl font-semibold sm:pb-10" ref={revealRef}>
            Accessing U.S. Business Funding
          </h3>
          <p className="text-xl leading-relaxed sm:text-2xl" ref={revealRef}>
            Discover how international and U.S. entrepreneurs can unlock capital and build powerful credit lines —
            without relying on personal credit.
          </p>

          <h3 className="pb-4 pt-10 text-2xl font-semibold" ref={revealRef}>
            What You’ll Learn
          </h3>
          <ul className="list-inside list-disc space-y-2 text-lg" ref={revealRef}>
            <li>How to build a fundable business profile</li>
            <br />
            <li>Which bureaus and vendors report to business credit</li>
            <br />
            <li>How to access revolving credit from $5K to $150K</li>
            <br />
            <li>What documents and setup are required to qualify</li>
            <br />
            <li>How to avoid common mistakes that trigger denials</li>
            <br />
          </ul>

          <h3 className="pb-4 pt-10 text-2xl font-semibold" ref={revealRef}>
            Who This Is For
          </h3>
          <ul className="list-inside list-disc space-y-2 text-lg" ref={revealRef}>
            <li>Non-U.S. citizens with a U.S. entity</li>
            <br />
            <li>Online founders looking for capital</li>
            <br />
            <li>Side-hustlers ready to scale their operations</li>
            <br />
            <li>Anyone who wants to separate business & personal credit</li>
            <br />
          </ul>

          <h3 className="pb-4 pt-10 text-2xl font-semibold" ref={revealRef}>
            Why CreditMaster AI?
          </h3>
          <ul className="list-inside list-disc space-y-2 text-lg" ref={revealRef}>
            <li>Step-by-step setup for funding-readiness</li>
            <br />
            <li>AI-driven bureau and compliance tracking</li>
            <br />
            <li>Live support + coaching when you need it</li>
            <br />
            <li>Trusted by hundreds of global entrepreneurs</li>
            <br />
          </ul>
        </RevealWrapper>

        <RevealWrapper>
          <CircleTextAnimation />
        </RevealWrapper>
      </div>
    </section>
  )
}

export default AboutAcess
