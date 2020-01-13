import React from 'react';
import Footer from "./footer";
import ContactCard from "./ContactCard";
import InfoList from "./listData";

function TestApp() {

    const index = "01";
    const country = ['Korea', 'Japan', 'USA'];
    const countryList = country.map(country =>
        // expression goes here:
        <li>{country}</li>
    );
    const testComponents = InfoList.map(info =>
        <ContactCard
            name ={info.name}
            imgUrl = {info.imgUrl}
            phone={info.phone}
            email={info.email}
        />
    );
    return (
        <div>
            {testComponents}
            <span>{index}</span>
            <span>{countryList}</span>
            <Footer/>
        </div>
    )
}
export default TestApp

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
