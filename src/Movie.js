// 1.
import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

// 2.
function Movie({ id, title, year, genres, summary, poster}) {
    return (
        <div className="movie">
            <img src={poster} alt={title}/>
            <div>
                <h4 className="movie_title">{title}</h4>
                <h5 className="movie_year">출시연도: {year}년 </h5>
                {/*구분이 되는 id가 없을때는 index를 넣는다 */}
                <ul className="movie_genres">
                    {genres.map((genre, index) => (
                        <li key={index}>
                            {genre}
                        </li>
                    ))}
                </ul>
                <p>
                    {summary.slice(0, 180)}...
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
    genres: PropTypes.array.isRequired,
    summary: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired
};

// 4.
export default Movie;