import { useState } from 'react';

const Prompt = () => {

    // State to manage popup visibility
    const [isPopupVisible, setPopupVisibility] = useState(false);

    // Toggle the visibility of the popup
    const handleButtonClick = () => {
        setPopupVisibility(!isPopupVisible);
    }

    return (
        <div className="promptContainer">
            <div className="companyName">Remembell</div>
            <input className="promptInput" placeholder="Query here..." />
            <button className="submitButton" onClick={handleButtonClick}>Submit</button>

            {isPopupVisible && (
                <div className="popup">
                    Hello World
                </div>
            )}

        </div>
    );
};


export default Prompt;