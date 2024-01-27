import React from 'react'
import "./trendingNFTS.css"
import Slider from 'react-slick'
import TRENDING_NFTS from "../../data/trendingNFTs";
import TrendingCards from "./TrendingCards/TrendingCards";
import Button from '../../common/Button/Button';
import { useNavigate } from 'react-router-dom';

const settings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  autoPlay: true,
  speed: 500,
  arrow: false,
};


const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");
const runApp = async () => {
  await Moralis.start({
    apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6Ijc0YjY5ZDdkLWIwMDItNGFiYy04MWEyLWJmNTI4NWUyYzQ4NyIsIm9yZ0lkIjoiMzY5MDQxIiwidXNlcklkIjoiMzc5Mjc5IiwidHlwZUlkIjoiZGU0MjFlMTYtZDZhMi00YzNlLTg3ZDctMTUwMTI0MmMxMzEzIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MDMxNDIwNTQsImV4cCI6NDg1ODkwMjA1NH0.gEQyXlzpoW1e5A38FrxMThBy_UcV-X0hlq8TgQ6IEjA",
    // ...and any other configuration
  });
  const address = "0xf2f0E62B2F19A30782A1e6a1D666360a551a3B77";
  const chain = EvmChain.ETHEREUM;
  const response = await Moralis.EvmApi.nft.getWalletNFTs({
    address,
    chain,
  });
  console.log(response.toJSON());
};

// runApp();

const TrendingNFTS = () => {

  const explore = useNavigate();

  return (
    <div className='trending-nfts'>
      <div className='tn-title absolute-center'>
        <span className='heading-gradient'>Trending NFTs</span>
      </div>
      <div className='tn-bg-blob'></div>
      <Slider {...settings}> 
        {TRENDING_NFTS.map((_nfts) => {
          return(
            <TrendingCards nft={_nfts} />
          )
        }
        )}
      </Slider>
      <div className='tn-btn absolute-center'>
        <Button btnText='SEE MORE' type='Secondary' btnOnClick={runApp} customClass='seemore-btn'></Button>
      </div>
    </div>
  )
}

export default TrendingNFTS