import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { BsArrowRight } from 'react-icons/bs';
import 'swiper/css';
import 'swiper/css/pagination';
import shirtImage from '../../assets/hero/shirt.png';
import pantImage from '../../assets/hero/pant.png';
import shortsImage from '../../assets/hero/shorts.png';
import watchImage from '../../assets/hero/watch.png';
import shoesImage from '../../assets/hero/air-jordan.png';

const customData = [
  {
    title: 'New Watch Collection',
    heading: 'Stylish Watches',
    discount: 'UPTO 40% OFF',
    buttonText: 'Discover Now',
    image: watchImage,
  },
  {
    title: 'Trendy Shirt Collection',
    heading: 'Fashionable Shirts',
    discount: 'UPTO 30% OFF',
    buttonText: 'Shop Shirts',
    image: shirtImage,
  },
  {
    title: 'Latest Pant Collection',
    heading: 'Stylish Pants',
    discount: 'UPTO 35% OFF',
    buttonText: 'View Pants',
    image: pantImage,
  },
  {
    title: 'Special Offer!',
    heading: 'Limited Time Deal',
    discount: 'Save Big!',
    buttonText: 'Grab Now',
    image: shortsImage,
  },
  {
    title: 'Hot Deals of the Day',
    heading: 'Don\'t Miss Out',
    discount: 'Limited Stock!',
    buttonText: 'Explore Deals',
    image: shoesImage,
  },
];

const Hero = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
    >
      {customData.map((data, index) => (
        <SwiperSlide key={index}>
          <div className='bg-slate-100'>
            <div className='w-[90%] mx-auto min-h-[calc(100vh-68px)] flex items-center justify-center flex-col lg:flex-row py-10 lg:py-0 gap-y-10 lg:gap-y-10'>

              <div className='flex-1 space-y-5'>
                <div className='flex items-center gap-3'>
                  <hr className='w-10 border-2 border-red-600' />
                  <p>{data.title}</p>
                </div>
                <div className='flex items-center gap-3'>
                  <h2 className='text-4xl lg:text-6xl font-bold'>{data.heading}</h2>
                  <hr className='w-14 border-2 border-black' />
                </div>
                <p className='font-semibold'>{data.discount}</p>
                <button className='inline-flex items-center justify-center capitalize lg:text-base lg:px-6 md:px-4 px-3 lg:py-3 py-2 font-medium text-white transition hover:drop-shadow-2xl rounded-full border-none shadow-xl md:mb-0 bg-[#4D4376] hover:bg-[#5E548E] duration-700 cursor-pointer'>{data.buttonText} <BsArrowRight className='ml-2' /></button>
              </div>

              <div className='flex-1 flex justify-end'>
                <img className='lg:h-[300px]' src={data.image} alt={data.heading} />
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
