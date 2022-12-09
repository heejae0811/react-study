import { Link } from 'react-router-dom'
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function MainPage() {
  return (
    <div>
      <h1>메인 페이지</h1>

      <ul>
        <li>
          <Link to="/">메인 페이지</Link>
          <Link to="/project">프로젝트 페이지</Link>
          <Link to="/study">스터디 페이지</Link>
        </li>
      </ul>

      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide style={{ backgroundImage: `url("/images/profile01.jpg")` }}>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/profile02.jpg" alt="프로필사진"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/profile03.jpg" alt="프로필사진"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/profile04.jpg" alt="프로필사진"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/profile05.jpg" alt="프로필사진"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/profile06.jpg" alt="프로필사진"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/profile07.png" alt="프로필사진"/>
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
}

export default MainPage;
