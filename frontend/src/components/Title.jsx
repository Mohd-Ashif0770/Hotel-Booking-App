import React from "react";

const Title = ({
  title,
  subtitle,
  align = "center",
  font = "playfair",
  titleClassName = "",
  subtitleClassName = "",
}) => {
  return (
    <div className={`flex flex-col items-${align} justify-center gap-1 text-${align}`}>
      <h2 className={`text-3xl font-${font} font-bold text-gray-700 ${titleClassName}`}>{title}</h2>
      <p className={`text-sm font-base text-gray-500 ${subtitleClassName}`}>
        {subtitle}  
      </p>
    </div>
  );
};

export default Title;
