import Hero from '@/components/homepage-01/Hero'
import Portfolio from '@/components/homepage-01/Portfolio'
import Testimonial from '@/components/homepage-01/Testimonial'
import AboutV6 from '@/components/homepage-08/AboutV6'
import HeroV24 from '@/components/homepage-24/HeroV24'
import MarqueeV5 from '@/components/homepage-24/MarqueeV5'
import ProcessV11 from '@/components/homepage-24/ProcessV11'
import ServicesV16 from '@/components/homepage-24/ServicesV16'
import TestimonialV12 from '@/components/homepage-24/TestimonialV12'
import WhatWeOffer from '@/components/homepage-24/WhatWeOffer'
import WhyChooseUsV8 from '@/components/homepage-24/WhyChooseUsV8'
import HeroV25 from '@/components/homepage-25/HeroV25'
import About from '@/components/shared/About'
import ClientsV3 from '@/components/shared/ClientsV3'
import Community from '@/components/shared/Community'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import FAQ from '@/components/shared/FAQ'
import LayoutOne from '@/components/shared/LayoutOne'
import LayoutTwo from '@/components/shared/LayoutTwo'
import ServicesV8 from '@/components/shared/ServicesV8'
import Video from '@/components/shared/Video'

export const metadata = {
  title: 'Credit Master AI',
}

const Home = () => {
  return (
    <LayoutTwo>
      <HeroV25 />
      <AboutV6 />
      <MarqueeV5 />
      {/* <WhatWeOffer /> */}
      <ServicesV16 />
      <WhyChooseUsV8 />
      {/* <ProjectCaseStudies /> */}
      <ProcessV11 />
      <TestimonialV12 />
      <CTA buttonText="Get Started Today">
        Let’s Create a winning
        <span className="block font-instrument italic max-md:inline-block sm:mt-10">Strategy Together.</span>
      </CTA>
    </LayoutTwo>
  )
}

export default Home
