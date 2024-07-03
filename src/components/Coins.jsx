import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import styled from 'styled-components';
import Header from './Header';
import { baseUrl } from './Baseurl';
import { Link } from 'react-router-dom';

const Coins = () => {
  const [currency, setCurrency] = useState('usd');
  const url = `${baseUrl}/coins/markets?vs_currency=${currency}`;
  const currencySymbol = currency === 'inr' ? 'inr' : '$';

  const [coin, setCoin] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getCoinData = async () => {
      const { data } = await axios.get(url);
      console.log(data);
      setCoin(data);
      setLoading(false);
    };
    getCoinData();
  }, [currency]);

  return (
    <Wrapper>
      <Header></Header>

      {loading ? (
        <Loader></Loader>
      ) : (
        <main>
          <div className="btns">
            <button onClick={() => setCurrency('inr')}>inr</button>
            <button onClick={() => setCurrency('usd')}>usd</button>
          </div>

          {coin.map((coins, i) => {
            return (
              <Coincard
                coins={coins}
                i={i}
                currencySymbol={currencySymbol}
              ></Coincard>
            );
          })}
        </main>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: rgb(12, 97, 111);
  background: linear-gradient(
    83deg,
    rgba(12, 97, 111, 1) 22%,
    rgba(0, 9, 27, 1) 74%
  );
  background-repeat: no-repeat;
  background-size: cover;

  main {
    width: 80%;
    height: 100%;
    /* height: 100vh; */
    margin: 0 auto;
    .cards {
      /* backdrop-filter: blur(8px) saturate(180%);
      -webkit-backdrop-filter: blur(8px) saturate(180%);
      background-color: rgba(17, 25, 40, 0.44);
      border-radius: 12px; */
      border: 1px solid rgba(255, 255, 255, 0.125);
      display: flex;

      justify-content: space-between;
      align-items: center;
      gap: 20px;
      margin-top: 20px;
      padding: 1.3rem;
    }
    .desc {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 4rem;
      width: 20%;
      /* background-color: red; */
      .name:hover {
        cursor: pointer;
        opacity: 0.3;
      }
      .image {
        font: 2px;
      }
    }
    .btns {
      width: 80vw;
      height: 6vh;
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      gap: 2vw;

      /* background-color: red; */

      button {
        padding: 1vh 3vw;
        background-color: transparent;
        border-radius: 5px;
        border: 1px solid rgba(255, 255, 255, 0.125);
        color: white;
        transition: all 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
        cursor: pointer;
        &:hover {
          background-color: white;
          color: black;
        }
      }
    }

    .price,
    .rank,
    .symbols {
      width: 10%;
      /* background-color: red; */
      text-align: left;
    }
  }
`;

const Coincard = ({ coins, i, currencySymbol }) => {
  const profit = coins.price_change_percentage_24h > 0;
  return (
    <Link
      to={`/coins/${coins.id}`}
      style={{ color: 'white', textDecoration: 'none' }}
    >
      <div key={i} className="cards">
        <div className="desc">
          <div className="image">
            <img src={coins.image} height={'50px'} alt="" />
          </div>
          <div className="name">{coins.name}</div>
        </div>
        <div className="price">
          {' '}
          {currencySymbol} {coins.current_price}
        </div>
        <div
          style={profit ? { color: 'green' } : { color: 'red' }}
          className="rank"
        >
          {profit
            ? '+' + coins.price_change_percentage_24h.toFixed(2)
            : coins.price_change_percentage_24h.toFixed(2)}
        </div>
        <div className="symbol">{coins.symbol}</div>
      </div>
    </Link>
  );
};

export default Coins;
