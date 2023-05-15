import { gql } from '@apollo/client';

export const QUERY_PRODUCE = gql`
  query produces {
    produce {
      _id
      name
    }
  }
`;


export const GET_FARMER = gql`
query farmers {
    farmer {
        id
        name
        email
        produce {
            name
            price
        }
    }
}`;
