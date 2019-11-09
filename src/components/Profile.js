import React from 'react'
export default function Profile(props) {
    return (
        <div>
        <img src={props.details.photo} />;
        <h1>{props.details.Name.firstName}</h1>
        <h1>{props.details.Name.lastName}</h1>
        <button onClick={() => window.location=props.details.profileLink}>Mon Profil</button>
    </div>

    );
}