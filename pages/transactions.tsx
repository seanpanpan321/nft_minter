import { Default } from 'components/layouts/Default';
import { GetServerSideProps, NextPage } from 'next';
import { getSession } from 'next-auth/react';
import { ITransactions, Transactions } from 'components/templates/transactions';
import Moralis from 'moralis';

const TransactionsPage: NextPage<ITransactions> = (props) => {
  return (
    <Default pageName="Transactions">
      <Transactions {...props} />
    </Default>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });

  if (!session?.user.address) {
    return { props: { error: 'Connect your wallet first' } };
  }

  // Todo: Need to be fixed once the api is released for this
  const transactions = {
    result: [],
  };


  return {
    props: {
      transactions: JSON.parse(JSON.stringify(transactions.result)),
    },
  };
};

export default TransactionsPage;
