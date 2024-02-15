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

export const GET_REPOS = gql`
  query SearchRepos($searchQuery: String!, $first: Int!, $after: String) {
    search(
      query: $searchQuery
      type: REPOSITORY
      first: $first
      after: $after
    ) {
      edges {
        node {
          ... on Repository {
            name
            description
            url
            stargazerCount
            primaryLanguage {
              name
              color
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

// export const GET_REPOS = gql`
//   query GetUserRepos($userLogin: String!, $first: Int!, $after: String) {
//     user(login: $userLogin) {
//       login
//       repositories(
//         first: $first
//         orderBy: { field: UPDATED_AT, direction: DESC }
//         after: $after
//       ) {
//         totalCount
//         edges {
//           cursor
//           node {
//             name
//             url
//             stargazerCount
//             languages(first: 5) {
//               nodes {
//                 name
//                 color
//                 id
//               }
//             }
//             description
//           }
//         }
//         pageInfo {
//           hasNextPage
//           endCursor
//         }
//       }
//     }
//   }
// `;
