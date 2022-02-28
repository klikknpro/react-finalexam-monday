import React, { useState } from 'react'
import http from "axios";

const Subscription = () => {
  const [email, setEmail] = useState("");

  const subscribe = async() => {
    // {email} body is jo
    const response = await http.post("https://seriescharacters.com/api/newsletter", {
      email: email
    });

  }

  return (
    <div>
      <h2>Subscribe to our newsletter!!!!!!</h2>
      <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={subscribe} disabled={!(email.includes("@") && email.includes("."))}>Subscribe</button>
    </div>
  )
}

export default Subscription
