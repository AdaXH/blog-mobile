import { Wrap } from "@/component/wrap";
import { SLIDES } from "./constant";
import styles from "./index.module.less";

export const HomeSlide = () => {
  return SLIDES.map(({ Component, icon }, index) => (
    <Wrap icon={icon} index={index}>
      <Component />
    </Wrap>
  ));
};
