import * as React from 'react';
import { Query } from 'react-apollo';
import IconLoading from 'component/atoms/IconLoading';

import { ReactComponent as Face } from 'assets/svg/face.svg';

import getLoginNameQuery from 'api/github/getLoginName';

export default () => (
  <Query query={getLoginNameQuery}>
    {({ loading, error, data }) => {
      if (loading) return <IconLoading />;
      if (error) {
        return (
          <div>
            <p>Error :(</p>
            <p>{`${error}`}</p>
          </div>
        );
      }

      const {login, name} = data.viewer;
      return (
        <div>
          <p>
            <Face /> {`${login}`}
          </p>
        </div>
      );
    }}
  </Query>)