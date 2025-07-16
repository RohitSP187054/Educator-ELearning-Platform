import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { assets, dummyTestimonial } from "../../assets/assets";
import Footer from "../../components/student/Footer";

const About = () => {
  const { navigate } = useContext(AppContext);
  return (
    <>
      <div className="flex flex-col justify-center w-full text-center">
        <div className="space-y-3 px-9 md:px-16 text-center">
          <p className="m-4">
            <span
              className="text-blue-400 cursor-pointer"
              onClick={() => navigate("/")}
            >
              Home{" "}
            </span>
            / About
          </p>
          <h1 className="font-bold text-[36px]">About Us</h1>
          <h2 className="font-semibold text-[28px] ">
            Empowering Learning, Inspiring Growth
          </h2>
          <p className="px-">
            Welcome to <span className="text-red-400">Educator</span> , your
            destination for high-quality online learning. We believe that
            education should be accessible, flexible, and empowering for
            everyone, everywhere. Whether you're looking to upskill, start a new
            career, or explore your passions, we provide the tools and resources
            to help you succeed.
          </p>
        </div>
        <div className="mt-9 relative">
          <h2 className="text-2xl font-bold underline ">Our Team</h2>
          <div className="overflow-x-auto flex gap-4 mt-6 scrollbar-hide scroll-smooth snap-x snap-mandatory justify-center">
            {dummyTestimonial.map((about, index) => (
              <div
                key={index}
                className=" flex flex-col md:first:ml-0 first:ml-[600px]   items-center overflow-hidden min-w-[200px] justify-center"
              >
                <img src={about.image} className="" alt="" />
                <p className="font-semibold">{about.name} </p>
                <p className="text-base font-semibold text-gray-400">
                  {about.designation}
                </p>
                <p className="text-gray-400">&#9742; {about.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
