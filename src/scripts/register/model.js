const handleCookie = function (id) {
  const expirationDate = new Date();
  expirationDate.setTime(expirationDate.getTime() + 7 * 24 * 60 * 60 * 1000);

  document.cookie = `id="${id}";expires='${expirationDate.toUTCString()}'`;
};

export const registerUser = async function (
  firstName,
  lastName,
  email,
  password
) {
  const res = await fetch("https://630fc2a936e6a2a04ee13188.mockapi.io/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstName: firstName,
      lastName,
      lastName,
      email: email,
      password: password,
      cardNum: Date.now(),
      balance: 0,
      trusted: false,
      movements: [],
    }),
  });

  const data = await res.json();
  handleCookie(data.id);
  window.location.href = "mainPage.html";
};
