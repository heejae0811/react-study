import {Navigation, Pagination, A11y} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import './index.scss'

function MainPage() {
  return (
    <div className="main-page">
      <h1>자기소개 :)</h1>

      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{clickable: true}}>
        <SwiperSlide>
          <img src="/react-study/images/profile01.jpg" alt="프로필"/>
          <p>저는 무럭무럭 자라</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/react-study/images/profile02.jpg" alt="프로필"/>
          <p>유도도 하고</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/react-study/images/profile03.jpg" alt="프로필"/>
          <p>클라이밍도 하고</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/react-study/images/profile04.jpg" alt="프로필"/>
          <p>밴드도 하는 어른이 됐습니다.</p>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default MainPage
