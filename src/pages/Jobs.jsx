import { Title } from "../components/Header/Title";
import { Nav } from "../components/Header/Nav";
import { JobList } from "../components/List/JobsList";

export const Jobs = () => {
  return (
    <div>
      <Title />
      <Nav />
      <JobList />
    </div>
  );
};
