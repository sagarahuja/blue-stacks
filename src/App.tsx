import * as React from "react";

import "./App.css";
import DashboardView from "views/Dashboard/DashboardView.container";
import { Provider } from "react-redux";
import { store } from "store/store";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
interface State {
  userName: string;
  isLoginSuccess: boolean;
}
class App extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
    this.state = {
      userName: "User",
      isLoginSuccess: true
    };
  }
  public render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={THEME}>
          <Provider store={store}>
            <DashboardView />
          </Provider>
        </MuiThemeProvider>
      </div>
    );
  }
}
const THEME = createMuiTheme({
  typography: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    fontSize: 20,
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600
  }
});
export default App;
