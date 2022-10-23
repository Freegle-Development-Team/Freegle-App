import axios from "axios";

const API_KEY = "";

async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const respone = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  console.log(respone.data);
  const token = respone.data.idToken;
  return token;
}

export function createUser(email, password) {
  return authenticate("signUp", email, password);
}

export function login(email, password) {
  return authenticate("signInWithPassword", email, password);
}
