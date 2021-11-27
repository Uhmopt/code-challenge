import { gql } from "@apollo/client";

export const QUERY_GET_MOVIES = gql`
  query GetExchangeRates {
    movies {
      image
      title
      description
    }
  }
`;
