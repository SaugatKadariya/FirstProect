import MyComponent from "../Redux/Todo/MyComponent";
import Body from "../components/Body";

const AboutUs = () => {
  return (
    <>
    <div className="bg-gray-100 py-8 px-4 sm:px-8">
      
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
        <p className="text-lg leading-relaxed">
          Welcome to our company! We are dedicated to providing high-quality
          services and solutions. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed ullamcorper metus id semper consequat. Vivamus
          nec tincidunt risus. Quisque id facilisis nunc.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Our team consists of passionate individuals who strive for excellence
          and innovation. Phasellus nec fermentum libero. Ut lacinia odio in
          tincidunt pellentesque. Curabitur sit amet posuere odio. Vestibulum
          ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          Curae.
        </p>
      </div>
      <Body />
     
    </div>
    
    </>

  );
};

export default AboutUs;
