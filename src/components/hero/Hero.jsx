import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { BsArrowRight } from "react-icons/bs";
import "swiper/css";
import "swiper/css/pagination";
import shirtImage from "../../assets/hero/shirt.png";
import pantImage from "../../assets/hero/pant.png";
import shortsImage from "../../assets/hero/shorts.png";
import watchImage from "../../assets/hero/watch.png";
import shoesImage from "../../assets/hero/air-jordan.png";
import Button from "../button/Button";

const customData = [
  {
    title: "New Watch Collection",
    heading: "Elegant Timepieces",
    discount: "UPTO 40% OFF",
    buttonText: "Discover Watches",
    image: watchImage,
  },
  {
    title: "Trendy Shirt Collection",
    heading: "Fashionable Shirts",
    discount: "UPTO 30% OFF",
    buttonText: "Shop Shirts",
    image: shirtImage,
  },
  {
    title: "Latest Pant Collection",
    heading: "Stylish Pants",
    discount: "UPTO 35% OFF",
    buttonText: "View Pants",
    image: pantImage,
  },
  {
    title: "Special Offer!",
    heading: "Summer Shorts Sale",
    discount: "50% OFF on Shorts",
    buttonText: "Grab Shorts Now",
    image: shortsImage,
  },
  {
    title: "Hot Deals of the Day",
    heading: "Sizzling Shoe Sale",
    discount: "UPTO 25% OFF on Air Jordans",
    buttonText: "Explore Shoe Deals",
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
          <div className="w-[90%] mx-auto min-h-[calc(100vh-68px)]  items-center justify-center grid grid-cols-1 md:grid-cols-2 py-10 lg:py-0 gap-y-20 gap-x-10">
            <div className="space-y-5 flex items-center flex-col md:block">
              <div className="flex items-center gap-3">
                <hr className="w-10 border-2 border-red-600" />
                <p>{data.title}</p>
              </div>
              <div className="flex items-center gap-3">
                <h2 className="text-4xl lg:text-6xl font-bold">
                  {data.heading}
                </h2>
                {/* <hr className="w-14 border-2 border-white" /> */}
              </div>
              <p className="font-semibold">{data.discount}</p>
              <Button colors="purple">
                <div className="inline-flex items-center">
                  {data.buttonText} <BsArrowRight className="ml-2" />
                </div>
              </Button>
            </div>

            <div className="flex justify-center md:flex md:justify-end">
              <img
                className="h-[200px] md:h-[300px]"
                src={data.image}
                alt={data.heading}
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
