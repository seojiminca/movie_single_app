import React from "react";
import PropTypes from "prop-types";

                //매개변수에 {}사용 -> 사용자입력값.
function Potato({name,image,rate}) {
                //html 안에 {} -> JavaScript
    return (
        <div>
            <h2>I like {name}</h2>
            <h3>{rate} / 5.0</h3>
            <img src={image} />
        </div>
    );
}

Potato.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rate: PropTypes.number
}

export default Potato;