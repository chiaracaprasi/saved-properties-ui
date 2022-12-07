import { renderAction, title } from "@argonaut/actions";
import { GetAction } from "@realestate.com.au/argonaut";
import Screen from "./Screen";

export const getAction: GetAction = async () => {
  return renderAction(async () => ({
    getElements: async () => {
      return {
        Screen: <Screen />,
      };
    },
    getHead: async () => title("Argonaut app"),
  }));
};
