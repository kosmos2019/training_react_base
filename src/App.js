import { useState } from 'react';

import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';

import './App.css';

function App() {
  const [courseGoals, setCourseGoals] = useState([
    {id: 'c1', text: 'Finish the course'},
    {id: 'c2', text: 'Learn about the Course Main Topic'},
    {id: 'c3', text: 'Help other students in the Course QA'},
  ]);

  const addNewGoalHandler = newGoal => {
    // courseGoals.push(newGoal);
    // console.log(courseGoals);
    //setCourseGoals(courseGoals.concat(newGoal));
    setCourseGoals(prevCourseGoals => prevCourseGoals.concat(newGoal));
  }

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />
    </div>
  );
}

export default App;
