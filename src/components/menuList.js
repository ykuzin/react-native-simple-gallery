import { Text, View } from 'react-native'
import React from 'react'

import { connect } from 'react-redux'

import Gallery from './menuItem'
import { addImages, getImages, setModal } from '../redux/thunks'
import { nextPage } from '../redux/actions'

class MenuList extends React.Component {
  constructor (props) {
    super(props)

  }

  componentDidMount () {
    this.props.getImages(this.props.page)
  }

  render () {

    if (this.props.isFetching) return (<View><Text>Data is loading....</Text></View>)

    if (this.props.error) return (<View><Text>{error.message}</Text></View>)

    return (
      <Gallery
        images={this.props.images} {...this.props}     />

    )
  }

}

let mapStateToProps = (state) => ({
  images: state.gallery.images,
  isFetching: state.gallery.isFetching,
  page: state.gallery.page,
  error: state.gallery.error,
  modalUri: state.gallery.modalUri
})

export default connect(mapStateToProps, {
  getImages,
  nextPage,
  addImages,
  setModal
})(
  MenuList
)
