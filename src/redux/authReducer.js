const initialState = {
  user_id: null,
  email: "",
  firstname: "",
  lastname: "",
  authenticated: false
}

const UPDATE_USER_ID = "UPDATE_USER_ID"
const UPDATE_USER_EMAIL = "UPDATE_USER_EMAIL"
const UPDATE_USER_FIRSTNAME = "UPDATE_USER_FIRSTNAME"
const UPDATE_USER_LASTNAME = "UPDATE_USER_LASTNAME"
const UPDATE_AUTHENTICATED = "UPDATE_AUTHENTICATED"

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

export function updateUserFirstName(firstname) {
  return {
    type: UPDATE_USER_FIRSTNAME,
    payload: firstname
  }
}

export function updateUserLastName(lastname) {
  return {
    type: UPDATE_USER_LASTNAME,
    payload: lastname
  }
}

export function updateAuthenticated(authenticated) {
  return {
    type: UPDATE_AUTHENTICATED,
    payload: authenticated
  }
}

export default function authReducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case UPDATE_USER_ID:
      return { ...state, user_id: payload }
    case UPDATE_USER_EMAIL:
      return { ...state, email: payload }
    case UPDATE_USER_FIRSTNAME:
      return { ...state, firstname: payload }
    case UPDATE_USER_LASTNAME:
      return { ...state, lastname: payload }
    case UPDATE_AUTHENTICATED:
      return { ...state, authenticated: payload }
    default:
      return state
  }
}