import { Box, Grid, Heading } from '@chakra-ui/react';
import { NFTCard } from 'components/modules';
import { FC, useEffect } from 'react';
import { INFTBalances } from './types';

const NFTBalances: FC<INFTBalances> = ({ balances }) => {
  useEffect(() => console.log('balances: ', balances), [balances]);

  return (
    <>
      <Heading size="lg" marginBottom={6}>
        Your receipts
      </Heading>
      {balances?.length ? (
        <Grid templateColumns="repeat(auto-fit, minmax(280px, 1fr))" gap={6}>
          {balances.map((balance, key) => (
            <NFTCard {...balance} key={key} />
          ))}
        </Grid>
      ) : (
        <Box>
          <div className="col">
            <div className="card shadow-sm">
              <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Restaurant" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Restaurant</text></svg>
              <div className="card-body">
                <b> Restaurant </b>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-secondary">Order</button>   
                  </div>
                  <small className="text-muted">9 mins</small>
                </div>
              </div>
            </div>
          </div>
        </Box>
      )}
    </>
  );
};

export default NFTBalances;
