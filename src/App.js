import './App.css';
import React,{useState} from 'react';
import { Route,Switch } from 'react-router-dom';
import Student from './Components/studentlist';
import Edit from './Components/editstudent';
import Addstudent from './Components/addstudent';
import data from './Basic/data';
import Teachers from './Components/teacherlist.js'
import Dashboard from './Components/Dashboard';
import teacher from './Basic/teachers';
import Addteachers from './Components/addteachers';
import EditTeachers from './Components/editteachers';

function App() {
  let [teachers,setteachers]=useState(teacher)
  let [students,setstudents]=useState(data);
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Dashboard/>
        </Route>
        <Route path="/student_list">
        <Student
          students={students}
          setstudents={setstudents}
          />
        </Route>
        <Route path="/teacher_list">
          <Teachers
          teachers={teachers}
          setteachers={setteachers}
          />
        </Route>
        <Route  path="/edit_student/:id">
          <Edit
          state={students}
          setstate={setstudents}
          />
        </Route>
  
        <Route path="/edit_teachers/:id">
        <EditTeachers
          state={teachers}
          setstate={setteachers}
          />
        </Route>
        <Route  path="/add_student">
          <Addstudent
          state={students}
          setstate={setstudents}
          />
        </Route>
        <Route  path="/add_teachers">
          <Addteachers
          state={teachers}
          setstate={setteachers}
          />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
