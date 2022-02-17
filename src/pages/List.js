import { Lightning, Router, Utils, Colors } from '@lightningjs/sdk'
import { Button, Row, List } from '@lightningjs/ui-components'
//import of movie data
import { fetchMovieData1, fetchMovieData2, fetchMovieData3, fetchMovieData4, fetchMovieData5, fetchMovieData6, fetchMovieData7, fetchMovieData8, fetchMovieData9, fetchMovieData10 } from '../lib/API'

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
        MyFlexBox: {
          w: 1920,
          h: 1080,
          flex: { direction: 'row', wrap: true },
          rect: true, color: Colors('mustard').get(), paddingLeft: 200,
          Item1: {
            w: 300, h: 350,
            flexItem: { margin: 10, alignSelf: 'stretch', grow: 1, maxWidth: 300, maxHeight: 350 },
            rect: true,
            src: Utils.asset('images/logo.png')
          },
          Item2: {
            w: 300, h: 350,
            flexItem: { margin: 10, alignSelf: 'stretch', grow: 1, maxWidth: 300, maxHeight: 350 },
            rect: true,
            src: Utils.asset('images/logo.png')
          },
          Item3: {
            w: 300, h: 350,
            flexItem: { margin: 10, alignSelf: 'stretch', grow: 1, maxWidth: 300, maxHeight: 350 },
            rect: true,
            src: Utils.asset('images/logo.png')
          },
          Item4: {
            w: 300, h: 350,
            flexItem: { margin: 10, alignSelf: 'stretch', grow: 1, maxWidth: 300, maxHeight: 350 },
            rect: true,
            src: Utils.asset('images/logo.png')
          },
          Item5: {
            w: 300, h: 350,
            flexItem: { margin: 10, alignSelf: 'stretch', grow: 1, maxWidth: 300, maxHeight: 350 },
            rect: true,
            src: Utils.asset('images/logo.png')
          },
          Item6: {
            w: 300, h: 350,
            flexItem: { margin: 10, alignSelf: 'stretch', grow: 1, maxWidth: 300, maxHeight: 350 },
            rect: true,
            src: Utils.asset('images/logo.png')
          },
          Item7: {
            w: 300, h: 350,
            flexItem: { margin: 10, alignSelf: 'stretch', grow: 1, maxWidth: 300, maxHeight: 350 },
            rect: true,
            src: Utils.asset('images/logo.png')
          },
          Item8: {
            w: 300, h: 350,
            flexItem: { margin: 10, alignSelf: 'stretch', grow: 1, maxWidth: 300, maxHeight: 350 },
            rect: true,
            src: Utils.asset('images/logo.png')
          },
          Item9: {
            w: 300, h: 350,
            flexItem: { margin: 10, alignSelf: 'stretch', grow: 1, maxWidth: 300, maxHeight: 350 },
            rect: true,
            src: Utils.asset('images/logo.png')
          },
          Item10: {
            w: 300, h: 350,
            flexItem: { margin: 10, alignSelf: 'stretch', grow: 1, maxWidth: 300, maxHeight: 335000 },
            rect: true,
            src: Utils.asset('images/logo.png')
          },
        }
      }
      // Row: {
      //   type: Row,
      //   w: 1920 - 160,
      //   scrollIndex: 1,
      //   direction: 'row',
      //   items: [          
      //     {
      //       type: Button,
      //       text: {
      //         text: 'One'
      //       }
      //     },
      //     {
      //       type: Button,
      //       buttonText: 'Two',
      //       x: 200
      //     },
      //     {
      //       type: Button,
      //       text: {
      //         text: 'Three'
      //       },
      //       x: 400
      //     },
      //     {
      //       type: Row,
      //       text: {
      //         text: 'Four'
      //       }
      //     },
      //     {
      //       type: Row,
      //       text: {
      //         text: 'Five'
      //       }
      //     },
      //     {
      //       type: Row,
      //       text: {
      //         text: 'Six'
      //       }
      //     },
      //     {
      //       type: Row,
      //       text: {
      //         text: 'Seven'
      //       }
      //     },
      //     {
      //       type: Row,
      //       text: {
      //         text: 'Eight'
      //       }
      //     },
      //     {
      //       type: Row,
      //       text: {
      //         text: 'Nine'
      //       }
      //     },
      //     {
      //       type: Row,
      //       text: {
      //         text: 'Ten'
      //       }
      //     },
      //   ]
      // },
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
    let movie1 = await fetchMovieData1()
    let movie2 = await fetchMovieData2()
    let movie3 = await fetchMovieData3()
    let movie4 = await fetchMovieData4()
    let movie5 = await fetchMovieData5()
    let movie6 = await fetchMovieData6()
    let movie7 = await fetchMovieData7()
    let movie8 = await fetchMovieData8()
    let movie9 = await fetchMovieData9()
    let movie10 = await fetchMovieData10()


    this.tag('Blur').patch({
      MyFlexBox: {
        Item1: {
          text: {
            text: `${movie1.Title}
            IMDB Rating: ${movie1.imdbRating}`,
            wordWrap: true,
            wordWrapWidth: 500,
            lineHeight: 30,
          },
          src: `${movie1.Poster}`,
        },
        Item2: {
          text: {
            text: `${movie2.Title}
            IMDB Rating: ${movie2.imdbRating}`,
            wordWrap: true,
            wordWrapWidth: 500,
            lineHeight: 30,
          },
          src: `${movie2.Poster}`,
        },
        Item3: {
          text: {
            text: `${movie3.Title}
            IMDB Rating: ${movie3.imdbRating}`,
            wordWrap: true,
            wordWrapWidth: 500,
            lineHeight: 30,
          },
          src: `${movie3.Poster}`,
        },
        Item4: {
          text: {
            text: `${movie4.Title}
            IMDB Rating: ${movie4.imdbRating}`,
            wordWrap: true,
            wordWrapWidth: 500,
            lineHeight: 30,
          },
          src: `${movie4.Poster}`,
        },
        Item5: {
          text: {
            text: `${movie5.Title}
            IMDB Rating: ${movie5.imdbRating}`,
            wordWrap: true,
            wordWrapWidth: 500,
            lineHeight: 30,
          },
          src: `${movie5.Poster}`,
        },
        Item6: {
          text: {
            text: `${movie6.Title}
            IMDB Rating: ${movie6.imdbRating}`,
            wordWrap: true,
            wordWrapWidth: 500,
            lineHeight: 30,
          },
          src: `${movie6.Poster}`,
        },
        Item7: {
          text: {
            text: `${movie7.Title}
            IMDB Rating: ${movie7.imdbRating}`,
            wordWrap: true,
            wordWrapWidth: 500,
            lineHeight: 30,
          },
          src: `${movie7.Poster}`,
        },
        Item8: {
          text: {
            text: `${movie8.Title}
            IMDB Rating: ${movie8.imdbRating}`,
            wordWrap: true,
            wordWrapWidth: 500,
            lineHeight: 30,
          },
          src: `${movie8.Poster}`,
        },
        Item9: {
          text: {
            text: `${movie9.Title}
            IMDB Rating: ${movie9.imdbRating}`,
            wordWrap: true,
            wordWrapWidth: 500,
            lineHeight: 30,
          },
          src: `${movie9.Poster}`,
        },
        Item10: {
          text: {
            text: `${movie10.Title}
            IMDB Rating: ${movie10.imdbRating}`,
            wordWrap: true,
            wordWrapWidth: 500,
            lineHeight: 30,
          },
          src: `${movie10.Poster}`,
        },
      }
    })
  }
}
