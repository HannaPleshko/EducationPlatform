import { getUserDB, getUserByIdDB, updateUserDB, deleteUserDB } from '../repository/user.repository';

async function getUser() {
  return await getUserDB();
}

async function getUserById(id) {
  return await getUserByIdDB(id);
}

async function updateUser(id, name, surname, email, pwd, role) {
  return await updateUserDB(id, name, surname, email, pwd, role);
}

async function deleteUser(id) {
  return await deleteUserDB(id);
}

export { getUser, getUserById, updateUser, deleteUser };
