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
        <div className={"container"}>
          <h1>Watch Battery Size Equivalence Chart</h1>
          <p>
            Here is a quick, easy, and to the point watch battery conversion
            chart.
          </p>

          <Table />
        </div>
      </main>
      <Footer />
    </div>
  );
}
