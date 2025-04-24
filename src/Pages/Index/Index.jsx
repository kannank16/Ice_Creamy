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

import slideImage06 from "./../../assets/product_18_1-600x600.jpg";
import slideImage07 from "./../../assets/product_3_1-600x600.jpg";
import slideImage08 from "./../../assets/product_5_1-600x600.jpg";
import slideImage09 from "./../../assets/product_5_2-600x600.jpg";
import slideImage10 from "./../../assets/product_19_1-600x600.jpg";
import slideImage11 from "./../../assets/product_1_1-600x600.jpg";
import slideImage12 from "./../../assets/product_2_4.jpg";
import slideImage13 from "./../../assets/product_12_1-600x600.jpg";

import avatar01 from "./../../assets/avatar-1.jpg";
import avatar02 from "./../../assets/avatar-2.jpg";
import avatar03 from "./../../assets/avatar-4.jpg";
import avatar04 from "./../../assets/avatar-6.jpg";

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
            delay: 1500,
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
        <div className="flex gap-[10px] flex-wrap lg:flex-nowrap text-center">
          <div className="w-full sm:w-[46%] lg:w-[36%] h-[550px] bg-[url(assets/h3_bn-2.jpg)] bg-cover p-6 flex flex-col items-center pt-15 gap-2 text-white">
            <small className="text-2xl">save 20% off</small>
            <h3>summer 2025</h3>
            <p>smooth& refreshing intensely flavorful,100% dairy free</p>
            <button className="btn headerbtn">
              {" "}
              Shop Now <i className="ri-arrow-right-line"></i>
            </button>
          </div>
          <div className="w-full sm:w-[46%] lg:w-[36%] h-[550px] bg-[url(assets/h3_bn-1.jpg)] bg-cover p-6 flex flex-col items-center pt-15 gap-2 text-white">
            <small className="text-2xl">save 20% off</small>
            <h3>summer 2025</h3>
            <p>smooth& refreshing intensely flavorful,100% dairy free</p>
            <button className="btn headerbtn">
              {" "}
              Shop Now <i className="ri-arrow-right-line"></i>
            </button>
          </div>
          <div className="w-full lg:w-[33%] h-[550px] flex flex-col gap-5 ">
            {/* <small>save 20% off</small> */}
            <div className="h-[270px] w-full bg-[url(assets/h3_bn-4.jpg)] bg-cover p-6 flex flex-col pt-4 gap-2 text-white">
              <h3 className="text-3xl">Best Selling</h3>
              <p className="pt-20">
                the 1# Best
                <br />
                selling Galato
              </p>
            </div>
            <div className="h-[270px] w-full bg-[url(assets/h3_bn-3.jpg)] bg-cover p-6 flex flex-col pt-4 gap-2 text-white">
              <h3 className="text-3xl">Best Selling</h3>
              <p className="pt-20">
                smooth& Creamy <br />
                texture low in calorie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* popular flavor section */}

      <section id="popular">
        <h3 className="section_heading">Popular Scoop Flavours</h3>
        <Swiper
          className="mt-20 w-full flex"
          slidesPerView={3}
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 2.5,
            },
            1024: {
              slidesPerView: 3.5,
            },
          }}
          autoplay={{
            delay: 1500,
          }}
          loop={true}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <div className="relative flex flex-col gap-[10px] card ">
              <div className="w-full">
                <img src={slideImage06} alt="slideImage06" className="w-full" />
                <div className="absolute top-5 flex flex-col right-5 gap-2 icons-card hidden">
                  <i className="ri-heart-line icon-card"></i>
                  <i className="ri-shuffle-line icon-card"></i>
                  <i className="ri-eye-line icon-card"></i>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-line"></i>
                </div>
                <h2 className="text-lg font-bold text-center text-rose-500">
                  Chocolate Fudge Browning{" "}
                </h2>
                <span>Rs.45</span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative flex flex-col gap-[10px] card ">
              <div className="w-full ">
                <img src={slideImage07} alt="slideImage07" className="w-full" />
                <div className="absolute top-5 flex flex-col right-5 gap-2 icons-card hidden">
                  <i className="ri-heart-line icon-card"></i>
                  <i className="ri-shuffle-line icon-card"></i>
                  <i className="ri-eye-line icon-card"></i>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-line"></i>
                </div>
                <h2 className="text-lg font-bold text-center text-rose-500">
                  Boom Balattl's IceCream{" "}
                </h2>
                <span>Rs.75</span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative flex flex-col gap-[10px] card ">
              <div className="w-full">
                <img src={slideImage08} alt="slideImage08" className="w-full" />
                <div className="absolute top-5 flex flex-col right-5 gap-2 icons-card hidden">
                  <i className="ri-heart-line icon-card"></i>
                  <i className="ri-shuffle-line icon-card"></i>
                  <i className="ri-eye-line icon-card"></i>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-line"></i>
                </div>
                <h2 className="text-lg font-bold text-center text-rose-500">
                  Peekaboo Ice Cream{" "}
                </h2>
                <span>Rs.145</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative flex flex-col gap-[10px] card ">
              <div className="w-full">
                <img src={slideImage10} alt="slideImage10" className="w-full" />
                <div className="absolute top-5 flex flex-col right-5 gap-2 icons-card hidden">
                  <i className="ri-heart-line icon-card"></i>
                  <i className="ri-shuffle-line icon-card"></i>
                  <i className="ri-eye-line icon-card"></i>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-line"></i>
                </div>
                <h2 className="text-lg font-bold text-center text-rose-500">
                  Beckon Fudge Browning{" "}
                </h2>
                <span>Rs.175</span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Shop Section */}

      <section id="shop">
        <h3 className="section_heading">Eat Ice Cream , Be Happy !</h3>
        {/* Grid wrapper */}
        <div className="mt-30 grid grid-cols-1 gap-10 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4">
          {/* Grid-card */}
          <div className="w-full flex flex-col gap-2 relative card">
            {/* Grid-image */}
            <div className="w-full ">
              <img src={slideImage06} alt="" />
              <div className="absolute top-5 flex flex-col gap-2 right-5 hidden icons-card">
                <i className="ri-heart-line icon-card"></i>
                <i className="ri-shuffle-line icon-card"></i>
                <i className="ri-eye-line icon-card"></i>
              </div>
            </div>
            {/* Grid Card-Content */}
            <div className="flex flex-col gap-2 items-center justify-center">
              <div className="">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-line"></i>
              </div>
              <h2 className="text-lg font-bold text-rose-500 text-center">
                Chocolate Fudge Browning
              </h2>
              <span className="">RS.45$</span>{" "}
            </div>
          </div>
          {/* Grid-card */}
          <div className="w-full flex flex-col gap-2 relative card">
            {/* Grid-image */}
            <div className="w-full ">
              <img src={slideImage07} alt="" />
              <div className="absolute top-5 flex flex-col gap-2 right-5 hidden icons-card">
                <i className="ri-heart-line icon-card"></i>
                <i className="ri-shuffle-line icon-card"></i>
                <i className="ri-eye-line icon-card"></i>
              </div>
            </div>
            {/* Grid Card-Content */}
            <div className="flex flex-col gap-2 items-center justify-center">
              <div className="">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-line"></i>
              </div>
              <h2 className="text-lg font-bold text-rose-500 text-center">
                Booms BattleIce Cream{" "}
              </h2>
              <span className="">RS.75$</span>{" "}
            </div>
          </div>
          {/* Grid-card */}
          <div className="w-full flex flex-col gap-2 relative card">
            {/* Grid-image */}
            <div className="w-full ">
              <img src={slideImage08} alt="" />
              <div className="absolute top-5 flex flex-col gap-2 right-5 hidden icons-card">
                <i className="ri-heart-line icon-card"></i>
                <i className="ri-shuffle-line icon-card"></i>
                <i className="ri-eye-line icon-card"></i>
              </div>
            </div>
            {/* Grid Card-Content */}
            <div className="flex flex-col gap-2 items-center justify-center">
              <div className="">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-line"></i>
              </div>
              <h2 className="text-lg font-bold text-rose-500 text-center">
                beekaboo Ice Cream{" "}
              </h2>
              <span className="">RS.145$</span>{" "}
            </div>
          </div>
          {/* Grid-card */}
          <div className="w-full flex flex-col gap-2 relative card">
            {/* Grid-image */}
            <div className="w-full ">
              <img src={slideImage10} alt="" />
              <div className="absolute top-5 flex flex-col gap-2 right-5 hidden icons-card">
                <i className="ri-heart-line icon-card"></i>
                <i className="ri-shuffle-line icon-card"></i>
                <i className="ri-eye-line icon-card"></i>
              </div>
            </div>
            {/* Grid Card-Content */}
            <div className="flex flex-col gap-2 items-center justify-center">
              <div className="">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-line"></i>
              </div>
              <h2 className="text-lg font-bold text-rose-500 text-center">
                Beckon Fudge Browning
              </h2>
              <span className="">RS.175$</span>{" "}
            </div>
          </div>
          {/* Grid-card */}

          <div className="w-full flex flex-col gap-2 relative card">
            {/* Grid-image */}
            <div className="w-full ">
              <img src={slideImage09} alt="" />
              <div className="absolute top-5 flex flex-col gap-2 right-5 hidden icons-card">
                <i className="ri-heart-line icon-card"></i>
                <i className="ri-shuffle-line icon-card"></i>
                <i className="ri-eye-line icon-card"></i>
              </div>
            </div>
            {/* Grid Card-Content */}
            <div className="flex flex-col gap-2 items-center justify-center">
              <div className="">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-line"></i>
              </div>
              <h2 className="text-lg font-bold text-rose-500 text-center">
                beekaboo Ice Cream{" "}
              </h2>
              <span className="">RS.145$</span>{" "}
            </div>
          </div>
          {/* Grid-card */}

          <div className="w-full flex flex-col gap-2 relative card">
            {/* Grid-image */}
            <div className="w-full ">
              <img src={slideImage11} alt="" />
              <div className="absolute top-5 flex flex-col gap-2 right-5 hidden icons-card">
                <i className="ri-heart-line icon-card"></i>
                <i className="ri-shuffle-line icon-card"></i>
                <i className="ri-eye-line icon-card"></i>
              </div>
            </div>
            {/* Grid Card-Content */}
            <div className="flex flex-col gap-2 items-center justify-center">
              <div className="">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-line"></i>
              </div>
              <h2 className="text-lg font-bold text-rose-500 text-center">
                Noosa Ice Cream{" "}
              </h2>
              <span className="">RS.195$</span>{" "}
            </div>
          </div>
          {/* Grid-card */}

          <div className="w-full flex flex-col gap-2 relative card">
            {/* Grid-image */}
            <div className="w-full ">
              <img src={slideImage12} alt="" />
              <div className="absolute top-5 flex flex-col gap-2 right-5 hidden icons-card">
                <i className="ri-heart-line icon-card"></i>
                <i className="ri-shuffle-line icon-card"></i>
                <i className="ri-eye-line icon-card"></i>
              </div>
            </div>
            {/* Grid Card-Content */}
            <div className="flex flex-col gap-2 items-center justify-center">
              <div className="">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-line"></i>
              </div>
              <h2 className="text-lg font-bold text-rose-500 text-center">
                Ice Cream{" "}
              </h2>
              <span className="">RS.145$</span>{" "}
            </div>
          </div>
          {/* Grid-card */}

          <div className="w-full flex flex-col gap-2 relative card">
            {/* Grid-image */}
            <div className="w-full ">
              <img src={slideImage13} alt="" />
              <div className="absolute top-5 flex flex-col gap-2 right-5 hidden icons-card">
                <i className="ri-heart-line icon-card"></i>
                <i className="ri-shuffle-line icon-card"></i>
                <i className="ri-eye-line icon-card"></i>
              </div>
            </div>
            {/* Grid Card-Content */}
            <div className="flex flex-col gap-2 items-center justify-center">
              <div className="">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-line"></i>
              </div>
              <h2 className="text-lg font-bold text-rose-500 text-center">
                Holo Top Ice Cream{" "}
              </h2>
              <span className="">RS.145$</span>{" "}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex justify-between flex-wrap gap-5">
          <div className="flex items-center gap-4">
            <h3 className="text-6xl font-bold text-rose-500">1.5</h3>
            <p className="text-gray-400">
              Millon Liters <br />
              <span className="text-2xl text-black font-semibold">
                Produced Over
              </span>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <h3 className="text-6xl font-bold text-rose-500">29</h3>
            <p className="text-gray-400">
              Millon Liters
              <br />
              <span className="text-2xl text-black font-semibold">
                {" "}
                Scoops Sold{" "}
              </span>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <h3 className="text-6xl font-bold text-rose-500">20</h3>
            <p className="text-gray-400">
              Years of <br />
              <span className="text-2xl text-black font-semibold">
                {" "}
                Our Experience
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="bg-orange-100" id="testimonials">
        <h3 className="section_heading">Happy Clients Say</h3>
        <Swiper
          className="w-full mt-[100px] mb-[100px]"
          slidesPerView={3}
          spaceBetween={20}
          breakpoints={{
            0: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 2.5,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          autoplay={{
            delay: 1500,
          }}
          loop={true}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <div className="w-full card group p-8 bg-white">
              <div className="flex items-start gap-3">
                <img
                  src={avatar01}
                  alt="avtar01"
                  className="w-[50px] rounded-full mb-4"
                />
                <div className="flex flex-col">
                  <div className="">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-line"></i>
                  </div>
                  <span className="">Sandra Farmar</span>
                </div>
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Facilis consectetur voluptas magnam explicabo, porro nisi
                commodi facere totam consequatur necessitatibus!
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full card group p-8 bg-white">
              <div className="flex items-start gap-3">
                <img
                  src={avatar02}
                  alt="avtar01"
                  className="w-[50px] rounded-full mb-4"
                />
                <div className="flex flex-col">
                  <div className="">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-line"></i>
                  </div>
                  <span className="">Asma cornor</span>
                </div>
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Facilis consectetur voluptas magnam explicabo, porro nisi
                commodi facere totam consequatur necessitatibus!
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full card group p-8 bg-white">
              <div className="flex items-start gap-3">
                <img
                  src={avatar03}
                  alt="avtar01"
                  className="w-[50px] rounded-full mb-4"
                />
                <div className="flex flex-col">
                  <div className="">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-line"></i>
                  </div>
                  <span className="">kritika</span>
                </div>
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Facilis consectetur voluptas magnam explicabo, porro nisi
                commodi facere totam consequatur necessitatibus!
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full card group p-8 bg-white">
              <div className="flex items-start gap-3">
                <img
                  src={avatar04}
                  alt="avtar01"
                  className="w-[50px] rounded-full mb-4"
                />
                <div className="flex flex-col">
                  <div className="">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-line"></i>
                  </div>
                  <span className="">Soheha Cornor</span>
                </div>
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Facilis consectetur voluptas magnam explicabo, porro nisi
                commodi facere totam consequatur necessitatibus!
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <section id="contact" className="bg-black text-white flex flex-col gap-5">
        <h3 className="section_heading text-white mb-8">Contact us</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-5 pb-9">
          <div className="flex flex-col gap-2">
            <span className="text-2xl text-red-600 font-bold cursor-pointer">Ice Parlor</span>
            <div className="flex flex-col mt-4">
              <span className="">Follow us</span>
              <p className="text-gray-500 hover:text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Inventore, iure?
              </p>
            </div>
            <div className="flex gap-5 mt-4">
              <i className="ri-facebook-line text-gray-500 hover:text-white cursor-pointer text-2xl"></i>
              <i className="ri-twitter-line text-gray-500 hover:text-white cursor-pointer text-2xl"></i>
              <i className="ri-youtube-line text-gray-500 hover:text-white cursor-pointer text-2xl"></i>
              <i className="ri-instagram-line text-gray-500 hover:text-white cursor-pointer text-2xl"></i>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl mb-5">Useful Links</h2>
            <p className="text-gray-500 hover:text-white cursor-pointer">About</p>
            <p className="text-gray-500 hover:text-white cursor-pointer">Service</p>
            <p className="text-gray-500 hover:text-white cursor-pointer">Storage</p>
            <p className="text-gray-500 hover:text-white cursor-pointer">Blog</p>
            <p className="text-gray-500 hover:text-white cursor-pointer">Shop</p>
            <p className="text-gray-500 hover:text-white cursor-pointer">Menu</p>
            <p className="text-gray-500 hover:text-white cursor-pointer">Spe.Menu</p>
          </div>
          <div className="flex flex-col gap-2">
            {" "}
            <h2 className="text-2xl mb-5">Find Store</h2>
            <p className="text-gray-500 hover:text-white cursor-pointer">576 Karaikudi 12th street</p>
            <p className="text-gray-500 hover:text-white cursor-pointer">Karaikudi</p>
            <h2 className="text-2xl mb-5">Call Now</h2>
            <p className="text-gray-500 hover:text-white cursor-pointer">+91 7558146263</p>
            <p className="text-gray-500 hover:text-white cursor-pointer">Support@IceParlor.com</p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl mb-5">Opening Hours</h2>
            <p className="text-gray-500 hover:text-white cursor-pointer">Monday-Sunday</p>
            <p className="text-gray-500 hover:text-white cursor-pointer">9:00am-11:30pm</p>
          </div>
        </div>
        <p className="text-center pt-8 border-t-1 border-gray-500">@2025 IceParlor ,&copy;All Rights Reserved</p>
      </section>
    </div>
  );
};

export default Index;
