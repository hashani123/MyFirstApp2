import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import swal from '@sweetalert/with-react'

export default class EditSubject extends Component {
    constructor(props) {
        super(props);


        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangeSemester = this.onChangeSemester.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeCode = this.onChangeCode.bind(this);
        this.onChangeLhourse = this.onChangeLhourse.bind(this);
        this.onChangeThourse = this.onChangeThourse.bind(this);
        this.onChangeLabhourse = this.onChangeLabhourse.bind(this);
        this.onChangeEvahours= this.onChangeEvahours.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Year: "",
            Semester: "",
            Name:"",
            Code: "",
            Lhourse: "",
            Address: "",
            Labhourse: "",
            Evahours: "",
            Subject: [],
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/Subject/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    Year: response.data.Year,
                    Semester: response.data.Semester,
                    Name: response.data.Name,
                    Code: response.data.Code,
                    Lhourse: response.data.Lhourse,
                    Thourse: response.data.Thourse,
                    Labhourse: response.data.Labhourse,
                    Evahours: response.data.Evahours,
                   
                    
                })
            })
            .catch(function(error) {
                console.log(error);
            })

        axios.get('http://localhost:5000/Subject/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        Subject: response.data.map(Subject => Subject.Name),
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })

    }

   //set the Year

   onChangeYear(e) {
    this.setState({
        Year: e.target.value,
    });
}

//set the Semester

onChangeSemester(e) {
    this.setState({
        Semester: e.target.value,
    });
}

//set Name
onChangeName(e) {
    this.setState({
        Name: e.target.value,
    });
}

//set Code




onChangeCode(e) {
    this.setState({
        Code: e.target.value,
    });
}

//set Lhourse
onChangeLhourse(e) {
    this.setState({
        Lhourse: e.target.value,
    });
}

//set Thourse
onChangeThourse(e) {
    this.setState({
        Thourse: e.target.value,
    });
}

//set Labhourse
onChangeLabhourse(e) {
    this.setState({
        Labhourse: e.target.value,
    });
}

//set Evahours
onChangeEvahours(e) {
    this.setState({
        Evahours: e.target.value,
    });
}






    onSubmit(e) {
        e.preventDefault();

       

            const Subject = {
                Year: this.state.Year,
                Semester: this.state.Semester,
                Name: this.state.Name,
                Code: this.state.Code,
                Lhourse: this.state.Lhourse,
                Thourse: this.state.Thourse,
                Labhourse: this.state.Labhourse,
                Evahours: this.state.Evahours,
               
            };
            console.log(Subject);

            axios
                .post('http://localhost:5000/Subject/update/' + this.props.match.params.id, Subject)
                .then((res) => console.log(res.data));

            swal({
                title: "Done!",
                text: "Edit Successfully!",
                icon: "success",
                button: "Okay!",
            }).then((value) => {
                swal((window.location = "/Subject/"));
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
            <font face = "Comic sans MS" size = "6" > Update Subject </font>
            </h3 > <br></br>
            
            <br></br>
            
             <form onSubmit = { this.onSubmit } >


            <div className = "form-group" >
            <label >Offered Year: </label> 
            <input type = "text"
            placeholder = "Offered Year"
            required className = "form-control"
            value = { this.state.Year }
            onChange = { this.onChangeYear }
            /> 
            </div> <div className = "form-group" >
           
            <label >  Offered Semester : </label>
            <input type = "text"
            placeholder = "Offered Semester "
            required className = "form-control"
            value = { this.state.Semester }
            onChange = { this.onChangeSemester }
            /> 
            </div >  
            <div className = "form-group" >
           
            <label >Subject Name: </label> 
           
            <input type = "text"
            placeholder = " Subject Name"
            required  className = "form-control"
            value = { this.state.Name }
            onChange = { this.onChangeName }/>
             </div > 
             
              

            <div className = "form-group" >
            <label > Subject Code: </label> 
            <input type = "text"
            placeholder = "Subject Code"
            required  className = "form-control"
            value = { this.state.Code }
            onChange = { this.onChangeCode }/>
             </div > 

             <div className = "form-group" >
            <label > Numbers Of Lecture Hourse: </label> 
            <input type = "number"
            placeholder = "Numbers Of Lecture Hourse"
            required  className = "form-control"
            value = { this.state.Lhourse }
            onChange = { this.onChangeLhourse }/>
             </div >

             <div className = "form-group" >
            <label > Numbers Of Tutorial Hourse: </label> 
            <input type = "number"
            placeholder = "Numbers Of Tutorial Hourse"
            required  className = "form-control"
            value = { this.state.Thourse }
            onChange = { this.onChangeThourse }/>
             </div >


             <div className = "form-group" >
            <label > Number Of Lab Hours: </label> 
            <input type = "Number"
            placeholder = "Number Of Lab Hours"
            required  className = "form-control"
            value = { this.state.Labhourse }
            onChange = { this.onChangeLabhourse }/>
             </div >

             <div className = "form-group" >
            <label > Number Of Evaluation Hours: </label> 
            <input type = "Number"
            placeholder = "Number Of Evaluation Hours"
            required  className = "form-control"
            value = { this.state.Evahours }
            onChange = { this.onChangeEvahours }/>
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