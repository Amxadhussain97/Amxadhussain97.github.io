// import { HiOutlineDesktopComputer } from "react-icons/hi";
// import { CiMobile1 } from "react-icons/ci";
// import { MdWorkspacesOutline } from "react-icons/md";
import sifatIMG from "./sifat.jpg"
import monjurIMG from "./monjur.jpg"


// export const projectExperience = [
//   {
//     name: "Website Design",
//     projects: 76,
//     icon: HiOutlineDesktopComputer,
//     bg: "#286F6C",
//   },
//   {
//     name: "Mobile App Design",
//     projects: 63,
//     icon: CiMobile1,
//     bg: "#EEC048",
//   },
//   {
//     name: "Brand Identity",
//     projects: 47,
//     icon: MdWorkspacesOutline,
//     bg: "#F26440",
//   },
// ];



export const comments = [
  {
    name: "Sifat Ullah",
    post: "Associate Software Engineer",
    comment:
      "Tamim is a highly talented and experienced full-stack developer with solid programming knowledge. He possesses exceptional skills in various programming languages, frameworks, and tools, allowing him to deliver high-quality code that is efficient and well-documented. Tamim is known for his ability to quickly grasp complex concepts and find practical solutions. He is a strong communicator and collaborator, actively listening to others",
    img: sifatIMG,
  },
  {
    name: "Monjurul Karim ",
    post: "Digital Marketer",
    comment:"I highly recommend Amzad Tamim as a software developer. He consistently delivers high-quality code and demonstrates a deep understanding of software development principles. They are a proactive team player who effectively communicates and collaborates with colleagues",  img: monjurIMG,
  },
  {
    name: "Amzad Hussain",
    post: "Creative Manager",
    comment:
      "Tamim is a highly talented and experienced full-stack developer with solid programming knowledge. He possesses exceptional skills in various programming languages, frameworks, and tools, allowing him to deliver high-quality code that is efficient and well-documented. Tamim is known for his ability to quickly grasp complex concepts and find practical solutions. He is a strong communicator and collaborator, actively listening to others",
     img: monjurIMG,
  },
  
];

export const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
