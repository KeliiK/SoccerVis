import { signIn, signOut, getCurrentUser, fetchUserAttributes } from "aws-amplify/auth";

export async function login(username, password) {
  return signIn({ username, password });
}

export async function logout() {
  return signOut();
}

export async function getUser() {
  return getCurrentUser();
}

export async function getUserName() {
    return (await fetchUserAttributes()).given_name;
}
