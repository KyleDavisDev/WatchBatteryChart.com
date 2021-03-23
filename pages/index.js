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

const StyledBubble = styled.div`
  background-color: #fff;
  color: #333;
  border-radius: 10px;
  padding: 10px 20px;
  margin-bottom: 15px;
  border: 1px solid #efefef;

  > h6 {
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 0;
  }

  > p {
    margin-bottom: 0;
  }
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
          <StyledBubble>
            <h6>Watch Battery Equivalence table</h6>
            <p>
              Below is a cross reference, or conversion chart, for the most
              common watch battery types and sizes. Both regular (silver oxide
              and mercury) and lithium batteries are shown. Simply take your
              watch battery number and use either the filter text-box or scroll
              down to locate the number and find its counterparts.
            </p>
          </StyledBubble>
          <Table />
        </StyledContainer>
      </main>
      <Footer />
    </StyledDiv>
  );
}
