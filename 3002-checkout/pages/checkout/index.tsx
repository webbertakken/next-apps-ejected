import React from 'react';
import Head from 'next/head';

const Checkout = (props) => (
  <div>
    <Head>
      <title>checkout</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="hero">
      <h1>checkout page</h1>
      <h3 className="title">
        {`This is a federated page owned by ${
          process.env.NEXT_PUBLIC_CHECKOUT_URL || 'http://localhost:3002'
        }!!`}
      </h3>
      <p className="description">
        This application serves code from <code>src/</code> folder.
      </p>
      <span>
        {' '}
        Data from federated <pre>getInitalProps</pre>
      </span>
      <br />
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 20px;
      }
      .title,
      .description {
        text-align: center;
      }
    `}</style>
  </div>
);

Checkout.getInitialProps = async () => {
  const timeout = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  // this will resolve after 3 seconds
  const timerPromise = timeout(500).then(() => ({
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false,
  }));

  return Promise.race([timerPromise]);
};
export default Checkout;
