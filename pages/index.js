import Head from "next/head";
import Footer from "../src/components/Footer/Footer";
import Table from "../src/components/Table/Table";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Watch Battery Chart</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div class={"container"}>
          <h1>Watch Battery Size Equivalence Chart</h1>

          <Table />
        </div>
      </main>
      <Footer />
    </div>
  );
}
