import PageQuiz from '../page-quiz/page-quiz';
import Footer from '../footer/footer';
import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';
import styles from './app.module.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../utils/const';
import PageBooks from '../page-books/page-books';
import Main from '../main/main';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import CurrentQuiz from '../current-quiz/current-quiz';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Header />
        <Sidebar />
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<Main />}
          />
          <Route
            path={AppRoute.Tests}
            element={<PageQuiz />}
          />
          <Route
            path={AppRoute.Literature}
            element={<PageBooks />}
          />
          <Route
            path={`${AppRoute.Quiz}/:id`}
            element={<CurrentQuiz />}
          />
          <Route
            path='*'
            element={<NotFoundScreen />}
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
