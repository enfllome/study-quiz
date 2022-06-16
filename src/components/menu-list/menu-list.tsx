import { NavMenuItems } from '../../types/menu-items';
import MenuItem from '../menu-item/menu-item';
import { ReactComponent as TestsIcon } from './icons/test.svg';
import { ReactComponent as BookIcon } from './icons/book.svg';
import { AppRoute } from '../../utils/const';

const menuItems: NavMenuItems[] = [
  {
    id: 1,
    name: 'Тесты',
    icon: <TestsIcon />,
    link: AppRoute.Tests,
  },
  {
    id: 2,
    name: 'Литература',
    icon: <BookIcon />,
    link: AppRoute.Literature,
  },
];

function MenuList (): JSX.Element {
  return (
    <ul className="list">
      {
        menuItems.map((item) => (<MenuItem key={item.name} name={item.name} link={item.link} icon={item.icon}/>))
      }
    </ul>
  );
}

export default MenuList;
