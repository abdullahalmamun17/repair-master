import React from 'react';

const Spinner = () => {
    return (
        <div className="d-flex justify-content-center mt-5">
            <div class="spinner-grow text-primary me-1" style={{ width: "3rem", height: "3rem" }} role="status">
                <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow text-secondary me-1" style={{ width: "3rem", height: "3rem" }} role="status">
                <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow text-success me-1" style={{ width: "3rem", height: "3rem" }} role="status">
                <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow text-warning me-1" style={{ width: "3rem", height: "3rem" }} role="status">
                <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow text-danger me-1" style={{ width: "3rem", height: "3rem" }} role="status">
                <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow text-info" style={{ width: "3rem", height: "3rem" }} role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    );
};

export default Spinner;