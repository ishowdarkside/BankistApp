class RegisterView {
  #parentElement = document.querySelector(".section__register__reg_panel form");
  #nameRegex = /^[a-zA-Z]+$/;
  #validateSet = new Set();
  #successMessage = `<span class='statusMessage' id="strong">Strong</span>`;
  #failMessage = `<span class="statusMessage" id="weak">Weak</span>`;
  handleValidation() {
    this.#parentElement.addEventListener(
      "input",
      function (e) {
        //Validating for Full Name
        if (
          e.target.getAttribute("id") === "registerFirstName" ||
          e.target.getAttribute("id") === "registerLastName"
        ) {
          this.#validateNames(e.target);
        }

        if (e.target.getAttribute("id") === "registerEmail") {
          this.#validateEmail(e.target);
        }

        if (e.target.getAttribute("id") === "registerPassword") {
          this.#validatePassword(e.target);
        }
      }.bind(this)
    );
  }

  #testName(inputValue) {
    if (this.#nameRegex.test(inputValue)) {
      return true;
    } else return false;
  }

  #removePreviousStatus(parent, selector) {
    parent.querySelectorAll(selector).forEach((e) => e.remove());
  }

  #validateNames(input) {
    const parentEl = input.closest("div");
    if (!this.#testName(input.value)) {
      this.#removePreviousStatus(parentEl, ".statusMessage");
      parentEl.insertAdjacentHTML("afterbegin", this.#failMessage);
      this.#validateSet.delete(input.getAttribute("id"));
    } else {
      this.#validateSet.add(input.getAttribute("id"));
      this.#removePreviousStatus(parentEl, ".statusMessage");
      parentEl.insertAdjacentHTML("afterbegin", this.#successMessage);
    }
  }

  #validateEmail(input) {
    const parentEl = input.closest("div");
    if (!this.#isValidEmail(input.value)) {
      this.#removePreviousStatus(parentEl, ".statusMessage");
      parentEl.insertAdjacentHTML("afterbegin", this.#failMessage);
      this.#validateSet.delete(input.getAttribute("id"));
    } else {
      this.#validateSet.add(input.getAttribute("id"));
      this.#removePreviousStatus(parentEl, ".statusMessage");
      parentEl.insertAdjacentHTML("afterbegin", this.#successMessage);
    }
  }
  #isValidEmail(inputValue) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(inputValue);
  }

  #validatePassword(input) {
    const parentEl = input.closest("div");

    if (input.value.length < 8 || input.value.length > 30) {
      this.#removePreviousStatus(parentEl, ".statusMessage");
      parentEl.insertAdjacentHTML("afterbegin", this.#failMessage);
      this.#validateSet.delete(input.getAttribute("id"));
    } else {
      this.#validateSet.add(input.getAttribute("id"));
      this.#removePreviousStatus(parentEl, ".statusMessage");
      parentEl.insertAdjacentHTML("afterbegin", this.#successMessage);
    }
  }

  handleLoginFunctionality(handler) {
    this.#parentElement.addEventListener(
      "submit",
      function (e) {
        e.preventDefault();
        if (this.#validateSet.size !== 4) return;

        let firstName =
          this.#parentElement.querySelector("#registerFirstName").value;
        firstName =
          firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
        let lastName =
          this.#parentElement.querySelector("#registerLastName").value;
        lastName = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
        const email = this.#parentElement.querySelector("#registerEmail").value;
        const password =
          this.#parentElement.querySelector("#registerPassword").value;

        handler(firstName, lastName, email, password);
      }.bind(this)
    );
  }
}

export default new RegisterView();
