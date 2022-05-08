import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";

const Subject = (props) => ( 
    <tr>
    <td > { props.Subject.Sid } </td> 
    <td> {props.Subject.Name} </td > { " " } 
    <td > { props.Subject.Phone } </td>{" "}
    <td > { props.Subject.birthday } </td> 
    <td > { props.Subject.Address } </td> 
    <td > { props.Subject.Email } </td> 
    <td > { props.Subject.Gender } </td> 

    <td >
    <Link to = { "/Subject/" + props.Subject._id } > Edit </Link> |{" "} <a href = " "onClick = {() => {props.deleteSubject(props.Subject._id);}} >Delete { " " } </a>{" "} 
    </td > { " " }
     </tr>
);

export default class SubjectList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Subject: [],
        };
    }

    componentDidMount() {
        axios
            .get("http://localhost:5000/Subject/")
            .then((response) => {
                this.setState({ Subject: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    getPosts() {
        axios
            .get("http://localhost:5000/Subject/")
            .then((response) => {
                this.setState({ Subject: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    deleteSubject(id) {
        if (window.confirm("Are you sure?")) {
            axios.delete("http://localhost:5000/Subject/" + id).then((response) => {
                console.log(response.data);
            });

            this.setState({
                Subject: this.state.Subject.filter((el) => el._id !== id),
            });
        }
    }

    SubjectList() {
        return this.state.Subject.map((currentSubject) => {
            return ( <
                Subject Subject = { currentSubject }
                deleteSubject = { this.deleteSubject }
                key = { currentSubject._id }
                />
            );
        });
    }


    handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;

        axios.get("http://localhost:5000/Subject/").then((response) => {
            const resultt = response.data;
            const result = resultt.filter((props) =>
                props.Name.includes(searchKey)|| props.Name.includes(searchKey)
            );

            this.setState({ Subject: result });
        });
    };

   

    render() {
        return ( 
            <div className = "container" >
            <div  >
            
             </div> <br/ >
            <div className = "row" >
            <div  className = "col-9 mt-1 mb-1">
            <h3 > All Subject Details  </h3>
             </div > 
             <br></br>

             <br></br>
             <br></br>
             
              <div className = "col-lg-3 mt-1 mb-2" >
            <input className = "form-control" type = "search" placeholder = "Search by Name" name = "searchQuery" onChange = { this.handleSearchArea } >
            </input>
             </div > 
              </div>
             
              <table class = "table table-bordered table-white" >
            <thead className = "thead-light" >
            <tr >
            <th > Year </th> 
            <th>  Semester </th >
             < th > Name </th> 
            <th > Code </th> 
             <th>Lecture Hourse </th>
             <th > Tutorial Hourse </th> 
             <th>Lab Hours</th>
            <th> Evaluation Hours </th >  
            <th> Action </th > 
            </tr> </thead > 
            <tbody >  {
                this.state.Subject.map((props) => ( 
                    <tr key = { props.id }>
                    <td > { props.Year } </td> 
                    <td> {props.Semester} </td > 
                    <td > { props.Name } </td>
                     <td > { props.Code } </td> 
                     <td > { props.Lhourse } </td> 
                     <td > { props.Thourse } </td> 
                     <td > { props.Labhourse } </td> 
                     <td > { props.Evahours } </td> 
                    <td >
                    < Link to = { "/Subject-Edit/" + props._id } >  <Button data-inline ="true" variant = "warning btn-sm" > Edit </Button> |</Link > 
                     <a href = ""onClick = {() => {this.deleteSubject(props._id);}} >  
                     <Button data-inline ="true" variant = "danger btn-sm" > Delete </Button> </a > 
                      </td>  </ tr >))}  </tbody> </table > 
                      <div style = {{ float: "right" }}>
            
            < Link to = "/Subject-add/" >
            <button type = "button" class = "btn btn-success" variant = "primary" >
            New Subject  </button> </Link > </div> 
            </div >
        );
    }
}