import { animateScroll as scroll } from "react-scroll";

const scrollType = {
  duration: 600,
  delay: 600,
  smooth: true
};

export const onClickUp = () => scroll.scrollToTop(scrollType)
