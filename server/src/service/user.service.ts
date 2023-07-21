import {
  getUserDB,
  getUserByIdDB,
  createUserDB,
  updateUserDB,
  deleteUserDB,
} from "../repository/user.repository";

async function getUser() {
  return await getUserDB();
}

async function getUserById(id) {
  return await getUserByIdDB(id);
}

async function createUser(name, surname, email, pwd, role) {
  return await createUserDB(name, surname, email, pwd, role);
}
async function updateUser(id, name, surname, email, pwd, role) {
  return await updateUserDB(id, name, surname, email, pwd, role);
}
async function deleteUser(id) {
  return await deleteUserDB(id);
}

export { getUser, getUserById, createUser, updateUser, deleteUser };
