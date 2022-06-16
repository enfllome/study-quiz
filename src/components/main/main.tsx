import Title from '../title/title';
function Main (): JSX.Element {
  return (
    <main className="main">
      <div className="main__top">
        <div className="main__left">
          <Title size="l">Добро пожаловать в STUDYquiz!</Title>
        </div>
      </div>
      <p className='p'>
        В этом квизе Вы сможете закрепить пройденный лекционный материал! Список
        тестов располагается во вкладке &quot;Тесты&quot;
      </p>
      <p className='p'>А так же, во вкладке &quot;Литература&quot;, вы сможете найти необходимый материал!</p>
    </main>
  );
}

export default Main;
