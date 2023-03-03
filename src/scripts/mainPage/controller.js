import { currUserId, getUserData } from "./model.js";
import welcomeView from "./welcomeView.js";
import userDataView from "./userDataView.js";
let currUser;
const checkForCookie = function () {
  if (currUserId === "") window.location.href = "index.html";
};

const init = async function () {
  checkForCookie();
  currUser = await getUserData(currUserId);
  welcomeView.renderWelcome(currUser);
  welcomeView.renderBalance();
  userDataView.renderUserData(currUser);
};

init();
