export const searchForUser = async function (userData) {
  try {
    const res = await fetch(
      `https://630fc2a936e6a2a04ee13188.mockapi.io/users`
    );
    const data = await res.json();

    const passUser = data.find(
      (acc) =>
        acc.email === userData.email && acc.password === userData.password
    );
    if (!passUser) throw new Error("Invalid Email/Password");

    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + 7 * 24 * 60 * 60 * 1000);
    document.cookie = `id="${
      passUser.id
    }";expires='${expirationDate.toUTCString()}'`;
    window.location.href = "mainPage.html";
  } catch (err) {
    alert(err);
  }
};
