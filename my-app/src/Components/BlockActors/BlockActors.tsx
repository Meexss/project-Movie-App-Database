import React, {FC} from 'react';
import {ActorsType} from "../../Types";

const BlockActors: FC<ActorsType> = (props) => {
    return (
        <div>
            <img src={props.image}/>
            <span>{props.name}</span>
            <span>{props.birthDate}</span>
            
        </div>
    );
};

export default BlockActors;