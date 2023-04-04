import { Authorization } from './src/pages/authorization';
import { Registration } from './src/pages/registration';
import { Profile } from './src/pages/profile';
import { Chats } from './src/pages/chats';
import { EditInfo } from './src/pages/editInfo';
import { EditPassword } from './src/pages/editPassword';
import { Home } from './src/pages/home';
import { Page404 } from './src/pages/page404';
import { Page500 } from './src/pages/page500';
import Router from './src/utils/router/Router';
import AuthController from './src/controllers/AuthController';

enum Routes {
  Home = '/home',
  Authorization = '/',
  Registration = '/sign-up',
  Profile = '/settings',
  EditInfo = '/editInfo',
  EditPassword = '/editPassword',
  Page404 = '/page404',
  Page500 = '/page500',
  Chats = '/messenger',
}

window.addEventListener('DOMContentLoaded', async () => {
  Router
    .use(Routes.Home, Home)
    .use(Routes.Registration, Registration)
    .use(Routes.Profile, Profile)
    .use(Routes.Authorization, Authorization)
    .use(Routes.EditInfo, EditInfo)
    .use(Routes.EditPassword, EditPassword)
    .use(Routes.Page404, Page404)
    .use(Routes.Page500, Page500)
    .use(Routes.Chats, Chats)

  let isProtectedRoute = true;

  switch (window.location.pathname) {
    case Routes.Home:
    case Routes.Registration:
      isProtectedRoute = false;
      break;
    case Routes.Profile:
    case Routes.Authorization:
    case Routes.EditInfo:
    case Routes.EditPassword:
    case Routes.Page404:
    case Routes.Page500:
    case Routes.Chats:


  }


  try {
    await AuthController.fetchUser();
    Router.start();

    if (!isProtectedRoute) {
      Router.go(Routes.Profile)
    }
  } catch (e) {
    Router.start();

    if (isProtectedRoute) {
      Router.go(Routes.Home);
    }
  }

});

