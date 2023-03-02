import sliderView from "./sliderView.js";
import registerView from "./registerView.js";
import { registerUser } from "./model.js";

const checkForCookie = function () {
  const cookie = document.cookie;
  if (document.cookie !== "") window.location.href = "mainPage.html";
};

checkForCookie();

const init = function () {
  registerView.handleValidation();
  registerView.handleLoginFunctionality(registerUser);
};

init();
