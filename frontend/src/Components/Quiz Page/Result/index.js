import React, { useState } from 'react';
import { Container, Menu } from 'semantic-ui-react';
import "./result.css";

import Stats from './Stats';
import QNA from './QNA';

const Result = ({
  totalQuestions,
  correctAnswers,
  timeTaken,
  questionsAndAnswers,
  resetQuiz
}) => {
  const [activeTab, setActiveTab] = useState('Stats');

  const handleTabClick = (e, { name }) => {
    setActiveTab(name);
  };


  return (
    <Container className="main-cont">
      <Menu fluid widths={2}>
        <Menu.Item
          name="Stats"
          active={activeTab === 'Stats'}
          onClick={handleTabClick}
        />
        <Menu.Item
          name="QNA"
          active={activeTab === 'QNA'}
          onClick={handleTabClick}
        />
      </Menu>
      {activeTab === 'Stats' && (
        <Stats
          totalQuestions={totalQuestions}
          correctAnswers={correctAnswers}
          timeTaken={timeTaken}
          resetQuiz={resetQuiz}
        />
      )}
      {activeTab === 'QNA' && <QNA questionsAndAnswers={questionsAndAnswers} />}
      <br />
    </Container>
  );
};

export default Result;
