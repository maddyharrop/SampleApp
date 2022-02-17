import { Utils, Router } from '@lightningjs/sdk'

import routes from './lib/routes'
import { Menu } from './widgets'

export default class App extends Router.App {
  static getFonts() {
    return [{ family: 'Regular', url: Utils.asset('fonts/Roboto-Regular.ttf') }]
    // Utils.asset plugin is used to locate local assets only -> looks inside the static path
  }

  static colors() {
    return Utils.asset('colors.json')
    // local file creating a colors file in the static folder
  }

  _setup() {
    Router.startRouter(routes, this)
  }

  static _template() {
    return {
      ...super._template(),
      Widgets: {
        Menu: {
          type: Menu,
        },
      },
    }
  }
}

// TODO: Add Home route to routes.js
// TODO: Import Home into routes.js
// TODO: Add 'home' as a path and component in the routes array

// TODO: Add the export in pages/index.js
// TODO: Add a component inside of Home.js
// TODO: Use Router to navigate to our page via an event handle
