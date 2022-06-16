import Quiz from 'react-quiz-component';
import { useParams } from 'react-router-dom';
import { quizList } from '../../mocks/quiz';


const getCurrentTest = (id: number | undefined) =>
  quizList.find((test) => test.id === id);

function CurrentQuiz (): JSX.Element {
  const {id} = useParams();
  return (
    <main className="main">
      <Quiz quiz={getCurrentTest(Number(id))} />
    </main>
  );
}

export default CurrentQuiz;
