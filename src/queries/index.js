import { gql } from "apollo-boost";

export const GET_CATEGORIES_QUERY = gql`
  query CategoriesQuery {
    categories {
      id
      name
      url
      productSet {
        id
        name
      }
    }
  }
`;

export const GET_CATEGORIES_BY_NAME_QUERY = gql`
  query CategoryNameQuery($name: String!) {
    category(name: $name) {
      name
      productSet {
        id
        name
      }
    }
  }
`;
