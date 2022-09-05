import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type CreateMessageInput = {
  author: Scalars['String'];
  content: Scalars['String'];
};

export type CreateUserInput = {
  login: Scalars['String'];
  password: Scalars['String'];
};

export type FilterMessageInput = {
  author?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
};

export type FilterUserInput = {
  id?: InputMaybe<Scalars['Float']>;
  isOnline?: InputMaybe<Scalars['Boolean']>;
  login?: InputMaybe<Scalars['String']>;
};

export type MessageEntity = {
  __typename?: 'MessageEntity';
  author: Scalars['String'];
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createMessage: MessageEntity;
  register: Scalars['String'];
  setUserOnline: UserEntity;
};


export type MutationCreateMessageArgs = {
  message: CreateMessageInput;
};


export type MutationRegisterArgs = {
  user: CreateUserInput;
};


export type MutationSetUserOnlineArgs = {
  user: SetOnlineInput;
};

export type Query = {
  __typename?: 'Query';
  getMessages: Array<MessageEntity>;
  getUsers: Array<UserEntity>;
  login: Scalars['String'];
};


export type QueryGetMessagesArgs = {
  filter: FilterMessageInput;
  page: Scalars['Float'];
};


export type QueryGetUsersArgs = {
  filter: FilterUserInput;
};


export type QueryLoginArgs = {
  user: CreateUserInput;
};

export type SetOnlineInput = {
  id: Scalars['Float'];
  isOnline: Scalars['Boolean'];
};

export type Subscription = {
  __typename?: 'Subscription';
  onMessageReceived: MessageEntity;
  onUserJoined: UserEntity;
};

export type UserEntity = {
  __typename?: 'UserEntity';
  id: Scalars['ID'];
  isOnline: Scalars['Boolean'];
  login: Scalars['String'];
  password: Scalars['String'];
};

export type LoginQueryVariables = Exact<{
  loginInput: CreateUserInput;
}>;


export type LoginQuery = { __typename?: 'Query', login: string };


export const LoginDocument = gql`
    query Login($loginInput: CreateUserInput!) {
  login(user: $loginInput)
}
    `;

/**
 * __useLoginQuery__
 *
 * To run a query within a React component, call `useLoginQuery` and pass it any options that fit your needs.
 * When your component renders, `useLoginQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLoginQuery({
 *   variables: {
 *      loginInput: // value for 'loginInput'
 *   },
 * });
 */
export function useLoginQuery(baseOptions: Apollo.QueryHookOptions<LoginQuery, LoginQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LoginQuery, LoginQueryVariables>(LoginDocument, options);
      }
export function useLoginLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LoginQuery, LoginQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LoginQuery, LoginQueryVariables>(LoginDocument, options);
        }
export type LoginQueryHookResult = ReturnType<typeof useLoginQuery>;
export type LoginLazyQueryHookResult = ReturnType<typeof useLoginLazyQuery>;
export type LoginQueryResult = Apollo.QueryResult<LoginQuery, LoginQueryVariables>;