class LogoutView {
  handleLogout() {
    document
      .querySelector("#btnLogout")
      .addEventListener("click", function (e) {
        const expirationDate = new Date(0);
        document.cookie = `id="";expires="${expirationDate.toUTCString()}"`;
        location.reload();
      });
  }
}

export default new LogoutView();
