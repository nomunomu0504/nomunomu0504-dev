import { RoconRoot } from "rocon/react";
import { Routes } from "~/components/routes";

const App: React.VFC = () => {
  return (
    <div>
      <RoconRoot>
        <Routes />
      </RoconRoot>
    </div>
  );
};

export default App;
