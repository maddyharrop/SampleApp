# Router notes

## Configuration of our Routes

- $ = boot page
- * = page not found
- ! = error page

```js
{
  path: '$',
  component: Boot
},
{
  path: '*',
  component: PageNotFound,
},
{
  path: '!',
  component: ErrorPage,
}
```

- beforeEachRoute
  - Before the component is displayed, the router will check a few things... whatever you ask it to check, it will check
  - Is the user allowed to access this page? If so, display the page... if not, redirect them to somewhere else...
    - Continue to the component
    - Stop the user navigating completely
      - Is a very hard stop that will close the application
      - Banned users, known issues with the app (display the app store to update the application)
    - Redirect the user
      - known issues with the app (display the app store to update the application)
  ```JavaScript
  // from is given to the method by the Router plugin -> we are coming FROM this page
  beforeEachRoute: (from, to) => {
    if(to === 'lockedContent/videos' && !authenticated) {
      return {
        path: 'account/signIn',
        params: {
          msg: 'You shall not pass',
          pageFrom: from
        }
      }
    }
  }
  // would you want the user to be redirected to the signup or signin page?
  ```
- afterEachRoute
  - Has the router been successful?
  - Do we authenticate here? Not at this point
  ```js
  afterEachRoute: request => {
    // metrics plugin... but it is very limited
    // updateCounter for a video being loaded, page being loaded...
    updateAnalytics("loaded", request.hash); // hash of the page being loaded
  };
  ```
- root
  - Our path for the entry point to our Application (it is overridden by the $ -> if the $ is present, it will go there first)
  - The root must either be a string or a function
  ```js
  // example 1
  import { Home } from "./pages";
  // in this example, home is ignored at first by the $ being present... if we removed $, then home would launch
  export default {
    root: "home",
    routes: [
      {
        path: "$",
        component: Boot
      },
      {
        path: "home",
        component: Home
      }
    ]
  }
  ```
  ```js
  export default {
    root: () => {
      return new Promise((resolve) => {
        if(loggedIn) {
          resolve('account')
        }
        else {
          resolve('login')
        }
      }
    }
  }
  ```
- boot
  ```js
  export default() {
    boot: () => {
      return new Promise(resolve => {
        Auth.getLoginToken().then() => {
          resolve()
        }
      })
    }
  }
  ```

## Methods available

- Router.startRouter()
  ```JavaScript
  _setup() {
      Router.startRouter(routes, this)
    }
  ```
- Router.navigate()
  - Navigate will direct the user to a page specified by the code
- Router.isNavigating...
  - Returns either true or false -> is the router navigating to a page
- Router.back()
  - Default navigation that allows the user to go backwards using the back key (backspace)
  - Won't allow the user to go back to the Boot page
  - We don't need to specify Router.back() -> it knows what to do by default
- Router.go()
  - Override the Router.back() -> specify where in the router history, you would like to go back to
  ```JavaScript
  Router.go(-3) // this will take us back three pages in the history, IF available... if not, it will go back one
  ```
- Router.reload()
  - Refreshes the page / current has that is on the page
- Router.resume()
- Router.redirect()
- Router.root()
  - Forces the application to go to the root component... USE WISELY
- Not an exhaustive list...

- https://lightningjs.io/docs/#/lightning-sdk-reference/plugins/router/navigation
