import { useState } from "react";

const ContactUsComponent = () => {
    const [queryType, setQueryType] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Query Type:', queryType);
        console.log('Message:', message);
      };

      return (
        <div>
        <h3>Contact Us</h3>
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="queryType">Select Query Type:</label>
            <select
                id="queryType"
                value={queryType}
                defaultValue="Select"
                onChange={(e) => setQueryType(e.target.value)}
            >
                <option value="">Select</option>
                <option value="complaint">Complaint</option>
                <option value="feedback">Feedback</option>
                <option value="support">Support</option>
                <option value="other">Other</option>
            </select>
            </div>
            <div>
            <label htmlFor="message">Message:</label>
            <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="4"
            />
            </div>
            <button type="submit">Submit</button>
        </form>
        </div>
  );
}

export default ContactUsComponent;