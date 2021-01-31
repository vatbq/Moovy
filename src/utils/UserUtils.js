export const isUserSavedLocalStorage = (email) => (localStorage.getItem(email) !== null);

export const getUserLocalStorage = (email) => {
  let user = JSON.parse(localStorage.getItem(email));
  return {
    username: user.username,
    email: user.email,
    sessionId: user.sessionId,
    accountId: user.accountId
  }
};

export const setUserLocalStorage = ({ email, name }) => {
  const userData = { email, username: name };
  localStorage.setItem(email, JSON.stringify(userData));
};

export const updateUserLocalStorage = (email, username) => {
  const userData = getUserLocalStorage(email);
  const newUserData = { ...userData, username };
  localStorage.setItem(email, JSON.stringify(newUserData));
};

export const setSessionDataLocalStorage = (email, sessionId, accountId) => {
  const userData = { ...getUserLocalStorage(email), sessionId, accountId };
  localStorage.setItem(email, JSON.stringify(userData));
};