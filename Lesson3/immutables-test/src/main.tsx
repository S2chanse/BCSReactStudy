import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import produce from 'immer';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

let quiz = {
  students: ['차은우', '송중기', '모현영', '주현영'],
  quizList: [
    {
      question: '한국 프로야구 팀이 아닌것은?',
      options: [
        { no: 1, option: '삼성' },
        { no: 2, option: '롯데' },
        { no: 3, option: 'SK' },
        { no: 4, option: '기아' },
      ],
      answer: 3,
    },
    {
      question: '2018년 크리스마스는 무슨 요일인가?',
      options: [
        { no: 1, option: '월' },
        { no: 2, option: '화' },
        { no: 3, option: '금' },
        { no: 4, option: '토' },
      ],
      answer: 2,
    },
  ],
};

const quiz2 = produce(quiz, (draft) => {
  //상태 트리의 끝단 변경
  draft.quizList[0].options[0].option = 'LG';
});

console.log(quiz === quiz2);
console.log(quiz.quizList === quiz2.quizList);
console.log(quiz.quizList[0] === quiz2.quizList[0]);
console.log(quiz.quizList[0].options === quiz2.quizList[0].options);
console.log(quiz.students === quiz2.students);
