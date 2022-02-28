import React, { useState } from 'react'

const Subscription = () => {
  const [email, setEmail] = useState("");

  const subscribe = () => {

  }

  return (
    <div>
      <h2>Subscribe to our newsletter!!!!!!</h2>
      <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={subscribe}>Subscribe</button>
    </div>
  )
}

export default Subscription
