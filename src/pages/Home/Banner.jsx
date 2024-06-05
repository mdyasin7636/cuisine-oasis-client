const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/grSkjWf/39a04cd1293a6f6ec1935d9e9771b406c53f8721.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md text-white">
          <h1 className="mb-5 text-4xl font-extrabold">
          Explore, Create, and Share Delicious Recipes
          </h1>
          <p className="mb-5 font-semibold">
          Join our community to share your favorite recipes, discover new culinary delights, and connect with fellow food lovers. Start your cooking adventure today!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
