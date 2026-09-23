"use client";

import Image from "next/image";
import CustomButton from "../CustomButton/CustomButton";
import "./Hero.css";
const Hero = () => {

  const handleScroll = () => {

  };

  return (
    <div className="hero">

      <div>
        <h1 className="hero__title">
          Find, book, rent a car—quick and super easy!
        </h1>

        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles={{
            backgroundColor: "#2563eb",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "5px",
            outline: "none",
            border: "none",
          }}
          handleClick={handleScroll}
        />
      </div>

      <div className="heroImageContainer">

        <div className="hero-image">
          <Image
            src="/hero.png"
            alt="hero"
            width={700}
            height={500}
          />
        </div>

      </div>

    </div>
  );
};

export default Hero;