import React from "react";
import ComboBanner from "./ComboBanner";
import NewsletterBanner from "./NewsletterBanner";

interface IBanner {
  type: "combo" | "newsletter";
}

const Banner = (props: IBanner) => {
  if (props.type === "combo") return <ComboBanner></ComboBanner>;
  if (props.type === "newsletter") return <NewsletterBanner></NewsletterBanner>;
  return <div>banner error</div>;
};
export default Banner;
