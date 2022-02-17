import { Colors, Lightning, Router } from '@lightningjs/sdk'
import MenuItem from './MenuItem'
export default class Menu extends Lightning.Component {
  static _template() {
    return {
      rect: true,
      w: 500,
      h: 1080,
      color: Colors('credersi-blue').get(),
      x: -500,
      transitions: {
        x: {
          duration: 0.4,
          timingFunction: 'cubic-bezier(0.17, 0.9, 0.32, 1.3)',
        },
        w: {
          duration: 0.4,
          timingFunction: 'cubic-bezier(0.17, 0.9, 0.32, 1.3)',
        },
      },
      Items: {
        y: 540,
        mountY: 0.5,
        flex: { direction: 'column' },
        Home: {
          x: 160,
          type: MenuItem,
          label: 'Home',
          pageId: 'home',
        },
        User: {
          x: 160,
          type: MenuItem,
          label: 'User',
          pageId: 'user',
        },
        Video: {
          x: 160,
          type: MenuItem,
          label: 'Video',
          pageId: 'video',
        },
        List: {
          x: 160,
          type: MenuItem,
          label: 'List',
          pageId: 'list',
        },
        TopTen: {
          x: 160,
          type: MenuItem,
          label: 'Grid',
          pageId: 'grid',
        },
      },
    }
  }

  _init() {
    this._index = 0 // remembers the index value for the menu
  }

  _focus() {
    this.patch({
      smooth: {
        x: -100,
      },
    })

    this.application.emit('blurContent', { amount: 3, scale: 1.2 })
    // blur the content BEHIND the menu
  }

  _unfocus() {
    this.patch({
      smooth: {
        x: -500,
      },
    })

    this.application.emit('blurContent', { amount: 0, scale: 1 })
  }

  //? handle events -> what happens when we press certain keys / controls on the menu not the page

  _handleUp() {
    if (this._index > 0) {
      this._index--
    }
  }

  _handleRight() {
    Router.focusPage()
    // hide the menu as the user moves away
  }

  _handleDown() {
    if (this._index < this.tag('Items').children.length - 1) {
      this._index++
    }
  }

  _handleLeft() {
    // obsolete event
  }

  _handleEnter() {
    // want to focus on the page
    Router.focusPage() // hide the menu
    // Router.restoreFocus() // hide the menu
    // want to navigate to the chosen page

    Router.navigate(this.activeItem.pageId)
    // Router.navigate(this.tag('Items'.children[this._index].pageId))
  }

  get activeItem() {
    return this.tag('Items').children[this._index]
  }

  _getFocused() {
    return this.activeItem
  }
}
