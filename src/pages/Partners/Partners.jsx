import Marquee from "react-fast-marquee";
import partner1 from "../../../src/assets/partners/partner (1).jpg";
import partner2 from "../../../src/assets/partners/partner (2).jpg";
import partner3 from "../../../src/assets/partners/partner (3).jpg";
import partner4 from "../../../src/assets/partners/partner (4).jpg";
import partner5 from "../../../src/assets/partners/partner (5).jpg";
import partner6 from "../../../src/assets/partners/partner (6).jpg";
import partner7 from "../../../src/assets/partners/partner (7).jpg";
import partner8 from "../../../src/assets/partners/partner (8).jpg";
import partner9 from "../../../src/assets/partners/partner (9).jpg";
import partner10 from "../../../src/assets/partners/partner (10).jpg";

const Partners = () => {
  return (
    <div className="my-12">
      <div className="text-center">
        <h2 className="text-4xl font-bold">Our Partners</h2>
      </div>
      <div className="flex mt-4">
        <Marquee speed={150}>
          <div className="w-3/4">
            <img src={partner1} alt="" />
          </div>
          <div className="w-3/4">
            <img src={partner2} alt="" />
          </div>
          <div className="w-3/4">
            <img src={partner3} alt="" />
          </div>
          <div className="w-3/4">
            <img src={partner4} alt="" />
          </div>
          <div className="w-3/4">
            <img src={partner5} alt="" />
          </div>
          <div className="w-3/4">
            <img src={partner6} alt="" />
          </div>
          <div className="w-3/4">
            <img src={partner7} alt="" />
          </div>
          <div className="w-3/4">
            <img src={partner8} alt="" />
          </div>
          <div className="w-3/4">
            <img src={partner9} alt="" />
          </div>
          <div className="w-3/4">
            <img src={partner10} alt="" />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Partners;
