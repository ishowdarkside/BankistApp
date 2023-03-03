import { currUserId, getUserData, requestMoneyFunc } from "./model.js";
import welcomeView from "./welcomeView.js";
import userDataView from "./userDataView.js";
import SendView from "./sendView.js";
import { sendMoneyFunc } from "./model.js";
import limitView from "./limitView.js";
import requestView from "./requestView.js";

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
  SendView.handleSend(currUser, sendMoneyFunc);
  limitView.renderLimits(currUser);
  requestView.handleRequest(currUser, requestMoneyFunc);
};

init();
