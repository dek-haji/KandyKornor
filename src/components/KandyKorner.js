import React, { Component } from 'react';
import StoreList from "./StoreList"
import EmployeeList from "./EmployeeList"
import CandyList from "./CandyList"
import "./kandy.css"

class KandyKorner extends Component {

    candyArray = [
        { "id": 1, "candyName": "Space Chimps", "candyType": "Adventure|Animation|Comedy" },
        { "id": 2, "candyName": "Dead Genesis", "candyType": "Horror" },
        { "id": 3, "candyName": "Night and Day", "candyType": "Drama|Musical" },
        { "id": 4, "candyName": "Creep", "candyType": "Horror|Thriller" },
        { "id": 5, "candyName": "Prom Queen: The Marc Hall Story", "candyType": "Comedy|Drama" }
    ];
     employeeArray = [
        { "id": 1, "employeeFirstName": "Odessa", "employeeLastName": "Camolli", "Company": "Lindgren and Sons" },
        { "id": 2, "employeeFirstName": "Cara", "employeeLastName": "Buntin", "Company": "Jerde-Leannon" },
        { "id": 3, "employeeFirstName": "Anna", "employeeLastName": "Romand", "Company": "McCullough-Kihn" },
        { "id": 4, "employeeFirstName": "Sully", "employeeLastName": "Fleg", "Company": "Emard, Gorczany and Wuckert" },
        { "id": 5, "employeeFirstName": "Aura", "employeeLastName": "Simanek", "Company": "Schroeder, Senger and Gulgowski" }
    ];
    storeArray = [{ "id": 1, "storeName": "internet solution", "companyName": "McLaughlin-Flatley" },
    { "id": 2, "storeName": "forecast", "companyName": "Jacobs-Emmerich" },
    { "id": 3, "storeName": "Secured", "companyName": "Raynor, Schroeder and Kulas" },
    { "id": 4, "storeName": "Object-based", "companyName": "Wilderman-Dooley" },
    { "id": 5, "storeName": "Centralized", "companyName": "Greenfelder-Hodkiewicz" }
    ];
    candyTypeArray = [
          {"id": 1,"type": "Hard Candy"},
          {"id": 2,"type": "Chocolate"},
          {"id": 3,"type": "Lollipop"},
          {"id": 4,"type": "Taffy"},
          {"id": 5,"type": "Sour Candy"},
    ]

    state = {
        stores: this.storeArray,
        employees: this.employeeArray,
        candyTypes: this.candyTypeArray,
        candies: this.candyArray
    }




    render() {
        console.log("whas is the stre array",this.state.stores)
        return (
            <article className="kennel">
            <StoreList stores={this.state.stores} />
            <EmployeeList employees={this.state.employees} />
                {/* <CandyTypeArray candyTypes={this.state.candyTypes} /> */}
                <CandyList candies={this.state.candies} />
                </article>
        );
    }
}

export default KandyKorner;