//Get CurrUser Id
export const currUserId =
  document.cookie !== "" ? +document.cookie?.split("=")[1].slice(1, 2) : "";

//Get user data function and return object

//get current users data
const returnUserData = async function (id) {
  const currUserRes = await fetch(
    `https://630fc2a936e6a2a04ee13188.mockapi.io/users/${id}`
  );
  const currUserData = await currUserRes.json();
  return currUserData;
};

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

export const sendMoneyFunc = async function (sendingData) {
  try {
    const res = await fetch(
      "https://630fc2a936e6a2a04ee13188.mockapi.io/users"
    );
    const data = await res.json();
    const receiver = await data.find(
      (user) => sendingData.accepter === user.firstName
    );
    if (!receiver) throw new Error("User Not Found");
    await updateReceiverBalance(receiver.id, sendingData.value);
    await updateSenderBalance(sendingData.value);
    location.reload();
  } catch (err) {
    alert(err);
  }
};

const updateReceiverBalance = async function (id, value) {
  try {
    //getting receiver's balance to update it with value variable later on

    const userData = await getUserData(id);
    const currBalance = userData.balance;
    const currMovs = userData.movements;
    currMovs.push(value);

    //changing receivers balance
    const res = await fetch(
      `https://630fc2a936e6a2a04ee13188.mockapi.io/users/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          balance: currBalance + value,
          movements: currMovs,
        }),
      }
    );
  } catch (err) {
    console.log(err);
  }
};

const updateSenderBalance = async function (value) {
  const currUserData = await returnUserData(currUserId);
  const currBalance = currUserData.balance;
  const currMovs = currUserData.movements;
  currMovs.push(-value);

  //Changing current Users balance by substracting sending  value with currentValue
  const res = await fetch(
    `https://630fc2a936e6a2a04ee13188.mockapi.io/users/${currUserId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        balance: currBalance - value,
        movements: currMovs,
        trusted: true,
      }),
    }
  );
};

export const requestMoneyFunc = async function (value) {
  try {
    const currUserData = await returnUserData(currUserId);
    const currBalance = currUserData.balance;
    const currMovs = currUserData.movements;
    currMovs.push(value);

    //update balance
    const res = await fetch(
      `https://630fc2a936e6a2a04ee13188.mockapi.io/users/${currUserId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          balance: currBalance + value,
          movements: currMovs,
          trusted: true,
        }),
      }
    );
  } catch (err) {
    console.log(err);
  }
};
