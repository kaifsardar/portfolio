import React from "react";


function App() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d39a1249-e8ed-4e1a-b10a-8ce0d0e1ce33");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact-form">
        <p>Contact Me</p>
      <form onSubmit={onSubmit}>
        <input type="text" name="name" placeholder="Name" required/>
        <input type="email" name="email" placeholder="Email" required/>
        <textarea name="message" placeholder="Message" required></textarea>

        <button type="submit">Submit Form</button>

      </form>
      <span>{result}</span>
    </div>

  );
}

export default App;