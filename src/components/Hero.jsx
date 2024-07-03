import React from 'react';
import styled from 'styled-components';

const Hero = () => {
  return (
    <>
      <Wrapper>
        <main>
          <div className="text">
            <h1>CryptoVerse</h1>

            <h4>
              Your quick guide to crypto prices! Real-time updates, trends, and
              market caps – all in one place. Welcome to CryptoVerse.
            </h4>
          </div>
          <div className="coin-images">
            <img
              src="https://images.ctfassets.net/c5bd0wqjc7v0/5o0IbUnXunFKmiSC31gK6j/c9da092eda3ebc34941dfa3d107437f4/Type_Circles_4x.png?fl=progressive&q=100&w=560"
              alt=""
            />
          </div>
        </main>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  height: 100%;
  width: 100%;

  main {
    width: 80%;
    margin: 0 auto;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .text {
      width: 50%;

      h1 {
        font-size: clamp(4rem, 5vw, 7rem);
        font-weight: 400;
        letter-spacing: 1px;
      }
      h4 {
        font-size: clamp(1rem, 2.5vw, 1.5rem);
        font-weight: 200;
      }
    }
    .coin-images {
      width: 50%;
      height: 70%;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      img {
        /* background-color: red; */
        border-radius: 50%;
        opacity: 0.6;
        transition: opacity 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
        &:hover {
          opacity: 1;
        }
      }
    }
  }
`;

export default Hero;
