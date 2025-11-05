import DFH from "../assets/DFH.png";
import PFV1 from "../assets/PFV1.png";
import TOURAVEL from "../assets/TOURAVEL.png";
import DOUBLEDEGREE from "../assets/DOUBLEDEGREE.png";
import PACKINGLIST from "../assets/PACKINGLIST.png";

const projectData = [
  {
    id: 1,
    title: "Portfolio Website V1",
    description:
      "Personal website to showcase portfolio, consisting of an about section, CV, skills, portfolios, and contact information including social media links. It also highlights my transition from data to web development",
    image: PFV1,
    alt: "Portfolio Website V1",
    buttonText: "Website",
    link: "https://portfolio-ridho-six.vercel.app/",
    hasLink: true,
  },
  {
    id: 2,
    title: "Dahlia Family House",
    description:
      "A responsive landing page for a villa, built with React and Vite. Includes information, gallery, testimonial, and contact link.",
    image: DFH,
    alt: "Dahlia Family House",
    buttonText: "Website",
    link: "https://dahliafamilyhouse.com/",
    hasLink: true,
  },
  {
    id: 3,
    title: "Double Degree",
    description:
      "A website-based application developed for my thesis using only HTML5 and CSS3, designed for desktop use without responsive design, focusing on system functionality rather than UI/UX.",
    image: DOUBLEDEGREE,
    alt: "Double Degree",
    buttonText: "Website",
    link: "#",
    hasLink: false,
  },
  {
    id: 4,
    title: "Touravel",
    description:
      "A website-based home landing page for a Travel Tour Website built using only HTML5 and CSS3, focusing on the user interface and clean layouts without frameworks or JavaScript, designed for desktop use only, with extensive HTML and CSS code written to strengthen front-end fundamentals and explore areas for scalability and future enhancements.",
    image: TOURAVEL,
    alt: "Touravel",
    buttonText: "Website",
    link: "#",
    hasLink: false,
  },
  {
    id: 5,
    title: "Packing List",
    description:
      "Simple React app for managing items, allowing users to add items with names and quantities, mark them as packed or unpacked, delete items, and sort the list by input order, alphabetical order, or packed status.",
    image: PACKINGLIST,
    alt: "Packing List",
    buttonText: "Website",
    link: "#",
    hasLink: false,
  },
];

export default projectData;
