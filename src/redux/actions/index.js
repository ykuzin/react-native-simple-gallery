export const SET_IMAGES = 'gallery/SET_IMAGES'
export const FETCHING = 'gallery/FETCHING'
export const NEXT_PAGE = 'gallery/NEXT_PAGE'
export const ADD_IMAGES = 'gallery/ADD_IMAGES'
export const SET_MODAL_URI = 'gallery/SET_MODAL_URI'

export const setImages = (images) => ({
  type: SET_IMAGES,
  payload: { images }
})

export const addImagess = (images) => ({
  type: ADD_IMAGES,
  payload: { images }
})

export const setModalUri = (uri) => ({
  type: SET_MODAL_URI,
  payload: { uri }
})

export const fetching = (isFetching) => ({
  type: FETCHING,
  payload: { isFetching }
})

export const nextPage = () => ({
  type: NEXT_PAGE
})
