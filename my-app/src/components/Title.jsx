import React from "react";

const Title = (props) => {
  const { divClass, headerText } = props;
  return (
    <div className="container" data-aos="fade-up">
      <div className={divClass}>
        <h2 className="text-center">{headerText}</h2>
      </div>
    </div>
  );
};

export default Title;
