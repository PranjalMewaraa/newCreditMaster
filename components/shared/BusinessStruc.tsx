'use client'
import useReveal from '@/hooks/useReveal'
import RevealWrapper from '../animation/RevealWrapper'
import CircleTextAnimation from './CircleTextAnimation'

interface AboutProps {
  marquee?: boolean
}

const AboutBusnStruc = ({ marquee = true }: AboutProps) => {
  const { revealRef } = useReveal()

  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[120px]">
      <div className="container">
        <RevealWrapper>
          <h3 className="pb-6 text-3xl font-semibold sm:pb-10" ref={revealRef}>
            Business Structure Options
          </h3>
          <p className="text-xl leading-relaxed sm:text-2xl" ref={revealRef}>
            Explore the various legal structures available to U.S. and international entrepreneurs when forming a
            business in the United States.
          </p>

          <h3 className="pb-4 pt-10 text-2xl font-semibold" ref={revealRef}>
            Popular U.S. Business Structures
          </h3>
          <ul className="list-inside list-disc space-y-4 text-lg" ref={revealRef}>
            <li>
              <strong>LLC (Limited Liability Company):</strong> Simple and flexible structure with liability protection.
              Ideal for small to mid-sized businesses.
            </li>
            <li>
              <strong>C Corporation:</strong> Separate legal entity with shareholders. Preferred for startups looking
              for funding or venture capital.
            </li>
            <li>
              <strong>S Corporation:</strong> Similar to C Corp, but with pass-through taxation. Only available to U.S.
              residents.
            </li>
            <li>
              <strong>Sole Proprietorship:</strong> Easiest structure with minimal paperwork, but no liability
              protection.
            </li>
            <li>
              <strong>Partnership:</strong> Shared ownership structure, available as general or limited partnerships.
            </li>
          </ul>
        </RevealWrapper>

        <RevealWrapper>
          <CircleTextAnimation />
        </RevealWrapper>
      </div>
    </section>
  )
}

export default AboutBusnStruc
