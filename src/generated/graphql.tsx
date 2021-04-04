import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Any: any;
  Map: any;
  Time: any;
  Timestamp: any;
  Upload: any;
};

export enum Gender {
  Male = 'MALE',
  Female = 'FEMALE',
  Other = 'OTHER',
}

export enum GrantType {
  AuthorizationCode = 'AUTHORIZATION_CODE',
  Password = 'PASSWORD',
}

export type Mutation = {
  __typename?: 'Mutation';
  noteCreate: Note;
  userCreate: User;
  tokenCreate: Token;
};

export type MutationNoteCreateArgs = {
  note: NoteInput;
};

export type MutationUserCreateArgs = {
  user: UserInput;
};

export type MutationTokenCreateArgs = {
  userCredential: UserCredential;
};

export type Note = {
  __typename?: 'Note';
  id: Scalars['ID'];
  title: Scalars['String'];
  content: Scalars['String'];
  createdBy?: Maybe<User>;
  createdAt: Scalars['Time'];
};

export type NoteInput = {
  title: Scalars['String'];
  content: Scalars['String'];
  createdBy: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  note?: Maybe<Note>;
  notes: Array<Note>;
  user?: Maybe<User>;
};

export type QueryNoteArgs = {
  id: Scalars['Int'];
};

export type QueryNotesArgs = {
  limit: Scalars['Int'];
  offset: Scalars['Int'];
};

export type Token = {
  __typename?: 'Token';
  tokenType: TokenType;
  accessToken: Scalars['String'];
  expiresIn: Scalars['Timestamp'];
  refreshToken?: Maybe<Scalars['String']>;
};

export enum TokenType {
  Bearer = 'BEARER',
}

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  avatarURL?: Maybe<Scalars['String']>;
  createdAt: Scalars['Time'];
  gender: Gender;
};

export type UserCredential = {
  grantType: GrantType;
  userName: Scalars['String'];
  password: Scalars['String'];
  scope?: Maybe<Scalars['String']>;
};

export type UserInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  avatarURL?: Maybe<Scalars['String']>;
  gender: Gender;
};

export type GetNotesQueryVariables = Exact<{
  limit: Scalars['Int'];
  offset: Scalars['Int'];
}>;

export type GetNotesQuery = { __typename?: 'Query' } & {
  notes: Array<
    { __typename?: 'Note' } & Pick<Note, 'id' | 'title' | 'content'> & {
        createdBy?: Maybe<
          { __typename?: 'User' } & Pick<User, 'id' | 'firstName' | 'lastName'>
        >;
      }
  >;
};

export type TokenCreateMutationVariables = Exact<{
  userName: Scalars['String'];
  password: Scalars['String'];
}>;

export type TokenCreateMutation = { __typename?: 'Mutation' } & {
  tokenCreate: { __typename?: 'Token' } & Pick<
    Token,
    'accessToken' | 'refreshToken' | 'expiresIn'
  >;
};

export const GetNotesDocument = gql`
  query getNotes($limit: Int!, $offset: Int!) {
    notes(limit: $limit, offset: $offset) {
      id
      title
      content
      createdBy {
        id
        firstName
        lastName
      }
    }
  }
`;

/**
 * __useGetNotesQuery__
 *
 * To run a query within a React component, call `useGetNotesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNotesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNotesQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useGetNotesQuery(
  baseOptions: Apollo.QueryHookOptions<GetNotesQuery, GetNotesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetNotesQuery, GetNotesQueryVariables>(
    GetNotesDocument,
    options,
  );
}
export function useGetNotesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetNotesQuery,
    GetNotesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetNotesQuery, GetNotesQueryVariables>(
    GetNotesDocument,
    options,
  );
}
export type GetNotesQueryHookResult = ReturnType<typeof useGetNotesQuery>;
export type GetNotesLazyQueryHookResult = ReturnType<
  typeof useGetNotesLazyQuery
>;
export type GetNotesQueryResult = Apollo.QueryResult<
  GetNotesQuery,
  GetNotesQueryVariables
>;
export const TokenCreateDocument = gql`
  mutation tokenCreate($userName: String!, $password: String!) {
    tokenCreate(
      userCredential: {
        userName: $userName
        password: $password
        grantType: PASSWORD
      }
    ) {
      accessToken
      refreshToken
      expiresIn
    }
  }
`;
export type TokenCreateMutationFn = Apollo.MutationFunction<
  TokenCreateMutation,
  TokenCreateMutationVariables
>;

/**
 * __useTokenCreateMutation__
 *
 * To run a mutation, you first call `useTokenCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTokenCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [tokenCreateMutation, { data, loading, error }] = useTokenCreateMutation({
 *   variables: {
 *      userName: // value for 'userName'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useTokenCreateMutation(
  baseOptions?: Apollo.MutationHookOptions<
    TokenCreateMutation,
    TokenCreateMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<TokenCreateMutation, TokenCreateMutationVariables>(
    TokenCreateDocument,
    options,
  );
}
export type TokenCreateMutationHookResult = ReturnType<
  typeof useTokenCreateMutation
>;
export type TokenCreateMutationResult = Apollo.MutationResult<TokenCreateMutation>;
export type TokenCreateMutationOptions = Apollo.BaseMutationOptions<
  TokenCreateMutation,
  TokenCreateMutationVariables
>;
