import React from 'react'
import { Button, Dimensions, Image, View } from 'react-native'
import { connect } from 'react-redux'

const { height, width } = Dimensions.get('window')

const ImageScreen = (props) => {

  return (
    <View style={{
      flex: 1,
      height,
      width
    }}>
      <Image
        source={props.uri}
        style={{ flex: 0.9 }}
        resizeMode="cover"
      />
      <Button title="Back" style={{ flex: 0.1 }} onPress={() => props.navigation.goBack()}/>
    </View>
  )
}

let mapStateToProps = (state) => ({
  uri: state.gallery.modalUri
})

export default connect(mapStateToProps)(
  ImageScreen
)


