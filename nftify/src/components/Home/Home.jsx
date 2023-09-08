import React, { useEffect, useState } from "react";
import homecss from "./Home.module.css";
import axios from "axios";

import firstOutline from "../../icons/outline (1).png";
import secondOutline from "../../icons/outline (2).png";
import thirdOutline from "../../icons/outline (3).png";
import forthOutline from "../../icons/outline (4).png";

export const Home = () => {
  const [bitcoinArr, setBitcoinArr] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getData = async () => {
    try {
      let res = await axios(
        `https://api.dexscreener.com/latest/dex/search?q=${searchValue}`
      );
      setBitcoinArr(res.data.pairs);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  const HandelChange = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    if(searchValue == ""){
        setBitcoinArr([])
    }

    getData();

  }, [searchValue])



  return (
    <div className={homecss.Home}>

<div className={homecss.Hamburger}>

<div>
  <img width={"25px"} src="https://icon-library.com/images/hamburger-icon-white/hamburger-icon-white-6.jpg" alt="" />
</div>

<div>
<p>NFTify
</p>
</div>
</div>




      <div className={homecss.navbarSearch}>
        <form>
          <input
            value={searchValue}
            onChange={(e) => HandelChange(e)}
            type="search"
            placeholder="Search"
          />
          <button type="submit">Search</button>
        </form>
        <button className={homecss.connectBtn}>Connect</button>
      </div>
      <div className={homecss.bitcoinsData}>
        {bitcoinArr.length !== 0 && (
          <p className={homecss.headingToken}>Token Search Results</p>
        )}

        {bitcoinArr &&
          bitcoinArr.map((ele) => {
            return (
              <div className={homecss.mainDiv}>
                <div className={homecss.mainBox}>
                  <p className={homecss.heading}>Basic info</p>
                  <div className={homecss.Box}>
                    <div className={homecss.firstDiv}>
                      <p>Pair created at</p>
                      <p>Symbol</p>
                      <p>Dex ID</p>
                      <p>Pair Address</p>
                    </div>
                    <div className={homecss.firstDiv}>
                      <p>#{ele.pairCreatedAt}</p>
                      <p>{ele.chainId}</p>
                      <p>{ele.dexId}</p>
                      <p>#{ele.pairAddress}</p>
                    </div>
                  </div>
                  <div className={homecss.iconBox}>
                    <img src={firstOutline} alt="firstOutline" />
                  </div>
                </div>

                <div className={homecss.mainBox}>
                  <p className={homecss.heading}>Base Token</p>
                  <div className={homecss.Box}>
                    {" "}
                    <div className={homecss.firstDiv}>
                      <p>Name</p>
                      <p>Symbol</p>
                      <p>Address</p>
                    </div>
                    <div className={homecss.firstDiv}>
                      <p>{ele.baseToken.name}</p>
                      <p>{ele.baseToken.symbol}</p>
                      <p>#{ele.baseToken.address}</p>
                    </div>
                  </div>
                  <div className={homecss.iconBox}>
                    <img src={secondOutline} alt="secondOutline" />
                  </div>
                </div>

                <div className={homecss.mainBox}>
                  <p className={homecss.heading}>Quote Token</p>
                  <div className={homecss.Box}>
                    {" "}
                    <div className={homecss.firstDiv}>
                      <p>name</p>
                      <p>Symbol</p>
                      <p>Address</p>
                    </div>
                    <div className={homecss.firstDiv}>
                      <p>{ele.quoteToken.name}</p>
                      <p>{ele.quoteToken.symbol}</p>
                      <p>#{ele.quoteToken.address}</p>
                    </div>
                  </div>
                  <div className={homecss.iconBox}>
                    <img src={thirdOutline} alt="thirdOutline" />
                  </div>
                </div>

                <div className={homecss.mainBox}>
                  <p className={homecss.heading}>Price</p>
                  <div className={homecss.Box}>
                    {" "}
                    <div className={homecss.firstDiv}>
                      <p>Price Native</p>
                      <p>Price USD</p>
                    </div>
                    <div className={homecss.firstDiv}>
                      <p>{ele.priceNative}</p>
                      <p>{ele.priceUsd}</p>
                    </div>
                  </div>

                  <div className={homecss.iconBox}>
                    <img src={forthOutline} alt="forthOutline" />
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
