import React from "react"

function onClickCheckBox() {

    let table = []

    for (let i = 0; i < 3; i++) {
        table.push(
            <div>
            <input type = "checkbox" value = "123123123"/>
            <span>checkbox1</span>
            </div>
        )
    }
    return (


        <span>Check01</span>

    )
}

export default onClickCheckBox