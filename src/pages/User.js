import { Lightning, Router, Utils } from '@lightningjs/sdk'

export default class User extends Lightning.Component {
  static _template() {
    return {
      rect: true,
      w: 1920,
      h: 1080,
      color: 0xff600a56,

      Blur: {
        rtt: true,
        w: 1920,
        h: 1080,
        type: Lightning.components.FastBlurComponent,
        amount: 0,
        transitions: {
          amount: { duration: 0.3 },
          scale: { duration: 0.3 },
        },
        Header: {
          mount: 0.5,
          x: 950,
          y: 540,
          text: {
            text: 'Your User Page',
            fontFace: 'Regular',
            fontSize: 128,
            textAlign: 'center',
          },
        },
        Navigation: {
          Arrows: {
            Left: {
              flex: {},
              mountY: 0.5,
              y: 540,
              Label: {
                mountY: 0.5,
                y: 24,
                text: {
                  text: 'Update Note',
                  fontFace: 'Regular',
                  textAlign: 'right',
                },
              },
              Arrow: {
                flexItem: { marginRight: 20, marginLeft: 50 },
                rotation: Math.PI * 1.5,
                src: Utils.asset('images/arrow.png'),
              },
            },
          },
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
      },
    }
  }

  _init() {
    this.application.on('blurContent', ({ amount, scale }) => {
      this.tag('Blur').setSmooth('amount', amount)
      this.tag('Blur').setSmooth('scale', scale, {
        duration: 0.3,
        timingFunction: 'cubic-bezier(0.17, 0.9, 0.32, 1.3)',
      })
    })
  }

  _handleRight() {
    this.tag('Header').patch({
      text: {
        text: 'My User Page',
        fontSize: 150,
        textAlign: 'center',
      },
    })
    console.log('right key pressed')
  }

  _handleLeft() {
    Router.focusWidget('Menu')
  }

  _handleEnter() {
    Router.navigate('home')
    console.log('The Home page Enter has been pressed')
  }

  pageTransition() {
    return 'left'
  }
}
