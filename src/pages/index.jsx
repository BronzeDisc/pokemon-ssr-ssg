import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import styled from "styled-components";
import axios from "axios";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: blue;
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
  console.log(data);

  return (
    <Container className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>something</div>
    </Container>
  );
}
