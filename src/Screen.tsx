import { FunctionComponent } from "react";
import styled from "styled-components";
import { Stack, Text, Link, Strong } from "@construct-kit/core";

import ArgoDance from "./argo-dance.gif";

const Layout = styled.main`
  margin: 1rem;
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ArgoImg = styled.img`
  height: 100px;
`;

const Screen: FunctionComponent = () => {
  return (
    <Layout>
      <Stack alignItems="center">
        <ArgoImg src={ArgoDance} alt="Dancing argonaut mascot" />
        <Text>
          Edit <Strong>src/Screen.tsx</Strong> and save to reload.
        </Text>
        <Link href="https://pages.git.realestate.com.au/consumer-experience/argonaut/">
          Learn Argonaut
        </Link>
      </Stack>
    </Layout>
  );
};

export default Screen;
