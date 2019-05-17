const initialState = {
  user_id: null,
  email: "",
  firstname: "",
  lastname: "",
  authenticated: false,
  street: "",
  city: "",
  state: "",
  zip: "",
  validAddress: false
}

const UPDATE_USER_ID = "UPDATE_USER_ID"
const UPDATE_USER_EMAIL = "UPDATE_USER_EMAIL"
const UPDATE_USER_FIRSTNAME = "UPDATE_USER_FIRSTNAME"
const UPDATE_USER_LASTNAME = "UPDATE_USER_LASTNAME"
const UPDATE_AUTHENTICATED = "UPDATE_AUTHENTICATED"
const UPDATE_USER_LOGOUT = "UPDATE_USER_LOGOUT"

const UPDATE_STREET = "UPDATE_STREET"
const UPDATE_CITY = "UPDATE_CITY"
const UPDATE_STATE = "UPDATE_STATE"
const UPDATE_ZIP = "UPDATE_ZIP"
const UPDATE_VALID_ADDRESS = "UPDATE_VALID_ADDRESS"

// -----

export function updateStreet(street) {
  return {
    type: UPDATE_STREET,
    payload: street
  }
}

export function updateCity(city) {
  return {
    type: UPDATE_CITY,
    payload: city
  }
}

export function updateState(state) {
  return {
    type: UPDATE_STATE,
    payload: state
  }
}

export function updateZip(zip) {
  return {
    type: UPDATE_ZIP,
    payload: zip
  }
}

export function updateValidAddress(valid) {
  return {
    type: UPDATE_VALID_ADDRESS,
    payload: valid
  }
}

// ----


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

export function userLogOut(logout) {
  return {
    type: UPDATE_USER_LOGOUT
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
    case UPDATE_STREET:
      return { ...state, street: payload }
    case UPDATE_CITY:
      return { ...state, city: payload }
    case UPDATE_STATE:
      return { ...state, state: payload }
    case UPDATE_ZIP:
      return { ...state, zip: payload }
    case UPDATE_VALID_ADDRESS:
      return { ...state, validAddress: payload }
    case UPDATE_USER_LOGOUT:
      return { ...state, user_id: null, email: "", firstname: "", lastname: "", authenticated: false }
    default:
      return state
  }
}