/* import { Profile } from '../pages/profile';
import { Authorization } from '../pages/authorization';
import { Home } from '../pages/home';
import { Chats } from '../pages/chats';
import { EditInfo } from '../pages/editInfo';
import { EditPassword } from '../pages/editPassword';
import { Page500 } from '../pages/page500';
import { Page404 } from '../pages/page404';
import { Registration } from '../pages/registration';

const ROUTES = {
  home: Home,
  profile: Profile,
  authorization: Authorization,
  chats: Chats,
  editInfo: EditInfo,
  editPassword: EditPassword,
  page500: Page500,
  page404: Page404,
  registration: Registration,
};

export function renderDOM(route: keyof typeof ROUTES) {
  const root = document.querySelector('#app')!;
  root.innerHTML = '';
  const PageComponent = ROUTES[route];
  const page = new PageComponent();
  root.append(page.getContent()!);
  page.dispatchComponentDidMount();
}
 */
