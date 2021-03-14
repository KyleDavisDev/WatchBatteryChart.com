import Head from "next/head";
import Footer from "../src/components/Footer/Footer";
import Table from "../src/components/Table/Table";
import styled from "styled-components";

const StyledDiv = styled.div`
  background: linear-gradient(45deg, #4158d0, #c850c0);
`;

export default function Home() {
  return (
    <StyledDiv>
      <Head>
        <title>Watch Battery Chart</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={"container"}>
          <h1>Watch Battery Size Equivalence Chart</h1>
          <Table />
        </div>
      </main>
      <Footer />
    </StyledDiv>
  );
}
