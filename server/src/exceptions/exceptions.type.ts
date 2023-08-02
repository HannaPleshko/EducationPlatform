export const ExceptionType = {
  DB_INITIALIZE_NOT_CONNECTED: { id: 1, message: 'DB not connected.' },
  DB_INITIALIZE_TABLES__NOT_INITIALIZED: { id: 2, message: 'DB not initialized.' },
  DB_ROLE_TABLE_NOT_INITIALIZED: { id: 3, message: 'DB Role table not initialized.' },
  DB_TABLES_NOT_DELETED: { id: 4, message: 'DB tables not deleted.' },

  DB_USER_GET_BY_EMAIL_ALREADY_EXIST: { id: 5, message: 'DB user already exist.' },
  DB_USER_INVALID_PWD: { id: 6, message: 'DB user pwd invalid.' },
  DB_USER_GET_BY_EMAIL_NOT_FOUND: { id: 7, message: 'DB user with this email does not exists.' },

  DB_USERS_CREATE_NOT_CREATED: { id: 8, message: 'DB not created user.' },
  DB_USERS_GET_ALL_NOT_GOT: { id: 9, message: 'DB not got users.' },
  DB_USERS_GET_BY_ID_NOT_GOT: { id: 10, message: 'DB not got user.' },
  DB_USER_GET_BY_EMAIL_NOT_GOT: { id: 11, message: 'DB not got user by email.' },
  DB_USERS_DELETE_NOT_DELETED: { id: 12, message: 'DB not deleted user.' },
  DB_USERS_UPDATE_NOT_UPDETED: { id: 13, message: 'DB not updated user.' },
  DB_USERS_NOT_FOUND: { id: 14, message: 'DB not found user.' },


  DB_COURSE_CREATE_NOT_CREATED: { id: 15, message: 'DB not created course.' },
  DB_COURSE_GET_ALL_NOT_GOT: { id: 16, message: 'DB not got courses.' },
  DB_COURSE_GET_BY_ID_NOT_GOT: { id: 17, message: 'DB not got course.' },
  DB_COURSE_DELETE_NOT_DELETED: { id: 18, message: 'DB not deleted course.' },
  DB_COURSE_UPDATE_NOT_UPDETED: { id: 19, message: 'DB not updated course.' },
  DB_COURSE_NOT_FOUND: { id: 20, message: 'DB not found course.' },
};

export const SuccessfullyType = {
  DB_USER_SUCCESS_AUTHENTICATE: { id: 1, message: 'DB successfully user authenticate.' },
  DB_USER_SUCCESS_REGISTRATE: { id: 2, message: 'DB successfully user  registrate user.' },
  DB_USER_SUCCESS_UPDATE_CREDENTIALS: { id: 3, message: 'DB successfully update user credentials.' },
  DB_USER_SUCCESS_DELETE_USER: { id: 4, message: 'DB successfully delete user.' },
};
