import Head from "next/head";
import Footer from "../src/components/Footer/Footer";
import Table from "../src/components/Table/Table";
import styled from "styled-components";

const StyledDiv = styled.div`
  background: linear-gradient(45deg, #414cd0, #d062c9);
`;

const StyledContainer = styled.div`
  margin: 0 auto;
  padding: 20px 0;
  width: 90%;
  max-width: 1200px;
  min-height: 100vh;
`;

export default function Home() {
  return (
    <StyledDiv>
      <Head>
        <title>Watch Battery Chart</title>
        <link rel="icon" href="/watch.svg" />
      </Head>

      <main>
        <StyledContainer>
          <Table />
        </StyledContainer>
      </main>
      <Footer />
    </StyledDiv>
  );
}
