import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import styled from "styled-components";
import axios from "axios";
import List from "./components/List";

export const Container = styled.div`
  max-width: 100vw;
  height: fit-content;
`;

export const getServerSideProps = async (context) => {
  const { data } = await axios.get(
    "https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json"
  );

  return {
    props: {
      data: data,
    },
  };
};

export default function Home({ data }) {
  return (
    <Container className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <List data={data}></List>
    </Container>
  );
}
