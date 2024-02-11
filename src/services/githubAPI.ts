import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query SearchUsers($searchQuery: String!) {
    search(query: $searchQuery, type: USER, first: 10) {
      nodes {
        ... on User {
          login
          name
          avatarUrl
          bio
          id
          followers {
            totalCount
          }
          repositories {
            totalCount
          }
        }
      }
    }
  }
`;

export const GET_REPOS = {};
