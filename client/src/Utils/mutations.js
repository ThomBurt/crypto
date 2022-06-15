import { gql } from '@apollo/client';

import { USER_INFO } from './Fragment';

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $firstName: String!, $lastName: String!, $email: String!, $password: String!) {
  addUser(username: $username, firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
    token
    user {
      _id
      username
      firstName
      lastName
    }
  }
}
`;


export const USER_UPDATE = gql`
    mutation userUpdate($input: UserUpdateInput!) {
        userUpdate(input: $input) {
            ...userInfo
        }
    }
    ${USER_INFO}
`;



