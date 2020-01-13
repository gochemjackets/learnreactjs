import React from "react"

function ContactCard(obj) {
    return (
        <div className="contact-card">
            <img src={obj.imgUrl}/>
            <h3>{obj.name}</h3>
            <p>Phone: {obj.phone}</p>
            <p>Email: {obj.email}</p>
        </div>
    )
}
export default ContactCard