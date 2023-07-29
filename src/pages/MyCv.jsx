/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import Slick from "../components/Slick";
import { MyPortfolio } from "../components/MyPortfolio";

export const MyCv = () => {
  const [wrapper, setWrapper] = useState(true);
  const projects =[
    {
      imgs: [
        "./img/1-1.png",
        "./img/1-2.png",
        "./img/1-3.png",
        "./img/1-4.png",
        "./img/1-5.png",
        "./img/1-6.png",
        "./img/1-7.png",
        "./img/1-8.png",
        "./img/1-9.png",
      ],
      title: "hotel booking / ReactJS + Laravel + MySQL",
      link: "https://qpbooking.net/",
      git:'https://github.com/Quang-Phi/easy_book.git/',
      desc: "The website is under development, using React for the front-end and Laravel for the 		back-end. MySQL is the chosen database. The primary functionalities that have been 	implemented include user registration, login, hotel filtering, and hotel management 		(add, delete, and edit hotel information) as well as room too,and more.. ",
      sub_desc: [
        "- FE ReactJS",
        "- HTML5 / CSS3",
        "- Bootstrap",
        "- Ant Design",
        "- BE Laravel",
        "- DB MySQL",
        "- Ant Design",
      ],
    },
    {
      imgs: [
        "./img/2-1.png",
        "./img/3-2.png",
        "./img/2-3.png",
        "./img/2-4.png",
        "./img/2-5.png",
        "./img/2-6.png",
        "./img/2-7.png",
        "./img/2-8.png",
        "./img/2-9.png",
      ],
      title: "online music website / Laravel + MySQL",
      git:'https://github.com/Quang-Phi/QPMusic.git/',
      link: "https://qpmusic.online/",
      desc: "The online music streaming website includes basic functionalities such as: registration, login, password recovery, music player, search, music categorization, member registration to create playlists, block ads, download music, and more..",
      sub_desc: [
        "- PHP / Laravel",
        "+ reCaptcha",
        "+ Social Lite",
        "- PayPal",
        "- AmlitudeJS",
        "- MySQL",
        "- JavaScript / jQuery",
        "- Bootstrap 5",
      ],
    },
    {
      imgs: [
        "./img/3-1.png",
        "./img/3-2.png",
        "./img/3-3.png",
        "./img/3-4.png",
        "./img/3-5.png",
        "./img/3-6.png",
        "./img/3-7.png",
        "./img/3-8.png",
        "./img/3-9.png",
      ],
      title: "online music website admin/ Laravel + MySQL",
      link: "https://qpmusic.online/",
      desc: "The admin page of the music streaming website includes basic functionalities such as: CRUD (Create, Read, Update, Delete) data, role-based access control between the main admin and other admins, data management and statistics. and more..",
      sub_desc: [
        "- PHP / Laravel",
        "- MySQL",
        "- JavaScript / jQuery",
        "- Bootstrap 5",
        "- AmlitudeJS",
      ],
    },
    {
      imgs: [
        "./img/4-1.jpg",
        "./img/4-2.jpg",
        "./img/4-3.jpg",
        "./img/4-4.png",
        "./img/4-5.jpg",
        "./img/4-6.jpg",
        "./img/4-7.jpg",
        "./img/4-8.jpg",
        "./img/4-9.jpg",
      ],
      title: "Web sale Jewelry / ReactJs",
      link: "https://jewelry-nine.vercel.app/",
      git: 'https://github.com/Quang-Phi/jewelry.git',
      desc: "A shopping website consists of basic interfaces and functionalities: login, search, shopping cart, product categories, product filtering, product details, add-remove-edit cart items. ",
      sub_desc: [
        "- HTML5 / CSS3 / SASS",
        "- ReactJs / Redux Toolkit",
        "- Ant Design",
        "+ React-Slick",
        "+ React-Pagination",
      ],
    },
    {
      imgs: [
        "./img/5-1.jpg",
        "./img/5-2.jpg",
        "./img/5-3.jpg",
        "./img/5-4.png",
        "./img/5-5.png",
        "./img/5-6.png",
        "./img/5-7.png",
        "./img/5-8.png",
        "./img/5-9.png",
      ],
      title: "Web sale drawings design / ReactJs",
      git: 'https://github.com/Quang-Phi/architect.git',
      link: "https://architect-snowy.vercel.app/",
      desc: "The website provides construction design templates, consists of basic interfaces and functionalities: login, search , product categories, product filtering.",
      sub_desc: [
        "- HTML5 / CSS3 / SASS",
        "- ReactJs / Redux Toolkit",
        "- Ant Design",
        "+ React-Slick",
        "+ React-Pagination",
      ],
    },
  ]
  const [slideImg, setSlideImg] = useState({
    show: 0,
    initSlide: 1,
    arr: [],
  });
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
            {projects.map((project, index) => {
              return (
                <>
                  <section key={index} id="project">
                    <div className="section-wrapper">
                      <div className="row">
                        <div className="post ">
                          <div className="post-image">
                            <img src={project.imgs[0]} alt="" />
                          </div>
                          <div className="post-content">
                            <div className="post-category">
                              <span>{project.title}</span>
                            </div>
                            <div className="post-title">
                              <h5>
                                <a
                                  href="javascript:void(0);"
                                  onClick={() =>
                                    window.open(  
                                      project.link,
                                      "_blank",
                                      "noopener"
                                    )
                                  }
                                >
                                  {project.link}
                                </a>
                              </h5>
                              {
                                project.git && ( <h5>
                                  Git Hub:{' '}
                                  <a
                                    href="javascript:void(0);"
                                    onClick={() =>
                                      window.open(  
                                        project.git,
                                        "_blank",
                                        "noopener"
                                      )
                                    }
                                  >
                                     {project.git}
                                  </a>
                                </h5>)
                              }
                            </div>
                            <div className="post-text">
                              <p>
                                {project.desc}. Some technologies used include:{" "}
                                <br />
                                {project.sub_desc.map((item, index) => {
                                  return (
                                    <>
                                      <span key={index}>{item}</span> <br />
                                    </>
                                  );
                                })}
                                - ....
                                <br />& retrieving data from APIs.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="post ">
                          <div className="post-content">
                            <div className="post-category">
                              <span className="label label-black">
                                Some images of the website
                              </span>
                            </div>
                            <div className="post-imgs">
                              {project.imgs.map((img, index) => {
                                return (
                                  <div
                                    onClick={() =>
                                      setSlideImg({
                                        show: true,
                                        initSlide: index,
                                        arr: project.imgs,
                                      })
                                    }
                                    key={index}
                                    className="img"
                                  >
                                    <span className="zoom">
                                      <i className="ri-fullscreen-line"></i>
                                    </span>
                                    <img src={img} alt="" />
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </>
              );
            })}
          </Slick>
        </section>
        {slideImg.show && (
          <div className="detail-img">
            <div className="overlay"></div>
            <div
              onClick={() =>
                setSlideImg({ show: false, initSlide: 0, arr: [] })
              }
              className="close"
            >
              <i className="ri-close-line"></i>
            </div>
            <div className="wrapper">
              <Slick
                config={{
                  infinite: false,
                  speed: 500,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: slideImg.initSlide,
                }}
              >
                {slideImg.arr.map((img, index) => {
                  return <img key={index} src={img} alt="" />;
                })}
              </Slick>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
