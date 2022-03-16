import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  width: 150px;
  height: 160px;
  border-radius: 10px;
  margin: 5px;
  border-radius: 10px;
  overflow: hidden;
  transform: scale(0.9);
  transition-duration: 0.2s;

  :hover {
    cursor: pointer;
    /* transform: scale(1) rotate(5deg); */
    /* display: ${(props) => `${props.rotate}deg`}; */
    transform: scale(1) rotate(${(props) => `${props.rotate}deg`});
  }
`;

const List = ({ data }) => {
  console.log(data);
  const router = useRouter();
  const [img, setImg] = useState("");
  const [images, setImages] = useState([]);

  useEffect(() => {
    const done = async () => {
      if (Object.entries(data).length !== 0) {
        // const detailedItem = await axios.get(
        //   `https://jherr-pokemon.s3.us-west-1.amazonaws.com/pokemon/${data.id}.json`
        // );

        data.forEach((item) => {
          const p = item.image.replace("images/", "");
          const picture = `https://raw.githubusercontent.com/jherr/pokemon/main/images/${p}`;

          setImages((images) => [...images, picture]);
        });
      }
    };

    done();
  }, []);

  const randomRotate = () => {
    return Math.round(Math.random() * 40) - 20;
  };

  return (
    <Container>
      {data.map((item, i) => {
        return (
          <Card
            key={i}
            rotate={randomRotate()}
            onClick={() => {
              router.push(
                {
                  pathname: "/detailed",
                  query: item,
                },
                "/detailed"
              );
            }}
          >
            {images[i] ? (
              <img src={images[i]} alt="img" width={150} height={170} />
            ) : (
              <></>
            )}
          </Card>
        );
      })}
    </Container>
  );
};

export default List;