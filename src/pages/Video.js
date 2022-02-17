import { Lightning, Router, Utils, Colors } from '@lightningjs/sdk'

//import of movie data
import { fetchMovieData1 } from '../lib/API'

export default class Video extends Lightning.Component {
  static _template() {
    return {
      rect: true,
      w: 1920,
      h: 1080,
      color: Colors('mustard').get(),
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
        content: {
          w: 1920,
          h: 1080,
          Label: {
            mount: 0.5,
            x: 960,
            y: 100,
            text: {
              text: 'Sample text',
              fontFace: 'Regular',
              fontSize: 128,
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

  _handleLeft() {
    Router.focusWidget('Menu')
  }

  async _handleEnter() {
    let movie = await fetchMovieData1()
    console.table(movie)

    this.tag('Blur').patch({
      content: {
        Label: {
          text: {
            text: `${movie.Title}`,
            wordWrap: true,
            wordWrapWidth: 1000,
            lineHeight: 50,
          },
        },
        Rating: {
          mountX: 0.5,
          x: 960,
          y: 200,
          text: {
            text: `IMDB Rating: ${movie.imdbRating}`,
            fontSize: 80,
            wordWrap: true,
            wordWrapWidth: 1000,
            lineHeight: 50,
          },
        },
        Image: {
          mountX: 0.5,
          x: 960,
          y: 600,
          src: `${movie.Poster}`,
        },
      },
    })
  }
}
