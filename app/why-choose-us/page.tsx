import AwardsV2 from '@/components/aboutpage/AwardsV2'
import Team from '@/components/aboutpage/Team'
import About from '@/components/shared/About'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutOne from '@/components/shared/LayoutOne'
import Marquee from '@/components/shared/Marquee'
import PageHero from '@/components/shared/PageHero'
import Video from '@/components/shared/Video'

export const metadata = {
  title: 'About',
}

const AboutPage = () => {
  return (
    <LayoutOne>
      <PageHero
        badgeTitle="Why choose us"
        title=" Why CreditMaster AI "
        italicTitle="Agency"
        description="Elevate Your Business's Financial Future"
      />
      {/* <Video /> */}
      <About />
      {/* <Team /> */}
      {/* <Marquee withBorder={true} /> */}
      {/* <AwardsV2 /> */}
      <CTA>
        Let's chat! with us.
        {/* <CtaImageSlider
          slides={[
            { id: '1', img: '/images/agent/11.png' },
            { id: '2', img: '/images/agent/12.png' },
            { id: '3', img: '/images/agent/13.png' },
          ]}
        /> */}
        <i className="block font-instrument italic max-md:inline-block max-sm:pl-2 sm:mt-10">A virtual coffee?</i>
      </CTA>
    </LayoutOne>
  )
}

export default AboutPage
