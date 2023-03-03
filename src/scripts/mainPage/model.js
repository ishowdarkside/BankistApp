//Get CurrUser Id
export const currUserId =
  document.cookie !== "" ? +document.cookie?.split("=")[1].slice(1, 2) : "";

//Get user data function and return object
export const getUserData = async function (id) {
  try {
    const res = await fetch(
      `https://630fc2a936e6a2a04ee13188.mockapi.io/users/${id}`
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
