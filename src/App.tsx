import { RoconRoot } from "rocon/react";
import { ChakraProvider } from "@chakra-ui/react";
import { Routes } from "~/components/routes";

const App: React.VFC = () => {
  return (
    <div>
      <RoconRoot>
        <ChakraProvider>
          <Routes />
        </ChakraProvider>
      </RoconRoot>
    </div>
  );
};

export default App;
