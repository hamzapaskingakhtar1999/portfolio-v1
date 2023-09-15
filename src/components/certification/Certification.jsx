import React from "react";

/* CSS */
import "./Certification.css";

/* React Slick */
import Slider from "react-slick";

/* PNG */
import freecodecamp from "../../assets/certificates/freecodecamp.png";
import Hackerrank from "../../assets/certificates/Hackerrank.png";
import Intro from "../../assets/certificates/Intro.png";
import js from "../../assets/certificates/Programmingwithjs.png";
import vc from "../../assets/certificates/VersionControl.png";

const Certification = () => {
  const settings = {
    infinite: true,
    speed: 5000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="certification center" id="certification">
      <h2 className="certifcation-heading heading"> Certifications</h2>
      <Slider {...settings}>
        <div>
          <img src={freecodecamp} className="certificate-image" />
        </div>
        <div>
          <img src={Hackerrank} className="certificate-image" />
        </div>
        <div>
          <img src={Intro} className="certificate-image" />
        </div>
        <div>
          <img src={freecodecamp} className="certificate-image" />
        </div>
        <div>
          <img src={js} className="certificate-image" />
        </div>
        <div>
          <img src={vc} className="certificate-image" />
        </div>
      </Slider>
    </div>
  );
};

export default Certification;
