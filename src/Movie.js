// 1.
import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

// 2.
function Movie({ id, title, year, summary, poster}) {
    return (
        <div className="movie">
            <img src={poster} alt={title}/>
            <div>
                <h4>{title}</h4>
                <h5>{year}</h5>
                <p>
                    {summary}
                </p>
            </div>
        </div>
    );
};

// 3.
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    summary: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired
};

// 4.
export default Movie;