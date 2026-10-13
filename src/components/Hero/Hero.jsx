import React from "react";
import BgImage from "../../assets/bg-slate.png";
import CoffeeMain from "../../assets/black.png";

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Hero = () => {
  return (
  <main style={bgImage}>
    <section className="min-h-[750px] w-full">
      <div className="container">
      {/*navbar section  */}
      {/* hero section */}
        <div className="grid grid-cols-1 md:grid-cols-2
        lg:grid-cols-3 place-items-center min-h-[850px]">
          {/* text content section */}
          <div className= "text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
            <h1 className="text-7xl font-bold leading-tight ml-14">Block Tumbler</h1>
            <div className="relative">
              <div className="relative z-10 space-y-4">
                <h1 className="text-2xl">Black Lifestyle Lovers,</h1>
                <h1 className="text-sm opacity-55 leading-loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, cum ipsa. Cum pariatur praesentium quidem? Ex odio voluptas consequuntur cumque.</h1>
              </div>
              <div className="absolute -top- -left-10 w-[250px] h-[190px] bg-gray-700/25"></div>
            </div>
        </div>
        {/* hero image section */}
        <div className="relative">
         <img src={CoffeeMain} alt="" className="relative z-40 h-[400px] md:h-[700px] img-shadow" />
        </div>
        <div>
          
        </div>
        <div></div>
        <div>
          {/* third div section */}
      </div>
      </div>
    </div>
    </section>
  </main>
)};

export default Hero;
