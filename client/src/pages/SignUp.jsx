import React from "react";

const SignUp = () => {
  return (
    <div className="w-full h-80vh bg-red-500 flex justify-center">
      <div className="w-1/2 h-fit bg-color1 mt-10 p-6 rounded-md">
        <div>
          <span className="text-gray-400 block">Welcome to GitHub!</span>
          <span className="text-gray-400">Let’s begin the adventure</span>
        </div>
        <form action="" className="text-white">
          <div className="my-8">
            <label className="text-color2 block" htmlFor="userEmail">
              Enter your email
            </label>
            <span>-</span>
            <input type="text" id="userEmail" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
