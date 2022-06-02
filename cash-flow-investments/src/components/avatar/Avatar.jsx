import React from "react";
import "./Avatar.css";

function Avatar({ className, src, alt, ...props }) {
  return (
    <div>
      {src ? (
        <img
          {...props}
          className={`defaultClass ${className}`}
          src={src}
          alt={alt}
        />
      ) : (
        <img
          {...props}
          className={`defaultClass ${className}`}
          src="https://www.knowmuhammad.org/img/noavatarn.png"
          alt={alt}
        />
      )}
    </div>
  );
}

export default Avatar;
