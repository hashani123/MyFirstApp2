import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import swal from '@sweetalert/with-react'

export default class EditLocation extends Component {
    constructor(props) {
        super(props);


        this.onChangeWise = this.onChangeWise.bind(this);
        this.onChangeBuilding = this.onChangeBuilding.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onChangeCapacity = this.onChangeCapacity.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Wise: "",
            Building: "",
            Name:"",
            Type: "",
            Capacity: "",
            Location: [],
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/Location/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    Wise: response.data.Wise,
                    Building: response.data.Building,
                    Name: response.data.Name,
                    Type: response.data.Type,
                    Capacity: response.data.Capacity,
                   
                    
                })
            })
            .catch(function(error) {
                console.log(error);
            })

        axios.get('http://localhost:5000/Location/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        Location: response.data.map(Location => Location.DPname),
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })

    }

   //set the Wise

   onChangeWise(e) {
    this.setState({
        Wise: e.target.value,
    });
}

//set the Building

onChangeBuilding(e) {
    this.setState({
        Building: e.target.value,
    });
}

//set Name
onChangeName(e) {
    this.setState({
        Name: e.target.value,
    });
}

//set Type




onChangeType(e) {
    this.setState({
        Type: e.target.value,
    });
}

//set Capacity
onChangeCapacity(e) {
    this.setState({
        Capacity: e.target.value,
    });
}






    onSubmit(e) {
        e.preventDefault();

       

            const Location = {
                Wise: this.state.Wise,
                Building: this.state.Building,
                Name: this.state.Name,
                Type: this.state.Type,
                Capacity: this.state.Capacity,
               
            };
            console.log(Location);

            axios
                .post('http://localhost:5000/Location/update/' + this.props.match.params.id, Location)
                .then((res) => console.log(res.data));

            swal({
                title: "Done!",
                text: "Edit Successfully!",
                icon: "success",
                button: "Okay!",
            }).then((value) => {
                swal((window.location = "/Location/"));
            });
        }

    

    render() {
        return (<div  >
            <div class = "row ">
            <div class = "col-6" >
            <br/>
            <img src="/images/cupcake_logo.gif" width="60%" height="40%" />
            </div> <div class = "col-6" >
            <div div class = "myformstyle" >
            <div className = "card-body" >
            <div className = "col-md-8 mt-4 mx-auto" > </div> 
            <h3 className = "text-center" > 
            <font face = "Comic sans MS" size = "6" > Update Location </font>
            </h3 > <br></br>
            
            <br></br>
            
             <form onSubmit = { this.onSubmit } >


            <div className = "form-group" >
            <label >Add Room Bulding Wise: </label> 
            <input type = "text"
            placeholder = "Add Room Bulding Wise"
            required className = "form-control"
            value = { this.state.Wise }
            onChange = { this.onChangeWise }
            /> 
            </div> <div className = "form-group" >
           
            <label > Bulding Name & Numbers: </label>
            <input type = "text"
            placeholder = "Bulding Name & Numbers"
            required className = "form-control"
            value = { this.state.Building }
            onChange = { this.onChangeBuilding }
            /> 
            </div >  
            <div className = "form-group" >
           
            <label > Name: </label> 
           
            <input type = "text"
            placeholder = "Name"
            required  className = "form-control"
            value = { this.state.Name }
            onChange = { this.onChangeName }/>
             </div > 
             
              

            <div className = "form-group" >
            <label > Type: </label> 
            <input type = "text"
            placeholder = "Type"
            required  className = "form-control"
            value = { this.state.Type }
            onChange = { this.onChangeType }/>
             </div > 

             <div className = "form-group" >
            <label > Capacity: </label> 
            <input type = "Number"
            placeholder = "Capacity"
            required  className = "form-control"
            value = { this.state.Capacity }
            onChange = { this.onChangeCapacity }/>
             </div >

             

            <div className = "form-group" >
            <input type = "submit"
            value = "Update "
            className = "btn btn-primary" />
            </div>{" "} </form >  </div> </div > </div>
             </div ><br/> <br/>  </div>
        )
    }
}