import React from 'react';
import { Container, Message, Icon } from 'semantic-ui-react';
import "./loader.css";

const Loader = () => {
  return (
    <Container className="loader-cont">
      <Message icon size="big"  className="loader-text-cont">
        <Icon name="circle notched" loading />
        <Message.Content>
          <Message.Header style={{marginTop:"15px"}}>Processing....</Message.Header>
        </Message.Content>
      </Message>
    </Container>
  );
};

export default Loader;
