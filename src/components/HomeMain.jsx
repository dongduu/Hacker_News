import { TotalRanking } from "./TotalRanking";
import { HackerNews } from "./HackerNews";

const mainStyle = {
  height: "708px",
  width: "375px"
};

export const HomeMain = () => {
  return (
    <div style={mainStyle}>
      <TotalRanking />
      {/* <HackerNews /> */}
    </div>
  );
};
