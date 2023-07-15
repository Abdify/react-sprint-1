import React, { useState } from "react";

const SliderContainer = ({ children }) => {
  const [isActive, setIsActive] = useState(true);

  // render prop

  return (
    <div>
      {children(isActive)}
      {/* {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          isActive,
        });
      })} */}
    </div>
  );
};

export default SliderContainer;
