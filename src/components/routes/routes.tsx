import { Rocon, useRoutes } from "rocon/react";
import { Top } from "~/components/top";

const routing = Rocon.Path().exact({ action: () => <Top /> });

export const Routes: React.VFC = () => {
  return useRoutes(routing);
};
