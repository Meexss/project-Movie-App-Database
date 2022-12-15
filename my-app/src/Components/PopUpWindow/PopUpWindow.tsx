import React, {FC, useEffect, useState} from 'react';
import classes from "./PopUpWindow.module.css";
import {PopUpTypes} from "../../Types";

const PopUpWindow: FC<PopUpTypes> = (props) => {

    const [url, setUrl] = useState<string>('')

    useEffect(() => {
        fetch(`https://imdb-api.com/en/API/YouTubeTrailer/k_53o2jbzt/${props.id}`)
            .then(response => response.json())
            .then(data => setUrl(data.videoId))
    }, [props.display]);

    return (
        <div style={props.display ? {display: "block"} : {display: "none"}} className={classes.wrapper} onClick={() => props.do()}>
            <div className={classes.pop}>
                <iframe width="995"
                        height="495"
                        src={`https://www.youtube.com/embed/${url}`}
                        >
                </iframe>
            </div>
        </div>
    );
};

export default PopUpWindow;