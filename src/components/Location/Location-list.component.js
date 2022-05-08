import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";

const Location = (props) => ( 
    <tr>
    <td > { props.Location.Wise } </td> 
    <td> {props.Location.Building} </td > { " " } 
    <td > { props.Location.Name } </td>{" "}
    <td > { props.Location.Type } </td> 
    <td > { props.Location.Capacity } </td> 
    
    <td >
    <Link to = { "/Location/" + props.Location._id } > Edit </Link> |{" "} <a href = " "onClick = {() => {props.deleteLocation(props.Location._id);}} >Delete { " " } </a>{" "} 
    </td > { " " }
     </tr>
);

export default class LocationList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Location: [],
        };
    }

    componentDidMount() {
        axios
            .get("http://localhost:5000/Location/")
            .then((response) => {
                this.setState({ Location: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    getPosts() {
        axios
            .get("http://localhost:5000/Location/")
            .then((response) => {
                this.setState({ Location: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    deleteLocation(id) {
        if (window.confirm("Are you sure?")) {
            axios.delete("http://localhost:5000/Location/" + id).then((response) => {
                console.log(response.data);
            });

            this.setState({
                Location: this.state.Location.filter((el) => el._id !== id),
            });
        }
    }

    LocationList() {
        return this.state.Location.map((currentLocation) => {
            return ( <
                Location Location = { currentLocation }
                deleteLocation = { this.deleteLocation }
                key = { currentLocation._id }
                />
            );
        });
    }


    handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;

        axios.get("http://localhost:5000/Location/").then((response) => {
            const resultt = response.data;
            const result = resultt.filter((props) =>
                props.Name.includes(searchKey)|| props.Name.includes(searchKey)
            );

            this.setState({ Location: result });
        });
    };

   

    render() {
        return ( 
            <div className = "container" >
            <div  >
            
             </div> <br/ >
            <div className = "row" >
            <div  className = "col-9 mt-1 mb-1">
            <h3 > All Location Details  </h3>
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
            <th > Wise </th> 
            <th>  Building </th >
             < th > Name </th> 
            <th > Type </th> 
             <th>Capacity </th>
            <th> Actions </th >  
            </tr> </thead > 
            <tbody >  {
                this.state.Location.map((props) => ( 
                    <tr key = { props.Wise }>
                    <td > { props.Wise } </td> 
                    <td> {props.Building} </td > 
                    <td > { props.Name } </td>
                     <td > { props.Type } </td> 
                     <td > { props.Capacity } </td> 
                    <td >
                    < Link to = { "/Location-Edit/" + props._id } >  <Button data-inline ="true" variant = "warning btn-sm" > Edit </Button> |</Link > 
                     <a href = ""onClick = {() => {this.deleteLocation(props._id);}} >  
                     <Button data-inline ="true" variant = "danger btn-sm" > Delete </Button> </a > 
                      </td>  </ tr >))}  </tbody> </table > 
                      <div style = {{ float: "right" }}>
            
            < Link to = "/Location-add/" >
            <button type = "button" class = "btn btn-success" variant = "primary" >
            New Location  </button> </Link > </div> 
            </div >
        );
    }
}