import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query SearchUsers($searchQuery: String!, $first: Int!, $after: String) {
    search(query: $searchQuery, type: USER, first: $first, after: $after) {
      edges {
        node {
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
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;

export const GET_REPOS = {};
