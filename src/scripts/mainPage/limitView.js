class LimitView {
  #parentElement = document.querySelector(
    ".section__interface__right-panel__limit-panel"
  );

  renderLimits(data) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const now = new Date();
    const currMonth = months[now.getMonth()];
    const currDay = now.getDate();
    const markup = `
    <h2>Transaction Limit</h2>
    <span class="limitValue transaction-limit"><span class="green-txt">$</span>${(
      data.balance / 1.6
    ).toFixed(2, 0)}</span>
    <h2>Request Limit</h2>
    <span class="limitValue request-limit"><span class="green-txt">$</span>${(
      data.balance / 1.4
    ).toFixed(2, 0)}</span>

    <div class="dateWrap">
    <span id="day">${currDay}</span>
    <span id="month">${currMonth}</span>
  </div>
    `;
    this.#parentElement.insertAdjacentHTML("afterbegin", markup);
  }
}

export default new LimitView();
