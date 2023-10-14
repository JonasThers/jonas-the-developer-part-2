import { Header } from "./Header";
import { Resume } from "./Resume";

export const Main: React.FC = () => {
  return (
    <div className="container">
      <Header />
      <Resume />
    </div>
  );
};
