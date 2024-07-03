import React, { useEffect, useState } from 'react';
import Header from './Header';
import styled from 'styled-components';
import axios from 'axios';
import Loader from './Loader';

const Exchanges = () => {
  const [loading, setLoading] = useState(true);

  const [exchanges, setExchanges] = useState([]);
  const url = 'https://api.coingecko.com/api/v3/exchanges';
  useEffect(() => {
    const getExchangesData = async () => {
      const { data } = await axios.get(url);
      console.log(data);
      setExchanges(data);
      setLoading(false);
    };
    getExchangesData();
  }, []);
  return (
    <Wrapper>
      <Header></Header>
      {loading ? (
        <Loader></Loader>
      ) : (
        <>
          <main>
            <div className="cards2">
              <div className="desc">
                <div className="image">Image</div>
                <div className="name">Name</div>
              </div>
              <div className="price">Price</div>
              <div className="rank">Rank</div>
              <div className="year">Year</div>
            </div>

            {exchanges.map((item, i) => {
              return (
                <div key={i} className="cards">
                  <div className="desc">
                    <div className="image">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="name">{item.name}</div>
                  </div>
                  <div className="price">
                    {item.trade_volume_24h_btc.toFixed(0)}
                  </div>
                  <div className="rank">{item.trust_score_rank}</div>
                  <div className="year">{item.year_established}</div>
                </div>
              );
            })}
          </main>
        </>
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
    }

    .cards2 {
      /* border-radius: 12px; */
      border-bottom: 2px solid rgba(255, 255, 255, 0.411);
      font-style: italic;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
      margin-top: 20px;
      padding: 1.3rem;
    }
  }
`;

export default Exchanges;
