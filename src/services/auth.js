import useFetch from "./../hooks/useFetch";

export async function PostUserData({ userName, password }) {
  //reg-getinfo
  const apiCall = await useFetch().post("Login", {
    userName: userName,
    password: password,
  });
  return apiCall;
}

export async function PostUserDataSignUp({ userName, nationalCode, email }) {
  //reg-getinfo
  const apiCall = await useFetch().post("SignUp", {
    userName: userName,
    email: email,
    nationalCode: nationalCode,
  });
  return apiCall;
}
