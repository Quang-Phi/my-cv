import { useState } from "react";
import Slick from "../components/Slick";
import { MyPortfolio } from "../components/MyPortfolio";
import $ from "jquery";
import { Project1 } from "../components/Project1";
import { Project2 } from "../components/Project2";
import { Project3 } from "../components/Project3";

export const MyCv = () => {
  const [wrapper, setWrapper] = useState(true);
  return (
    <>
      <div id="page-wrapper">
        <div id="home" style={{ ...(wrapper ? {} : { width: "380px" }) }}>
          <div className="home-wrapper">
            <div className={`home-content ${wrapper ? "" : "hidden"}`}>
              <div className="overlay"></div>
              <div className="home-text">
                <span className="home-title">
                  ĐINH QUANG <strong>PHI</strong>
                </span>
                <span className="home-caption">
                  FULLSTACK <strong>DEVELOPER</strong>
                </span>
              </div>
            </div>

            <a
              onClick={() => setWrapper(!wrapper)}
              href="#"
              id="btn-start"
              className={`${wrapper ? "" : "hidden"}`}
            ></a>

            <nav id="main-nav" className={`${wrapper ? "" : "active"}`}>
              <div className="nav-text">
                <div className="main">
                  <div className="my-avatar">
                    <img src="./img/avt.jpg" className="img-circle" alt="" />
                  </div>
                  <div className="my-name">
                  <h2>
                    ĐINH QUANG <strong>PHI</strong>
                  </h2>
                  <h5>02/09/1997</h5>
                  </div>
                </div>
                <div className="info">
                  <h5>+84 964298523</h5>
                  <h5 style={{ textTransform: "lowercase" }}>
                    xx.quangphi.2.9@gmail.com
                  </h5>
                </div>
                <h6 className="nav-caption">
                  My
                  <span className="text-primary"> Portfolio</span>
                </h6>
              </div>
            </nav>
          </div>
        </div>
        <section id="content" className={`${wrapper ? "" : "active"}`}>
          <div onClick={() => setWrapper(!wrapper)} className="prev"></div>
          <Slick
            config={{
              dots: false,
              infinite: false,
              speed: 1000,
              slidesToShow: 1,
              slidesToScroll: 1,
            }}
          >
            <MyPortfolio />
            <Project1 />
            <Project2 />
          </Slick>
        </section>
      </div>
    </>
  );
};
