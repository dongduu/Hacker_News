import Title from "../components/Header/Title";
import Nav from "../components/Header/Nav";
import { View } from "../components/View";
import { JobList } from "../components/List/JobsList";

const Jobs = () => {
  return (
    <div>
      <Title />
      <Nav />
      <View />
      <JobList />
    </div>
  );
};

export default Jobs;
