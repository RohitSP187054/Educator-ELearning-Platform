import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { useClerk, useUser, UserButton } from "@clerk/clerk-react";
import { AppContext } from "../../context/AppContext";

const CallToAction = () => {
  const { openSignIn } = useClerk();
  const { user } = useUser();
  const { navigate } = useContext(AppContext);
  return (
    <div className="flex flex-col items-center gap-4 pt-10 pb-24 px-8 md:px-0">
      <h1 className="text-xl md:text-4xl text-gray-800 font-semibold">
        Learn anything, anytime, anywhere
      </h1>
      <p className="text-gray-500 sm:text-sm">
        Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id
        veniam aliqua proident excepteur commodo do ea.
      </p>
      <div className="flex items-center font-medium gap-6 mt-4">
        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={() => openSignIn()}
            className="bg-blue-600 text-white px-5 py-2 rounded-full cursor-pointer"
          >
            Get Start
          </button>
        )}
        <button
          onClick={() => navigate("/about")}
          className="flex items-center gap-2"
        >
          Learn More <img src={assets.arrow_icon} alt="arrow icon" />
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
