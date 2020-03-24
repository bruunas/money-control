import React from 'react'
import styled from 'styled-components'
import config from './config'

const Container = styled.div`
  background: ${config.colors.red};
`

const App = () => {
  return (
    <Container>
      <h1>Hello World!</h1>
    </Container>
  );
}

export default App;
