import React, { Fragment } from "react";

import { GET_CATEGORIES_QUERY } from "../queries";
import { Query } from "react-apollo";
import MenuItem from "./MenuItem";

const CategoryMenu = () => {
  return (
    <div className="container">
      <div className="row">
        <Query query={GET_CATEGORIES_QUERY}>
          {({ data, loading, error }) => {
            if (loading) return <div>loading...</div>;
            if (error) return <div>error!</div>;
            console.log(data);
            return (
              <Fragment>
                {data.categories.map((category) => (
                  <div className="col-md-6" key={category.id}>
                    <MenuItem category={category} />
                  </div>
                ))}
              </Fragment>
            );
          }}
        </Query>
      </div>
    </div>
  );
};

export default CategoryMenu;
