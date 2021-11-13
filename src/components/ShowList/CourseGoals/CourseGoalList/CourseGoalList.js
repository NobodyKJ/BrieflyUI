import React from 'react';

import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';
import './CourseGoalList.css';

const CourseGoalList = props => {
  return (
    <ul className="goal-list">
      {props.items.map(goal => (
        <CourseGoalItem key={goal.id} id={goal.id} onDelete={props.onDeleteItem}>
          <ul className="test">
            <li className="test1">
              {goal.text}
            </li>
            <li className="test2">
            {"https://brief.ly/"}{goal.text}
            </li>
              <li className="test2"> 
                <button>copy</button>
              </li>
          </ul>
        </CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;
