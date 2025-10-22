import { useState } from "react";

export const LoginForm = () => {
    const [email, setEmail] = useState(""); // here we got the value was submitted

    const handleSubmit = (e: React.FormEvent) => { // what mean this typing?
        e.preventDefault(); // 🚫 stops page reload
        console.log("Submitted email:", email); // ✅ use your controlled state // we display what we got
        // here you could send `email` to an API, etc.
    };

    return (
        // 1. we create form with input and button.
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // here we get the value of what was inside the input
                // while this was submitted
            />
            <button type="submit">Submit</button>
        </form>
    );
};
