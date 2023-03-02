class LoginView {
  #parentElement = document.querySelector(".section__login form");

  handleLogin(handler) {
    this.#parentElement.addEventListener("submit", function (e) {
      e.preventDefault();
      const data = [...new FormData(this)];
      const searchDataObj = Object.fromEntries(data);
      handler(searchDataObj);
    });
  }
}

export default new LoginView();
