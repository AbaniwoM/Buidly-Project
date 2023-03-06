import React from 'react';
import Typed from "react-typed";

const TypedComponent = () => {
  return (
    <div>
        <Typed
          strings={[
            "Fintech Solutions",
            "Web Apps",
            "Mobile Apps",
          ]}
          typeSpeed={150}
          backSpeed={100}
          loop
        />
    </div>
  )
}

export default TypedComponent;