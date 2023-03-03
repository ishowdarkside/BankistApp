class SendView {
  #parentElement = document.querySelector(
    ".section__interface__right-panel__send-panel form"
  );

  handleSend(userData, handler) {
    this.#parentElement.addEventListener("submit", function (e) {
      try {
        e.preventDefault();
        const data = Object.fromEntries([...new FormData(this)]);
        if (data.accepter === "" || data.value === "") return;
        data.value = +data.value;
        data.accepter =
          data.accepter[0].toUpperCase() + data.accepter.slice(1).toLowerCase();
        if (data.value > userData.balance / 1.6)
          throw new Error("you have exceeded the allowed limit");
        if (data.value < 0)
          throw new Error("Amount should be positive Number!");
        if (data.accepter === userData.firstName)
          throw new Error("You can't send money to yourself!");
        handler(data);
      } catch (err) {
        alert(err);
      }
    });
  }
}

export default new SendView();
