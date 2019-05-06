const initialState = {
  user_id: null,
  email: "",
  firstname: "",
  lastname: "",
  authenticated: false
}

const UPDATE_USER_ID = "UPDATE_USER_ID"
const UPDATE_USER_EMAIL = "UPDATE_USER_EMAIL"
const UPDATE_USER_INFO = "UPDATE_USER_INFO"

export function updateUserId(id) {
  return {
    type: UPDATE_USER_ID,
    payload: id
  }
}

export function updateUserEmail(email) {
  return {
    type: UPDATE_USER_EMAIL,
    payload: email
  }
}

export function updateUserInfo(obj) {
  return {
    type: UPDATE_USER_INFO,
    payload: obj
  }
}


export default function authReducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case UPDATE_USER_ID:
      return { ...state, user_id: payload }
    case UPDATE_USER_EMAIL:
      return { ...state, email: payload }
    case UPDATE_USER_INFO:
      const { firstname, lastname } = payload
      return { ...state, firstname, lastname }
    default:
      return state
  }
}