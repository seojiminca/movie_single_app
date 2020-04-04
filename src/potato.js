import React from "react";

                //매개변수에 {}사용 -> 사용자입력값.
function Potato({name,image}) {
                //html 안에 {} -> JavaScript
    return (
        <div>
            <h2>I like {name}</h2>
            <img src={image} />
        </div>
    );
}

export default Potato;