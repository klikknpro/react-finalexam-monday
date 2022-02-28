import React, { useState } from 'react'
import http from "axios";
import LoadingMask from './LoadingMask';

const Subscription = ({setIsShown}) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasSubscribed, setHasSubscribed] = useState(false);

  const subscribe = async() => {
    setIsLoading(true);
    // {email} body is jo
    const response = await http.post("https://seriescharacters.com/api/newsletter", {
      email: email
    });
    setIsLoading(false);
    setHasSubscribed(true);
    setTimeout(() => {
      setIsShown(false);
    }, 2 * 1000); // pelda kedveert 2
  };

  return (
    <div>
      <h2>Subscribe to our newsletter!!!!!!</h2>
      {isLoading ? <LoadingMask/> : hasSubscribed ? "Subscribed" :
        <div>
          <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <button onClick={subscribe} disabled={!(email.includes("@") && email.includes("."))}>Subscribe</button>
        </div>
      }
    </div>
  )
}

export default Subscription
