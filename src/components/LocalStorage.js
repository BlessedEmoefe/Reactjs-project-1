import React, { Component} from "react"
import Header from "../components/Header"

class LocalStorage extends Component{
    render(){
        //creating a person object
        const person={
            name: "Blessed",
            age: "12"
        }
        //to save to local storage we need to convert it to a string
        const personToJSON = JSON.stringify(person);
        localStorage.setItem("newPerson",personToJSON);
//retrieving from local storage
        const getPerson = localStorage.getItem("newPerson");
        const personParse =JSON.parse(getPerson)

        return(
            <div>
                <Header title="this is my LocalStorage Header"/>
            <h2>hello, the stringified version is  </h2>
            <p>{getPerson}</p>
            
            <h4>hello, the parsed version is</h4>
            <p>{personParse.name} and {personParse.age}</p>
            </div>
        )
    }
}
export default LocalStorage;