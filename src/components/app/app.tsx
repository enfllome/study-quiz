import Body from '../body/body';
import Footer from '../footer/footer';
import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';
import styles from './app.module.css';

function App(): JSX.Element {
  return (
    <div className={styles.app}>
      <Header />
      <Sidebar />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
