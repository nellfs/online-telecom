import ComboBanner from "./ComboCard/ComboCard";
import NewsletterBanner from "./NewsletterCard/NewsletterCard";

interface IBanner {
  type: "combo" | "newsletter";
}

const Banner = (props: IBanner) => {
  if (props.type === "combo") return <ComboBanner></ComboBanner>;
  if (props.type === "newsletter") return <NewsletterBanner></NewsletterBanner>;
  return <div></div>;
};
export default Banner;
