import loginView from "./loginView";
import { searchForUser } from "./loginModel";

const checkForCookie = function () {
  const cookie = document.cookie;
  if (document.cookie !== "") window.location.href = "mainPage.html";
};

checkForCookie();
const init = function () {
  loginView.handleLogin(searchForUser);
};

init();
