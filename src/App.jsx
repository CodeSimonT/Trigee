import { Navigation } from "./components";
import Routing from "./components/Routes/Routing";
import { Styles } from "./styles";

const App = () => {
  return (
    <div className="w-full overflow-hidden bg-thertiary font-poppins text-primary">
      <div
        className={`${Styles.flexCenter} ${Styles.PaddingX} ${Styles.PaddingY} bg-secondary`}
      >
        <Navigation />
      </div>
      <div>
        <Routing />
      </div>
    </div>
  );
};

export default App;
