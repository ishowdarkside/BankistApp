class otherUsersView {
  #parentElement = document.querySelector(
    ".section__interface__right-panel__otherUsers-panel"
  );

  async renderRandomUsers(handler) {
    const randomUsersPanel = this.#parentElement.querySelector(
      ".recentUsers__wrapper"
    );
    const usersData = await handler();
    const markup = usersData
      .map((user) => {
        return `
        <div class="recentUser__element">
                <h2>${user.firstName}</h2>
                <span class="recentUser__balance"
                  >Balance:
                  <span class="recentUser__balance__value"
                    ><span class="green-txt">$</span>${user.balance}</span
                  ></span
                >
              </div>
        `;
      })
      .join("");

    randomUsersPanel.insertAdjacentHTML("afterbegin", markup);
  }

  handleSearchUsers(handler) {
    const form = this.#parentElement.querySelector("form");
    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      let searchData = this.querySelector("input").value;
      searchData =
        searchData[0].toUpperCase() + searchData.slice(1).toLocaleLowerCase();
      const searchResults = await handler(searchData);
      console.log(searchResults);
      const markup = `
                <div class="recentUser__element">
                    <h2>${searchResults.firstName}</h2>
                    <span class="recentUser__balance"
                        >Balance:
                        <span class="recentUser__balance__value"
                        ><span class="green-txt">$</span>${searchResults.balance}</span
                        ></span
                    >
                </div>
      `;
      const panelWrapper = document.querySelector(".recentUsers__wrapper");
      panelWrapper.innerHTML = "";
      panelWrapper.previousElementSibling.textContent = "Search Results:";
      panelWrapper.insertAdjacentHTML("afterbegin", markup);
    });
  }
}

export default new otherUsersView();
