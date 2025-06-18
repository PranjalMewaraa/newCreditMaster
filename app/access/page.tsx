import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutOne from '@/components/shared/LayoutOne'
import PageHero from '@/components/shared/PageHero'
import TermsPolicyBody from '@/components/shared/TermsPolicyBody'
import getMarkDownData from '@/utils/GetMarkDownData'

export const metadata = {
  title: 'Privacy & Policy',
}
export interface TermsDataType {
  slug: string
  content: string
  [key: string]: any
}

const accessData: TermsDataType[] = getMarkDownData('data/access')

const FAQPage = () => {
  return (
    <LayoutOne>
      <PageHero title="Accessibility " italicTitle="Policy" badgeTitle="Policy" scale />
      <TermsPolicyBody termsData={accessData} heading={true} />
    </LayoutOne>
  )
}

export default FAQPage
