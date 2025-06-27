import AboutHero from '@/components/aboutpage-02/AboutHero'
import TeamGallery from '@/components/aboutpage-02/TeamGallery'
import Clients from '@/components/homepage-03/Clients'
import ServicesV3 from '@/components/homepage-03/ServicesV3'
import HeroAbout from '@/components/homepage-07/HeroAbout'
import AgedCompanyAdvantages from '@/components/shared/AdvantageAgedComponies'
import AboutBusnStruc from '@/components/shared/BusinessStruc'
import CtaV2 from '@/components/shared/CtaV2'
import AboutAcess from '@/components/shared/Explopre'
import FaqV2 from '@/components/shared/FaqV2'
import HighCreditReportingPackages from '@/components/shared/HighCreditReportingPackages'
import LayoutOne from '@/components/shared/LayoutOne'
import SkewMarquee from '@/components/shared/SkewMarquee'
import Video from '@/components/shared/Video'

export const metadata = {
  title: 'High Credit Reporting Packages',
}

const AboutPage = () => {
  return (
    <LayoutOne>
      <HighCreditReportingPackages />

      {/* <Video /> */}

      {/* <TeamGallery /> */}
      <Clients />
      <FaqV2 />
      <CtaV2 />
    </LayoutOne>
  )
}

export default AboutPage
