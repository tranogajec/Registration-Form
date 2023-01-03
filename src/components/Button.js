import React from "react";

export const Button = ({ icon, onClick }) => {
    return (
        <button onClick={onClick}>
            <>Submit</><>{icon}</>
        </button>
    )
}
