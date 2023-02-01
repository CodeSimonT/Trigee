import {
  overweight,
  underweight,
  short,
  conOne,
  conTwo,
  conThree,
  facebook,
  instagram,
  twitter,
  linkedin,
} from "../assets";

export const NavLinks = [
  {
    id: "1",
    title: "Home",
    route: "/",
  },
  {
    id: "2",
    title: "Who are we",
    route: "/WhoAreWe",
  },
  {
    id: "3",
    title: "Mission",
    route: "/Mission",
  },
  {
    id: "4",
    title: "Vision",
    route: "/Vision",
  },
  {
    id: "5",
    title: "History",
    route: "/History",
  },
  {
    id: "6",
    title: "Donate",
    route: "/Donate",
  },
];

export const MalnutritionInfo = [
  {
    id: "1",
    title: "stunting",
    img: short,
    heading: "149 Million",
    content:
      "149 Million children under 5 are affected by stunting (too short for their age)",
  },
  {
    id: "2",
    title: "wasting",
    img: underweight,
    heading: "45 Million",
    content:
      " children under 5 are affected by wasting (too thin for their height)",
  },
  {
    id: "3",
    title: "overweight",
    img: overweight,
    heading: "30 Million",
    content: "children under 5 are affected by overweight",
  },
];

export const Contribute = [
  {
    id: "1",
    title: "Society",
    img: conTwo,
    content:
      "Feeding programs play a critical role in addressing food insecurity and malnutrition in society. By providing access to nutritious food, feeding programs help to improve overall health and well-being. They also serve as a safety net for those who are struggling to meet their basic needs, including children, seniors, and low-income families.",
  },
  {
    id: "2",
    title: "Human Capacity",
    img: conOne,
    content:
      "feeding programmes play a key role in helping children realise their potential, both for themselves and for their communities. Investing in human capital development of children are among the most effective and productive investments that countries can make.",
  },
  {
    id: "3",
    title: "Food System",
    img: conThree,
    content:
      "Home-grown school feeding has the potential to not only create demand for more diverse and nutritious local and traditional food, but also create stable markets, boost local agriculture, impact rural transformation and strengthen local food systems.",
  },
];
export const Foot = [
  {
    id: "1",
    img: facebook,
  },
  {
    id: "2",
    img: instagram,
  },
  {
    id: "3",
    img: twitter,
  },
  {
    id: "4",
    img: linkedin,
  },
];
