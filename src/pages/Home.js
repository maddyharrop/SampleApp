import { Lightning, Router, Utils } from '@lightningjs/sdk'

export default class Home extends Lightning.Component {
  static _template() {
    return {
      rect: true,
      w: 1920,
      h: 1080,
      color: 0xff600a41,
      Header: {
        mount: 0.5,
        x: 950,
        y: 540,
        text: {
          text: 'Your Home Page',
          fontFace: 'Regular',
          fontSize: 128,
          textAlign: 'center',
        },
      },
      Navigation: {
        Enter: {
          mountX: 0.5,
          x: 960,
          y: 980,
          text: {
            text: 'Replace with navigation instructions',
            fontFace: 'Regular',
          },
        },
      },
      Logo: {
        x: 200,
        y: 300,
        src: Utils.asset('images/logo.png'),
      },
    }
  }

  _init() {
    this._myAnimation = this.tag('Logo').animation({
      duration: 5,
      repeat: -1,
      actions: [
        { p: 'scaleX', v: { 0: { v: 1, s: 0.5 }, 0.5: { v: -1, s: 0.5 }, 1: { v: 1, s: 0.5 } } },
        { p: 'x', v: { 0: 50, 0.25: 300, 0.5: 800, 0.75: 150, 1: 50 } },
        { p: 'y', v: { 0: 50, 0.25: 200, 0.5: 400, 0.75: 250, 1: 50 } },
      ],
    })
    console.log(this._myAnimation)
    // this._myAnimation.start()
  }
  // t = string
  // p = property
  // v = object - time-value
  // sm = smooth
  // s = scale

  _handleRight() {
    Router.navigate('video')
  }

  _handleLeft() {
    Router.focusWidget('Menu')
  }

  _handleEnter() {
    Router.navigate('user')
    console.log('The Home page Enter has been pressed')
  }
}

// _construct() {
//   console.log('construct');
// }

// _build() {
//   console.log('build');
// }

// _setup() {
//   console.log('setup');
// }
