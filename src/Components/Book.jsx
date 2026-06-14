import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import codingInterview from "../assets/crack the coding interview.png";
import atomicHabits from "../assets/atomic habits.jpg";
import davidGoggins from "../assets/david goggins.jpeg";
import sellOrBeSold from "../assets/SellOrBeSold.jpg"

function Book() {
    return (
        <div className="book">
            <figure className="book__img--wrapper">
                <img
                    className="book__img"
                    src={codingInterview}
                    alt="Crack the Coding Interview" />
            </figure>

            <div className="book__title">Crack the Coding Interview</div>

            <div className="book__ratings">
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star" />
                <FontAwesomeIcon icon="star-half-alt" />
            </div>

            <div className="book__price">
                <span className="book__price--normal">$59.95</span> $14.95
            </div>
        </div>
    );
}

export default Book;