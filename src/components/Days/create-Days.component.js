import React, { Component } from "react";
import axios from "axios";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import swal from "@sweetalert/with-react";


export default class CreateDayst extends Component {
    constructor(props) {
        super(props);

        this.onChangeNoDays = this.onChangeNoDays.bind(this);
        this.onChangeDays = this.onChangeDays.bind(this);
        this.onChangeTime = this.onChangeTime.bind(this);
      
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            NoDays: "",
            Days: "",
            Time:"",
           

            Dayst: [],
        };
    }

   //set the NoDays

   onChangeNoDays(e) {
    this.setState({
        NoDays: e.target.value,
    });
}

//set the Days

onChangeDays(e) {
    this.setState({
        Days: e.target.value,
    });
}

//set Time
onChangeTime(e) {
    this.setState({
        Time: e.target.value,
    });
}






    //submit Function

    onSubmit(e) {
        e.preventDefault();
        

            const Dayst = {
                NoDays: this.state.NoDays,
                Days: this.state.Days,
                Time: this.state.Time,
               
               
            };

            console.log(Dayst);

            axios
                .post("http://localhost:5000/Dayst/add", Dayst)
                .then((res) => console.log(res.data));

            swal({
                title: "Done!",
                text: "Create Successfully!",
                icon: "success",
                button: "Okay!",
            }).then((value) => {
                swal((window.location = "/Days/"));
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
            <font face = "Comic sans MS" size = "6" > Create Lecturer </font>
            </h3 > <br></br>
            
            <br></br>
            
             <form onSubmit = { this.onSubmit } >


            <div className = "form-group" >
            <label > No Of Days: </label> 
            <input type = "Number"
            placeholder = "NoDays"
            required className = "form-control"
            value = { this.state.NoDays }
            onChange = { this.onChangeNoDays }
            /> 
            </div> <div className = "form-group" >
        
            <label > Days: </label> 
            <input type = "text"
            placeholder = "Days"
            required className = "form-control"
            value = { this.state.Days }
            onChange = { this.onChangeDays }
            /> 
            </div >  
            <div className = "form-group" >
            
            <label > Time: </label> 
            
            <input type = "text"
            placeholder = "Time"
            required  className = "form-control"
            value = { this.state.Time }
            onChange = { this.onChangeTime }/>
             </div > 
             

            <div className = "form-group" >
            <input type = "submit"
            value = "Create"
            className = "btn btn-primary" />
            </div>{" "} </form >  </div> </div > </div>
             </div ><br/> <br/>  </div>
        );
    }
}