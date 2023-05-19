import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./Redux/Store/store";
import App from "./App";
import 'semantic-ui-css/semantic.min.css'
import "./index.css";
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
