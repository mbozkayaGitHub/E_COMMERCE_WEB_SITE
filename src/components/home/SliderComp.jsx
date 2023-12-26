import React from "react";
import Slider from "react-slick";

const SliderComp = () => {
  const settings = {
   // dots: true,
    infinite: true,
 autoplay:true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center bg-gray-100 px-6">
          <div>
            <div className="text-6xl font-bold"> Best T-shirts Here!</div>
            <div className="text-lg my-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Obcaecati illo laudantium maxime omnis, mollitia quis libero iure
              accusantium nemo. Voluptatem et aperiam, corporis obcaecati
              assumenda recusandae magnam dolore accusamus tempore?
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200">
              İncele
            </div>
          </div>
          <img
            src="https://www.icewear.is/pub/media/catalog/product/cache/ecc700ac95a539de9e0ef2424af8fc0e/t/s/tshirt-iceland-cotton_eyjalon_72.jpg"
            alt=""
          />
        </div>
        <div className="!flex items-center bg-gray-100 px-6">
          <div>
            <div className="text-5xl font-bold"> Best T-shirts Here!</div>
            <div className="text-lg my-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Obcaecati illo laudantium maxime omnis, mollitia quis libero iure
              accusantium nemo. Voluptatem et aperiam, corporis obcaecati
              assumenda recusandae magnam dolore accusamus tempore?
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200">
              İncele
            </div>
          </div>

          <img
            width={550}
            src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/d9aa1b6a-4385-4233-96b6-b03f5c83d1a6/los-angeles-lakers-icon-edition-2022-23-dri-fit-nba-swingman-jersey-h7dqgF.png"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
