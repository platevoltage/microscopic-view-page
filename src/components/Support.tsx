import { useState } from "react";

export default function Support() {
  const [ submitting, setSubmitting ] = useState(false);
  return (

    <div className="form-container">
      <h2>Support Form</h2>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          setSubmitting(true);
          const form = e.target as HTMLFormElement;

          // Collect form data
          const formData = new FormData(form);
          const data = Object.fromEntries(formData.entries());

          try {
            // Submit using fetch
            const response = await fetch("https://formsubmit.co/ajax/2c6bbb4c141e8f4a53d165f507d52c8e", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            });

            if (response.ok) {
              alert("Form submitted successfully!");
            } else {
              alert("Failed to submit the form.");
            }
          } catch (error) {
            console.error("Error submitting form:", error);
            alert("An error occurred. Please try again later.");
          } finally {
            setSubmitting(false);
            form.reset();
          }
        }}
      >
        <div className="form-group">
          <label htmlFor="subject">Subject :</label>
          <input type="text" id="subject" name="subject" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">How Can We Help? :</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="name">Your Name :</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <button type="submit" disabled={submitting}>{submitting ? "Please Wait...": "Submit"}</button>
        </div>
      </form>
    </div>

  );
}
