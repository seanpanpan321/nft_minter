import { Box, Grid, Heading } from '@chakra-ui/react';
import { SolNFTCard } from 'components/modules';
import { FC, useEffect } from 'react';
import { ISolNFTBalances } from './types';
import Image from 'next/image';
const SolNFTBalances: FC<ISolNFTBalances> = ({ balances }) => {
  useEffect(() => console.log('balances: ', balances), [balances]);
  return (
    <>
      <Heading size="lg" marginBottom={6}>
      Your receipts
      </Heading>
      {balances?.length ? (
        <Grid templateColumns="repeat(auto-fit, minmax(280px, 1fr))" gap={6}>
          {balances?.map((balance, key) => (
            <SolNFTCard nftAddress={balance.mint} key={key} />
          ))}
        </Grid>
      ) : (
        <Box border='2px' borderRadius="xl" padding="24px 18px">
        <div className="album py-5 bg-light" >
        <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div className="col">
            <div className="card shadow-sm">
            <Image src={'/Demo_Restaurant_Receipt.png'} width="100%" height= "220" alt = 'demoRestaurant'/>
              <div className="card-body">
                <b> Demo Restaurant </b>
                <p className="card-text">metaplex standard</p>
                  <a href = 'https://solscan.io/token/6GrJtUPdZ73aXmBGsQ4AHx28bgqkrCmjL1abXEfhXbAL?cluster=devnet#metadata'>
                  https://solscan.io/token/6GrJtUPdZ73aXmBGsQ4AHx28bgqkrCmjL1abXEfhXbAL?cluster=devnet#metadata  
                  </a>      
              </div>
            </div>
          </div>
          </div>
          </div>
          </div>
          </Box>
      )}
    </>
  );
};

export default SolNFTBalances;
