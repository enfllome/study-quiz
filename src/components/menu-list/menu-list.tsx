import { NavMenuItems } from '../../types/menu-items';
import MenuItem from '../menu-item/menu-item';
import { ReactComponent as TestsIcon } from './icons/test.svg';
import { ReactComponent as BookIcon } from './icons/book.svg';

const menuItems: NavMenuItems[] = [
  {
    id: 1,
    name: 'Тесты',
    icon: <TestsIcon />,
  },
  {
    id: 2,
    name: 'Литература',
    icon: <BookIcon />,
  },
];

function MenuList (): JSX.Element {
  return (
    <ul className="list">
      {
        menuItems.map((item) => (<MenuItem key={item.name} name={item.name} icon={item.icon}/>))
      }
    </ul>
  );
}

export default MenuList;
