import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const TitleWrapper = ({ title, children }) => {
  useEffect(() => {
    document.title = `${title} | GameHub`;
  }, [title]); 

  return <>{children}</>;
};

export default TitleWrapper;
