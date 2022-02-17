import { Lightning, Router, Utils, Colors } from '@lightningjs/sdk'

export default class Boot extends Lightning.Component {
  static _template() {
    return {
      rect: true,
      w: 1920,
      h: 1080,
      color: Colors('magenta').get(),
      Header: {
        mount: 0.5,
        x: 950,
        y: 540,
        text: {
          text: 'Our Boot Page',
          fontFace: 'Regular',
          fontSize: 128,
          textAlign: 'center',
          textColor: Colors('secondary').get(),
        },
      },
      Navigation: {
        Enter: {
          mountX: 0.5,
          x: 960,
          y: 980,
          text: {
            text: '[ Press Enter to go Home ]',
            fontFace: 'Regular',
            textAlign: 'center',
          },
        },
      },
    }
  }

  _init() {
    console.log(Colors('background'))
  }

  // left, right, up, down, Enter, Back, Exit

  _handleEnter() {
    Router.navigate('home')
    //? the string inside of the method navigates to the path, not the component... home not Home
    // https://lightningjs.io/docs/#/lightning-sdk-reference/plugins/router/navigation
  }
}
