import { FunctionComponent, useState } from "react";
import styled from "styled-components";
import { Button, Card, Inline, Stack, Text, Strong } from "@construct-kit/core";
import mockData from "./mockData";

const Layout = styled.main`
  margin: 1rem;
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledInline = styled(Inline)`
  flex-direction: column;
  align-items: start;

  @media only screen and (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const StyledCard = styled(Card)`
  max-width: 300px;
  margin: 0 auto;
  overflow: hidden;
  padding: 10px;
`;

const Logo = styled.img `
  width: auto;
  height: 20px;
  max-width: 100%;
`

const StyledTitle = styled(Text)`
  font-weight: bold;
  text-align: center;
`;

const Banner = styled.div`
  background-color: ${(props: {bgColor: string}) => props.bgColor};
`;

const StyledButton = styled(Button)`
  display: none;
`;

const ImgContainer = styled.div`
  position: relative;
  &: hover {
    button {
      display: inline-block;
    }
  }
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 20px; 
  display: flex;
  justify-content: center;
  width: 100%;
`


const StyledImg = styled.img`
  object-fit: contain;
  width: 100%;
  height: auto;
  max-width: 100%;
`;



//   // position: absolute;
//   // bottom: 15px;
//   // transform: translate(50%, 0);


const Screen: FunctionComponent = () => {
  // console.log(data);
  // console.log(data.results);
  // const price = data.results.map((res) => res.price);
  // console.log(price);
  // const logo = data.results.map((res) => res.agency.logo);
  // console.log(logo);
  const [data, setData] = useState(mockData);
  function addPropertyHandler() {
     console.log("You clicked on Add Property")
  }

  return (
    <Layout>
      <StyledInline>
        <Stack>
          <StyledTitle>Results</StyledTitle>
          {data.results.map((res) => (
            <StyledCard>
              <Banner bgColor={res.agency.brandingColors.primary}>
                <Logo src={res.agency.logo} />
                {/* <Text>ID: {res.id}</Text> */}
              </Banner>
              <ImgContainer>
                <StyledImg src={res.mainImage} />
                <ButtonContainer>
                <StyledButton onClick={addPropertyHandler}>Add Property</StyledButton>
                </ButtonContainer>
              </ImgContainer>
              <Text>Price: {res.price}</Text>
            </StyledCard>
          ))}
        </Stack>
        <Stack>
          <StyledTitle>Saved Proprieties</StyledTitle>
          {data.saved.map((res) => (
            <StyledCard>
              <Banner bgColor={res.agency.brandingColors.primary}>
                <Logo src={res.agency.logo} />
                {/* <Text>ID: {res.id}</Text> */}
              </Banner>
              <StyledImg src={res.mainImage} />
              <Text>Price: {res.price}</Text>
            </StyledCard>
          ))}
        </Stack>
      </StyledInline>
    </Layout>
  );
};

export default Screen;
