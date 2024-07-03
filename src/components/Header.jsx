import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { RiBitCoinFill } from 'react-icons/ri';

const Header = () => {
  return (
    <>
      <Wrapper>
        <nav>
          <div className="logo">
            <h1>CryptoVerse</h1>
            <RiBitCoinFill size={35} color="yellow" opacity={0.2} />
          </div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/coins">Coins</Link>
            </li>
            <li>
              <Link to="/exchanges">Exchanges</Link>
            </li>
          </ul>
        </nav>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 10vh;
  /* backdrop-filter: blur(16px) saturate(180%); */
  /* -webkit-backdrop-filter: blur(16px) saturate(180%); */
  /* background-color: rgba(17, 25, 40, 0.75); */
  /* border-radius: 0 0 12px 12px; */
  /* border: 1px solid rgba(255, 255, 255, 0.125); */

  .logo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* width: 16%; */
    /* background-color: red; */
  }

  .logo h1 {
    font-size: 2rem;
    letter-spacing: 2px;
    font-weight: 400;
  }

  nav {
    display: flex;
    justify-content: space-between;
    width: 80%;
    height: 10vh;
    margin: 0 auto;
    align-items: center;
    ul {
      display: flex;
      gap: 2rem;
      align-items: center;
    }

    ul li {
      list-style: none;
      /* text-transform: uppercase; */
      font-size: 1.2rem;

      font-weight: 300;
      a {
        text-decoration: none;
        color: white;
        transition: opacity 0.1s ease-in;
        &:hover {
          opacity: 0.4;
        }
      }
    }
  }
`;

export default Header;
