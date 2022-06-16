import { Books } from '../types/books';

export const books: Books[] = [
  {
    title: 'learn.javascript',
    descr: 'Гигантский проект Ильи Кантора, который начинался с сайта javascript.ru, а перерос в этот учебник, которым пользуется или пользовался каждый frontend-разработчик . Этот ресурс можно назвать одним из самых лучших за его краткость и понятно изложенный материал.',
    img: './img/learn-js.png',
    link: 'https://learn.javascript.ru/',
  },
  {
    title: 'MDN',
    descr: 'Что такое MDN? Это документация, своего рода википедия, которая предоставляет информацию обо всех открытых стандартах в веб-технологиях. Это справочник, который, как по мне, нужно использовать только тогда, когда нужно решить проблему. Не стоит сидеть за ним и учить каждую статью. Здесь нужно использовать "ленивую" загрузку знаний, использовать справочник по требованию.',
    img: './img/mdn.png',
    link: 'https://developer.mozilla.org/ru/',
  },
  {
    title: 'You Don’t Know JS',
    descr: 'Серия книг «You Don’t Know JS», написанная Кайлом Симпсоном, получила признание среди JavaScript-разработчиков. Она состоит из 6 небольших книг, объясняющих отдельные аспекты языка:',
    img: './img/dont-know-js.jpg',
    link: 'https://github.com/azat-io/you-dont-know-js-ru',
  },
  {
    title: 'Новая большая книга CSS',
    descr: 'CSS3 позволяет создать красивый адаптивный дизайн сайта, и материал из книги Дэвида Марфарланда «Новая большая книга CSS» поможет изучить многие тонкости технологии и стать настоящим профи. В первой части книги вас познакомят с CSS и HTML, а также с созданием стилей и их управлением. Вторая часть акцентирует внимание на практических возможностях CSS: форматировании текста, таблиц и веб-форм; полях, отступах и границах; создании навигационной системы сайта, а также украшениях в виде переходов, анимации и преобразования.',
    img: './img/css.jpg',
    link: 'https://www.chitai-gorod.ru/catalog/book/893276/?utm_source=admitad&utm_medium=cpo&utm_campaign=chitai&admitad_uid=625c499c46c5f5bc134cb75836372eee&tagtag_uid=625c499c46c5f5bc134cb75836372eee',
  },
  {
    title: 'React в действии',
    descr: 'Книга «React в действии» от Марка Тиленса Томаса поможет разобраться с особенностями разработки на React.js. Сначала в книге рассматривается DOM и компоненты. После этого автор рассказывает о данных, потоках данных, изменяемом и неизменяемом состоянии, рендеринге, методах жизненного цикла, маршрутизации, тестировании и интеграции сторонних библиотек.',
    img: './img/react.jpg',
    link: 'https://www.chitai-gorod.ru/catalog/book/1160225/?utm_source=admitad&utm_medium=cpo&utm_campaign=chitai&admitad_uid=3658b598c822ef11c9509a7d57ac0693&tagtag_uid=3658b598c822ef11c9509a7d57ac0693',
  },
  {
    title: 'Документация React',
    descr: 'React — это JavaScript-библиотека для разработки пользовательского интерфейса. Чтобы составить первое впечатление о React, зайдите на главную страницу или во введение. Официальная документация React, где вы сможете найти все обосенности данного инструмента и сможете овладать силой React`a',
    img: './img/react-doc.jpg',
    link: 'https://ru.reactjs.org/docs/getting-started.html',
  },
];
