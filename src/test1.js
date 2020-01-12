import React from 'react';
import Footer from "./footer";
// import Footer from "./footer";
// import onClickCheckBox from "./checkbox";

function TestApp() {

    const country = ['Korea', 'Japan', 'USA'];
    const countryList = country.map(country =>
        // expression goes here:
        <li>{country}</li>
    );
    return (
        <div>
            <span>{countryList}</span>
            <Footer/>
        </div>
    )
}
export default TestApp

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
