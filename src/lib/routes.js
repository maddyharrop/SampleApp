import { Boot, Home, User, Video, List, Grid } from '../pages'

export default {
  root: 'home',
  routes: [
    {
      path: '$',
      component: Boot,
    },
    {
      path: 'home',
      component: Home,
      widgets: ['Menu'],
    },
    {
      path: 'user',
      component: User,
      widgets: ['Menu'],
    },
    {
      path: 'video',
      component: Video,
      widgets: ['Menu'],
    },
    {
      path: 'list',
      component: List,
      widgets: ['Menu'],
    },
    {
      path: 'grid',
      component: Grid,
      widgets: ['Menu'],
    },
  ],
}

//? Routes can handle widgets as well... tomorrow, we will use the Menu and Notification widgets
//? Three default widgets available to Lightning: Menu, Notification & Status Bar

// {
//   path: '*',
//   component: PageNotFound,
// },
// {
//   path: '!',
//   component: ErrorPage,
// }
