import React, { useState } from 'react';
import {
  Button,
} from 'semantic-ui-react';

import { shuffle } from '../../../utils';

import "./main.css"

const Main = ({ startQuiz }) => {

  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = () => {
    setProcessing(true);

   // const API = `https://opentdb.com/api.php?amount=5`;
   const API = " http://localhost:4000/papers?subject=History&className=10"

    fetch(API)
      .then(respone => respone.json())
      .then(data =>
        setTimeout(() => {
          const { results } = data;
          console.log(results)
          setProcessing(false);

          results.forEach(el => {
            el.options = shuffle([
              el.correct_answer,
              ...el.incorrect_answers,
            ]);
          });


          startQuiz(
            results
          );
        }, 1000)
      )
      .catch(error =>
      
        setTimeout(() => {
          setProcessing(false);
          setError(error);
          console.log(error)
        }
          , 1000)
      );
  };

  return (

    <div className="main-cont">

      <p>
        <h1>Basic Instructions for Online Examinations:</h1>

        <h3>  A. General information:</h3>

        <div className="text-cont">
          <ol>
            <li>The examination will comprise of Objective type Multiple Choice Questions (MCQs)</li>
            <li>All questions are compulsory and each carries One mark.</li>
            <li>The total number of questions, duration of examination, will be different based on
              the course, the detail is available on your screen.</li>
            <li>The Subjects or topics covered in the exam will be as per the Syllabus.</li>
            <li>There will be NO NEGATIVE MARKING for the wrong answers.</li>
          </ol>
        </div>

        <h3>B. Information & Instructions:</h3>

        <div className="text-cont">
          <ol>
            <li>The examination does not require using any paper, pen, pencil and calculator.</li>
            <li>Every student will take the examination on a Laptop/Desktop/Smart Phone</li>
            <li>On computer screen every student will be given objective type  Multiple Choice Questions (MCQs).</li>
            <li>Each student will get questions and answers in different order selected randomlyfrom a fixed Question Databank.</li>
            <li>The students just need to click on the Right Choice / Correct option from the
              multiple choices /options given with each question. For Multiple Choice Questions,
              each question has four options, and the candidate has to click the appropriate
              option.</li>
          </ol>
        </div>
      </p>

      <Button
        primary
        size="big"
        icon="play"
        labelPosition="left"
        content={processing ? 'Processing...' : 'Start Exam'}
        onClick={fetchData}
        disabled={processing}
      />
    </div>
  );
};

export default Main;
