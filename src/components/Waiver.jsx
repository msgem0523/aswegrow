import React from "react";
import { Link } from "react-router-dom";

const Waiver = () => {
    return (
        <div style={{ padding: "2rem" }}>
            <h2>📸 Photo Waiver & Consent Form</h2>
            <p>
                By participating in the As We Grow program, you give permission for your child's photo and/or video to be taken during events. These images may be used for promotional purposes including social media, website content, and printed materials. No personal information will be shared without additionall consent.
            </p>
            <p>
                You may opt out at any time by contacting us directly at aswegrow@gmail.com. {/* add email link as clickable */}
            </p> 
            <p>Thank you for helping us grow our community together!</p>
            <Link to="/">Back to Registration</Link>
        </div>
    );
};

export default Waiver;