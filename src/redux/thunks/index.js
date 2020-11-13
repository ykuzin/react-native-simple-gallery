import { loadImages } from '../../scripts/fetch'
import { addImagess, fetching, nextPage, setImages, setModalUri } from '../actions'

export const getImages = (page) => async (dispatch) => {
  dispatch(fetching(true))

  let result = await loadImages(page)
  if (!result) {
    let interval = setInterval(async () => {
      result = await loadImages(page)
      if (result) {
        dispatch(setImages(result))
        dispatch(fetching(false))
        dispatch(nextPage())

        clearInterval(interval)
      }
    }, 3000)
  } else {
    dispatch(setImages(result))
    dispatch(fetching(false))
    dispatch(nextPage())

  }

}

export const addImages = (page) => async (dispatch) => {
  let result = await loadImages(page)

  dispatch(addImagess(result))
  dispatch(nextPage())

}

export const setModal = (uri) => (dispatch) => {
  dispatch(setModalUri(uri))
}
