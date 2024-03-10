import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import Store from "../../utils/Store";
import { StaticRouter } from "react-router-dom/server";


test("logo should load on rendering header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={Store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  console.log(header)
  const logo=header.getAllByTestId("logo")
  console.log(logo)
});
