class userViewData {
  #parentElement = document.querySelector(
    ".section__interface__right-panel__user-panel"
  );
  #data;
  renderUserData(data) {
    this.#data = data;
    this.#parentElement.querySelector(".username").textContent =
      this.#data.firstName;

    this.#parentElement.querySelector(".cardNum").textContent =
      this.#data.cardNum;

    this.#parentElement.querySelector(".lastName").textContent =
      this.#data.lastName;
  }
}

export default new userViewData();
