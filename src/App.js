import "./styles.css";
import { Main } from "./components/Main";
import { Stories } from "../src/components/stories/stories";

export const App = () => {
  return (
    <div className="App">
      <div className="native"></div>
      <Stories />
      <Main />
    </div>
  );
};
