import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";

const Dayst = (props) => ( 
    <tr>
    <td > { props.Dayst.NoDays } </td> 
    <td> {props.Dayst.Days} </td > { " " } 
    <td > { props.Dayst.Time } </td>{" "}
    
   
    
    <td >
    <Link to = { "/Days/" + props.Dayst._id } > Edit </Link> |{" "} <a href = " "onClick = {() => {props.deleteDayst(props.Dayst._id);}} >Delete { " " } </a>{" "} 
    </td > { " " }
     </tr> 
);

export default class DaystList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Dayst: [],
        };
    }

    componentDidMount() {
        axios
            .get("http://localhost:5000/Dayst/")
            .then((response) => {
                this.setState({ Dayst: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    getPosts() {
        axios
            .get("http://localhost:5000/Dayst/")
            .then((response) => {
                this.setState({ Dayst: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    deleteDays(id) {
        if (window.confirm("Are you sure?")) {
            axios.delete("http://localhost:5000/Dayst/" + id).then((response) => {
                console.log(response.data);
            });

            this.setState({
                Dayst: this.state.Dayst.filter((el) => el._id !== id),
            });
        }
    }

    DaystList() {
        return this.state.Dayst.map((currentDayst) => {
            return ( <
                Dayst Dayst = { currentDayst }
                deleteDayst = { this.deleteDayst }
                key = { currentDayst._id }
                />
            );
        });
    }


    

    

    render() {
        return ( 
            <div className = "container" >
            <div  >
            
             </div> <br/ >
            <div className = "row" >
            <div  className = "col-9 mt-1 mb-1">
            <h3 > Add Working Days And Hours  </h3>
             </div > 
             <br></br>

             <br></br>
             <br></br>
             
             
              </div>
             
              <table class = "table table-bordered table-white" >
            <thead className = "thead-light" >
            <tr >
            <th > No Of Days </th> 
            <th>  Days </th > 
            < th > Time </th> 
           
           <th> Actions </th >  
            </tr> </thead > 
            <tbody >  {
                this.state.Dayst.map((props) => ( 
                    <tr key = { props.NoDays }>
                    <td > { props.NoDays } </td> 
                    <td> {props.Days} </td > 
                    <td > { props.Time } </td>
                  
                    
                    <td >
                    < Link to = { "/Days-Edit/" + props._id } >  <Button data-inline ="true" variant = "warning btn-sm" > Edit </Button> |</Link > 
                     <a href = ""onClick = {() => {this.deleteDays(props._id);}} >  
                     <Button data-inline ="true" variant = "danger btn-sm" > Delete </Button> </a > 
                      </td>  </ tr >))}  </tbody> </table > 
                      <div style = {{ float: "right" }}>
            
            < Link to = "/create/" >
            <button type = "button" class = "btn btn-success" variant = "primary" >
            Add  </button> </Link > </div> 
            </div >
        );
    }
}