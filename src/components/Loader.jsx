import React from 'react';
import styled from 'styled-components';
import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => {
  return (
    <>
      <Load>
        <InfinitySpin
          visible={true}
          width="200"
          color="#ffffff"
          ariaLabel="infinity-spin-loading"
        />
        <h4>Fetching Data....</h4>
      </Load>
    </>
  );
};

const Load = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  h4 {
    font-weight: 200;
    font-style: italic;
  }
`;

export default Loader;
