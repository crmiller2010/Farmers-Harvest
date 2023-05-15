import { gql } from '@apollo/client';

export const QUERY_PRODUCE = gql`
  query produces {
    produce {
      _id
      name
    }
  }
`;

export const QUERY_FARMER = gql`
    query produces {
        produce {
            name
            price
            farmer
                name
                email
            
        }
    }
    `;
