import React from "react";

import { GET_CATEGORIES_QUERY } from "../queries";
import { Query } from "react-apollo";

const Home = () => {
  return (
    <div>
      <Query query={GET_CATEGORIES_QUERY}>
        {({ data, loading, error }) => {
          if (loading) return <div>loading...</div>;
          if (error) return console.log(error);

          return <div>{JSON.stringify(data)}</div>;
        }}
      </Query>
    </div>
  );
};

export default Home;
