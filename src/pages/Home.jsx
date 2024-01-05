import React from "react";
import Logo from "../assets/Logo.jpg";
import Counter from "../Redux/Count/Counter";
import MyComponent from "../Redux/Todo/MyComponent";

const Home = () => {
  return (
    <div className="mx-auto max-w-2xl p-4 bg-white shadow-md rounded-lg">
      <div className="flex items-center justify-center mb-6">
        <img src={Logo} alt="Football" className="h-24 w-auto" />
      </div>
      <h1 className="text-4xl font-bold mb-4 text-center">
        Welcome to Our Page
      </h1>
      <p className="text-lg text-gray-700 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida
        dolor ut justo fermentum, a suscipit nisi scelerisque. Proin sodales
        risus vitae tortor consequat mollis. Nulla facilisi. Nullam efficitur
        metus id libero cursus, vel viverra ex convallis. Phasellus auctor, nisl
        quis tristique ultricies, lectus ipsum accumsan tortor, at consectetur
        dui urna vitae metus.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Integer eget nunc nec purus tempus facilisis vel at nunc. Vivamus vitae
        erat fermentum, tincidunt justo et, sodales leo. Sed eu quam non mi
        bibendum porta. Vivamus ut eros id sapien fringilla ultrices. Sed a
        neque eget velit dignissim hendrerit. Fusce vel leo at dolor lobortis
        suscipit.
      </p>
      <Counter />
     
    </div>
  );
};

export default Home;
