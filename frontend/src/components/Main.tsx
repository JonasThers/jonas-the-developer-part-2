import { Intro } from "./Intro";
import { Resume } from "./Resume";

export const Main: React.FC = () => {
  return (
    <div className="container">
      <Intro />
      <Resume />
    </div>
  );
};
