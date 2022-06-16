export type Questions = {
  question: string,
  questionType: string,
  questionPic?: string,
  answerSelectionType: string,
  answers: string[],
  correctAnswer: string,
  messageForCorrectAnswer: string,
  messageForIncorrectAnswer: string,
  explanation: string,
  point: string,
}
