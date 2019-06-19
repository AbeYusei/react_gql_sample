import * as React from 'react';
import { Suspense, lazy } from 'react';
import { ApolloProvider } from 'react-apollo';
import { render } from 'react-dom';

import IconLoading from 'component/atoms/IconLoading';

import 'styles.css';
require('dotenv').config()

import githubApolloClient from 'api/github/client';

const UserName = lazy(() => import('component/molecules/UserName'));

function App() {
  return (
    <ApolloProvider client={githubApolloClient}>
      <div className="App">
        <Suspense fallback={<IconLoading />}>
          <UserName />
        </Suspense>
      </div>
    </ApolloProvider>
  );
}

const rootElement = document.getElementById('root');
render(<App />, rootElement);
