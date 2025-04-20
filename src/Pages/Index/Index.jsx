import React from "react";
import Nav from "../../Components/Nav/Nav";

import heroImage from "./../../assets/rev_home3_01.png";

import element01 from "./../../assets/h5_decor4.png";
import element02 from "./../../assets/rev_home3_04.png";
import element03 from "./../../assets/rev_home3_05.png";
import element04 from "./../../assets/rev_home3_06.png";

import slideImage01 from "./../../assets/h3_cat-4.jpg";
import slideImage02 from "./../../assets/h3_cat-1.jpg";
import slideImage03 from "./../../assets/h3_cat-2.jpg";
import slideImage04 from "./../../assets/h3_cat-3.jpg";
import slideImage05 from "./../../assets/h3_cat-7.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Index = () => {
  return (
    <div className="">
      <div className="flex flex-col gap-[20px] relative min-h-[90vh] bg-[#ffded1]">
        <Nav />
        <div className="w-full px-[12%] pt-[100px] flex gap-[20px] flex-col lg:flex-row">
          <div className="flex flex-col lg:w-[50%] w-full items-start gap-4 justify-center">
            <small className="text-4xl font-dancing">Best Seller</small>
            <h2 className="text-7xl 2xl:text-8xl font-medium font-kalnia text-red-600">
              Ice Cream <br />
              Novelties
            </h2>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus at ullam mollitia eveniet tempore sequi ipsa nostrum
              atque perspiciatis rem?
            </p>
            <button className="btn header-btn">
              Shop Now <i className="ri-arrow-right-line"></i>
            </button>
          </div>
          <div className="lg:w-[50%] w-full flex items-center justify-center z-[1] relative md:absolute right-0 bottom-0">
            <img
              src={heroImage}
              alt="header-image"
              className="w-full sm:w-[400px] 2xl:w-[600px]"
            />
          </div>
          <img
            src={element01}
            className="w-[80px] h-[80px] absolute -top-[-80%] left-5"
            alt="element01"
          />
          <img
            src={element02}
            className="w-[80px] h-[80px] absolute -top-[-20%] lg:left-[90%] left-[65%] hidden sm:flex"
            alt="element02"
          />
          <img
            src={element03}
            className="w-[90px] h-[90px] absolute -top-[-10%]  left-5"
            alt="element03"
          />
          <img
            src={element04}
            className="w-[90px] h-[90px] absolute -top-[-85%] sm:-top-[-80%] lg:left-[85%] left-[-75%] z-1"
            alt="element04"
          />
        </div>
      </div>
      {/* Category section */}

      <section id="category">
        <h3 className="section_heading">Shop by Category</h3>
        <Swiper
          className="w-full mt-[80px]"
          slidesPerView={5}
          spaceBetween={10}
          autoplay={{
            delay: 2500,
          }}
          modules={[Autoplay]}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 2.5,
            },
            1024: {
              slidesPerView: 4.5,
            },
          }}
        >
          <SwiperSlide>
            <div className="w-[180px] card group">
              <img
                src={slideImage01}
                alt="slideImage01"
                className="w-full rounded-full mb-4"
              />
              <span className="Slide_text">Ice Cream bar</span>
              <span className="text-center w-full text-base hidden group-hover:inline-block">
                2 products
              </span>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-[180px] card group">
              <img
                src={slideImage02}
                alt="slideImage02"
                className="w-full rounded-full mb-4"
              />
              <span className="Slide_text">Frozen Yogurt</span>
              <span className="text-center w-full text-base hidden group-hover:inline-block">
                6 products
              </span>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-[180px] card group">
              <img
                src={slideImage03}
                alt="slideImage03"
                className="w-full rounded-full mb-4"
              />
              <span className="Slide_text">Rolled Ice Cream </span>
              <span className="text-center w-full text-base hidden group-hover:inline-block">
                3 products
              </span>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-[180px] card group">
              <img
                src={slideImage04}
                alt="slideImage04"
                className="w-full rounded-full mb-4"
              />
              <span className="Slide_text">Vegan Ice Cream </span>
              <span className="text-center w-full text-base hidden group-hover:inline-block">
                2 products
              </span>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-[180px] card group">
              <img
                src={slideImage05}
                alt="slideImage05"
                className="w-full rounded-full mb-4"
              />
              <span className="Slide_text">Vegan Gelato</span>
              <span className="text-center w-full text-base hidden group-hover:inline-block">
                2 products
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[180px] card group">
              <img
                src={slideImage01}
                alt="slideImage01"
                className="w-full rounded-full mb-4"
              />
              <span className="Slide_text">Ice Cream bar</span>
              <span className="text-center w-full text-base hidden group-hover:inline-block">
                2 products
              </span>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-[180px] card group">
              <img
                src={slideImage02}
                alt="slideImage02"
                className="w-full rounded-full mb-4"
              />
              <span className="Slide_text">Frozen Yogurt</span>
              <span className="text-center w-full text-base hidden group-hover:inline-block">
                6 products
              </span>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-[180px] card group">
              <img
                src={slideImage03}
                alt="slideImage03"
                className="w-full rounded-full mb-4"
              />
              <span className="Slide_text">Rolled Ice Cream </span>
              <span className="text-center w-full text-base hidden group-hover:inline-block">
                3 products
              </span>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-[180px] card group">
              <img
                src={slideImage04}
                alt="slideImage04"
                className="w-full rounded-full mb-4"
              />
              <span className="Slide_text">Vegan Ice Cream </span>
              <span className="text-center w-full text-base hidden group-hover:inline-block">
                2 products
              </span>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-[180px] card group">
              <img
                src={slideImage05}
                alt="slideImage05"
                className="w-full rounded-full mb-4"
              />
              <span className="Slide_text">Vegan Gelato</span>
              <span className="text-center w-full text-base hidden group-hover:inline-block">
                2 products
              </span>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <section>
        <div className="flex gap-[10px] flex-wrap lg:flex-nowrap">
          <div className="w-full sm:w-[46%] lg:w-[36%] h-[550px] bg-[url(assets/h3_bn-2.jpg)] bg-cover p-6 flex flex-col items-center pt-15 gap-2 text-white">
            <small>save 20% off</small>
            <h3>summer 2025</h3>
            <p>smooth& refreshing intensely flavorful,100% dairy free</p>
            <button>
              {" "}
              Shop Now <i className="ri-arrow-right-line"></i>
            </button>
          </div>
          <div className="w-full sm:w-[46%] lg:w-[36%] h-[550px] bg-[url(assets/h3_bn-1.jpg)] bg-cover p-6 flex flex-col items-center pt-15 gap-2 text-white">
            <small>save 20% off</small>
            <h3>summer 2025</h3>
            <p>smooth& refreshing intensely flavorful,100% dairy free</p>
            <button>
              {" "}
              Shop Now <i className="ri-arrow-right-line"></i>
            </button>
          </div>
          <div className="w-full lg:w-[33%] h-[550px] flex flex-col gap-10 ">
            {/* <small>save 20% off</small> */}
            <div className="h-[250px] w-full bg-[url(assets/h3_bn-4.jpg)] bg-cover p-6 flex flex-col pt-4 gap-2 text-white">
              <h3 className="text-3xl">Best Selling</h3>
              <p className="pt-20">
                the 1# Best
                <br />
                selling Galato
              </p>
            </div>
            <div className="h-[250px] w-full bg-[url(assets/h3_bn-3.jpg)] bg-cover p-6 flex flex-col pt-4 gap-2 text-white">
              <h3 className="text-3xl">Best Selling</h3>
              <p className="pt-20">
                smooth& Creamy <br />
                texture low in calorie.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
