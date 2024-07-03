import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { baseUrl } from './Baseurl';
import styled from 'styled-components';
import Header from './Header';
import Loader from './Loader';
import { BiSolidUpArrow, BiSolidDownArrow } from 'react-icons/bi';

const CoinDetails = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState([]);
  const [loading, setLoading] = useState(true);
  const profit = coin.market_data?.market_cap_change_percentage_24h > 0;
  useEffect(() => {
    const getCoin = async () => {
      try {
        const { data } = await axios.get(`${baseUrl}/coins/${id}`);
        setCoin(data);
        setLoading(false);
        console.log(data);
      } catch (error) {
        setLoading(false);

        console.log(error);
      }
    };
    getCoin();
  }, []);
  return (
    <Wrapper>
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <>
          <main>
            <div className="Rside">
              <div className="image">
                <img src={coin.image.large} alt="" height={'200px'} />
              </div>
              <div className="name">{coin.name}</div>

              <div className="profit">
                {profit ? (
                  <BiSolidUpArrow style={{ color: 'green' }} />
                ) : (
                  <BiSolidDownArrow style={{ color: 'red' }} />
                )}
                {coin.market_data.market_cap_change_percentage_24h}%
              </div>
              <div className="rank">
                {' '}
                #{coin.market_cap_rank} <br />
                <p>Rank</p>
              </div>

              <div className="price">
                {' '}
                ${coin.market_data.current_price['usd']} <br /> <p>Price</p>
              </div>
              <div className="desc">{coin.description['en'].split('.')[0]}</div>
            </div>
            <div className="graph"></div>
          </main>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  /* background: rgb(12, 97, 111);
  background: linear-gradient(
    83deg,
    rgba(12, 97, 111, 1) 22%,
    rgba(0, 9, 27, 1) 74%
  ); */

  background-repeat: no-repeat;
  background-size: cover;
  main {
    width: 80%;
    height: 100%;

    /* border: 1px solid rgba(255, 255, 255, 0.3); */
    height: 80vh;
    margin: 0 auto;
    display: flex;

    .Rside {
      width: 35%;
      /* background-color: red; */
      padding-left: 20px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 20px;

      .name {
        font-size: clamp(2rem, 3rem, 3rem);
      }
      .desc {
        font-size: 0.9rem;
        width: 70%;
        /* background-color: red; */
        color: #c9c8c8b2;
        /* border-top: 1px solid #a3a0a08b */
        padding-top: 10px;
      }
      .rank {
        font-size: 2rem;
        color: gold;
        p {
          color: #a3a0a08b;
          font-size: 0.5em;
        }
      }
      .price {
        font-size: 2rem;
        p {
          color: #a3a0a08b;
          font-size: 0.5em;
        }
      }
    }
  }
`;

export default CoinDetails;
