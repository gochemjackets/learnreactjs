import React from "react"

function ContactCard(obj) {
    return (
        <div className="contact-card">
            <img src={obj.imgUrl}/>
            <h3>{obj.name}</h3>
            <p>Id: {obj.id}</p>
            <p>Phone: {obj.phone}</p>
            <p>Email: {obj.email}</p>
        </div>
    )
}
export default ContactCard