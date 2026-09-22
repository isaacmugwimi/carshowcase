
import Image from "next/image";
import CustomButton from "../CustomButton/CustomButton";



const Hero = () => {
  
  return (
    <div className="hero">
      <div className="">
        <h1 className="hero__title">
          Find, book, rent a car—quick and super easy!
        </h1>

        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>

        <CustomButton 
        />
      </div>
    
    </div>
  );
};

export default Hero;