class RequestView {
  #parentElement = document.querySelector(
    ".section__interface__right-panel__request-panel form"
  );

  handleRequest(data, handler) {
    this.#parentElement.addEventListener(
      "submit",
      async function (e) {
        try {
          e.preventDefault();
          const requestValue =
            +this.#parentElement.querySelector("input").value;
          if (
            data.balance === 0 &&
            requestValue <= 5 &&
            requestValue !== 0 &&
            requestValue > 0
          ) {
            return handler(requestValue);
          }

          if (requestValue === 0) return;
          if (requestValue < 0)
            throw new Error("Value should be greater than 0");
          if (requestValue > Math.ceil(data.balance / 1.4))
            throw new Error("You have exceeded the allowed request limit");
          await handler(requestValue);
        } catch (err) {
          alert(err);
        }
      }.bind(this)
    );
  }
}

export default new RequestView();
