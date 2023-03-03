class WelcomeView {
  #userData;
  #parentElement = document.querySelector(
    ".section__interface__right-panel__welcome-panel"
  );

  renderWelcome(userData) {
    this.#userData = userData;
    this.#parentElement.querySelector(".username").textContent =
      this.#userData.firstName;
  }

  renderBalance() {
    const markup = `
    <span class="green-txt">$</span>${this.#userData.balance.toFixed(2, 0)}
    `;
    this.#parentElement
      .querySelector(".balanceValue")
      .insertAdjacentHTML("afterbegin", markup);
  }
}

export default new WelcomeView();
