const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/vYXdDcc/h-Bzv-Nsuvdzw-LKn-ZLyi-Cq-AT.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-extrabold">
            Step into Style with Prime
          </h1>
          <p className="mb-5 font-semibold">
            Discover the perfect pair at Prime. Shop our exclusive collection of
            shoes, blending comfort and fashion effortlessly. Elevate your
            footwear game with Prime today!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
