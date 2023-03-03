class TransView {
  #parentElement = document.querySelector(
    ".section__interface__right-panel__transactions-panel .transactions__wrapper"
  );

  renderTransactions(data) {
    console.log(data);

    const markup = data.movements
      .map((mov, i) => {
        return ` <div class="transaction__element">
      <span class="transaction__element__date">${data.movDates[i]}</span>
      <div class="transaction__element__type-wrapper">
        <div class="status ${mov > 0 ? "positive" : "negative"}"></div>
        <span class="transaction__element__type">${
          mov > 0 ? "Deposit" : "Withdraw"
        }</span>
      </div>
      <span class="transaction__element__amount"><span class="${
        mov > 0 ? "green-txt" : "red-txt"
      }">$${mov}</span></span>
    </div>`;
      })
      .join("");

    this.#parentElement.insertAdjacentHTML("afterbegin", markup);

    /*
    const markup = `${data.map((mov,i) => {
      `   <div class="transaction__element">
        <span class="transaction__element__date">${}</span>
        <div class="transaction__element__type-wrapper">
          <div class="status"></div>
          <span class="transaction__element__type">Withdraw</span>
        </div>
        <span class="transaction__element__amount">$200</span>
      </div>`;
    })}`;
    */
  }
}

export default new TransView();
