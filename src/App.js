import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component"

//Days
import CreateDays from "./components/Days/create-Days.component";
import DaysList from "./components/Days/Days-list.component";
//Lecturer

import EditLecturer from "./components/Lecturer/Lecturer-Update.component";
import CreateLecturer from "./components/Lecturer/Lecturer-Create.component";
import LecturerList from "./components/Lecturer/Lecturer-list.component";


//Location

import EditLocation from "./components/Location/Location-Update.component";
import CreateLocation from "./components/Location/Location-Create.component";
import LocationList from "./components/Location/Location-list.component";

//Subject

import EditSubject from "./components/Subject/edit-Subject.component";
import CreateSubject from "./components/Subject/create-Subject.component";
import SubjectList from "./components/Subject/Subject-list.component";

//Student

import EditStudent from "./components/Student/edit-Student.component";
import CreateStudent from "./components/Student/create-Student.component";
import StudentList from "./components/Student/Student-list.component";

function App() {

    return (<Router >
        <div className = "container" >
        <Navbar/>
        <br/>
        <Route path = "/" exact component = { DaysList }/>
        <Route path = "/create" component = { CreateDays }/> 

        <Route path = "/Lecturer-add/" component = { CreateLecturer }/>
        <Route path = "/Lecturer/" component = { LecturerList }/> 
        <Route path = "/Lecturer-Edit/:id" component = { EditLecturer }/>

        <Route path = "/Location-add/" component = { CreateLocation }/>
        <Route path = "/Location/" component = { LocationList }/> 
        <Route path = "/Location-Edit/:id" component = { EditLocation }/>

        <Route path = "/Student-add/" component = { CreateStudent }/>
        <Route path = "/Student/" component = { StudentList }/> 
        <Route path = "/Student-Edit/:id" component = { EditStudent }/>

        <Route path = "/Subject-add/" component = { CreateSubject }/>
        <Route path = "/Subject/" component = { SubjectList }/> 
        <Route path = "/Subject-Edit/:id" component = { EditSubject }/>
          </div > </Router>
    );
}

export default App;