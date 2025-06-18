'use client'
import userImg2 from '@/public/images/avatar/review-6.png'
import userImg1 from '@/public/images/avatar/review-8.png'
import userImg3 from '@/public/images/avatar/review-9.png'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import RevealWrapper from '../animation/RevealWrapper'
import SwiperSlideContent from './SwiperSlideContent'
const userReviewData = [
  {
    id: 1,
    tags: 'Build credit fast using smart AI tools designed for business owners.',
    title:
      'Credit Master AI helped me build business credit without using my SSN. Their AI guidance is accurate and trustworthy!',
    userImg: userImg1,
    userName: 'Kathryn Murphy',
    position: 'Founder at Finlytics',
  },
  {
    id: 2,
    tags: 'Automated credit planning, dispute management, and lender matching.',
    title:
      'Thanks to Credit Master AI, I secured funding in just 3 weeks. Their AI tools matched me with the right lenders instantly.',
    userImg: userImg2,
    userName: 'Zaks Addison',
    position: 'Small Business Owner',
  },
  {
    id: 3,
    tags: 'Experience smarter credit growth with minimal manual effort.',
    title:
      'The dashboard is super intuitive. I love how Credit Master AI keeps me on track with reminders and credit improvement tips.',
    userImg: userImg3,
    userName: 'John Dewey',
    position: 'Freelance Developer',
  },
]

const SwiperSlider = () => {
  return (
    <RevealWrapper className="container pb-6 pt-16 lg:pb-10 lg:pt-[100px]">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop
        pagination={{
          clickable: true,
          el: '.swiper-custom-pagination',
        }}
        speed={1500}
        allowTouchMove
        autoplay={{
          delay: 3700,
          disableOnInteraction: false,
        }}>
        {userReviewData.map(({ id, title, tags, userName, position, userImg }) => (
          <SwiperSlide key={id}>
            <SwiperSlideContent tags={tags} title={title} userName={userName} position={position} userImg={userImg} />
          </SwiperSlide>
        ))}
        <div className="swiper-custom-pagination mt-6 flex justify-center"></div>
      </Swiper>
    </RevealWrapper>
  )
}

export default SwiperSlider
