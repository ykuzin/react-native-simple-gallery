import { ADD_IMAGES, FETCHING, NEXT_PAGE, SET_IMAGES, SET_MODAL_URI } from '../actions'

let initialState = {
  images: [],
  page: 1,
  isFetching: false,
  error: null,
  modalUri: null
}

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IMAGES:
      return {
        ...state,
        images: [...action.payload.images]
      }
    case FETCHING:
      return {
        ...state,
        isFetching: action.payload.isFetching
      }
    case NEXT_PAGE:
      return {
        ...state,
        page: state.page + 1
      }
    case ADD_IMAGES:
      return {
        ...state,
        images: [...state.images, ...action.payload.images]
      }
    case SET_MODAL_URI:
      return {
        ...state,
        modalUri: action.payload.uri
      }
    default:
      return state
  }
}

export default Reducer
