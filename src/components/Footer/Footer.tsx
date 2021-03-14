import * as React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  text-align: center;

  color: #fff;

  a {
    color: #fff;
    text-decoration: underline;
  }
`;

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      Site created by{" "}
      <a href={"https://kyledavisdev.com"} target={"_blank"}>
        Kyle Davis
      </a>
    </StyledFooter>
  );
};

export default Footer;
