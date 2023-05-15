import { gql } from '@apollo/client';

export const QUERY_PRODUCE = gql`
  query produces {
    produce {
      _id
      name
    }
  }
`;
