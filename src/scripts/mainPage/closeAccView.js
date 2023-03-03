class closeAccView {
  #element = document.querySelector(".section__interface__left-panel ul");

  handleOverlay(handler) {
    this.#element.addEventListener(
      "click",
      function (e) {
        const closeBtn = e.target.closest("#btnCloseAccount");
        if (!closeBtn) return;
        const markup = `
      <div class="overlay">
      <button id="closeOverlay">X</button>
      <form id="closeAccountForm">
        <h2>Provide your account Informations,before closing account</h2>
        <input
          type="text"
          id="closeEmail"
          name="closeEmail"
          placeholder="Confirm Email"
        />
        <input
          type="text"
          id="closePassword"
          name="closePass"
          placeholder="Confirm Password"
        />
        <button id="closeAccBtn">Close Account</button>
      </form>
    </div>`;

        document.querySelector("body").insertAdjacentHTML("beforeend", markup);
        this.handleClosingOverlay();
        this.handleClosingAccount(handler);
      }.bind(this)
    );
  }

  handleClosingOverlay() {
    document
      .querySelector("#closeOverlay")
      .addEventListener("click", function (e) {
        document.querySelector(".overlay").remove();
      });
  }

  handleClosingAccount(handler) {
    const form = document.querySelector("#closeAccountForm");
    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      const formInputs = Object.fromEntries([...new FormData(this)]);
      if (formInputs.closeEmail === "" || formInputs.closePass === "") return;

      await handler(formInputs);
    });
  }
}

export default new closeAccView();
