import * as React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  text-align: center;
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
