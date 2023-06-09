import React from "react";
import './card.styles.css';

export const Card=(props)=>(
    <div className="card-container">
        <img  src={`https://robohash.org/${props.monsters.id}?set=set2&size=180x180`} alt="monster" />
        <h1>{props.monsters.name}</h1>
        <p>{props.monsters.email}</p>
    </div>
)
    