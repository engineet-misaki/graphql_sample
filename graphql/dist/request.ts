import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: string; output: string; }
};

export type Like = {
  __typename?: 'Like';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  likeUser: User;
  memo: Memo;
};

export type Memo = {
  __typename?: 'Memo';
  content: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  like: Array<Maybe<Like>>;
  likeNum: Scalars['Int']['output'];
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  addMemo: Memo;
  deleteMemo: Memo;
  likeMemo: Like;
  likeMemoDelete: Like;
  signin: User;
  signup: User;
  updateMemo: Memo;
};


export type MutationAddMemoArgs = {
  content: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationDeleteMemoArgs = {
  id: Scalars['ID']['input'];
};


export type MutationLikeMemoArgs = {
  id: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationLikeMemoDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationSigninArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationSignupArgs = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationUpdateMemoArgs = {
  content: Scalars['String']['input'];
  id: Scalars['ID']['input'];
};

export type Query = {
  __typename?: 'Query';
  memo?: Maybe<Memo>;
  memos?: Maybe<Array<Maybe<Memo>>>;
  user?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
};


export type QueryMemoArgs = {
  memoId: Scalars['String']['input'];
};


export type QueryUserArgs = {
  userId: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  memos?: Maybe<Array<Maybe<Memo>>>;
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
};

export type MemoFragmentFragment = { __typename?: 'Memo', id: string, content: string, createdAt?: string | null };

export type UserFragmentFragment = { __typename?: 'User', id: string, name: string };

export type LikeFragmentFragment = { __typename?: 'Like', id: string, createdAt?: string | null };

export type ListMemosQueryVariables = Exact<{ [key: string]: never; }>;


export type ListMemosQuery = { __typename?: 'Query', memos?: Array<{ __typename?: 'Memo', id: string, content: string, createdAt?: string | null, user: { __typename?: 'User', id: string, name: string } } | null> | null };

export type ShowUserQueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type ShowUserQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string, name: string } | null };

export type ShowMemoQueryVariables = Exact<{
  memoId: Scalars['String']['input'];
}>;


export type ShowMemoQuery = { __typename?: 'Query', memo?: { __typename?: 'Memo', id: string, content: string, createdAt?: string | null, user: { __typename?: 'User', id: string, name: string } } | null };

export type AddMemoMutationVariables = Exact<{
  content: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
}>;


export type AddMemoMutation = { __typename?: 'Mutation', addMemo: { __typename?: 'Memo', id: string, content: string, createdAt?: string | null } };

export type UpdateMemoMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  content: Scalars['String']['input'];
}>;


export type UpdateMemoMutation = { __typename?: 'Mutation', updateMemo: { __typename?: 'Memo', id: string, content: string, createdAt?: string | null } };

export type LikeMemoMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
}>;


export type LikeMemoMutation = { __typename?: 'Mutation', likeMemo: { __typename?: 'Like', id: string, createdAt?: string | null } };

export type LikeMemoDeleteMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type LikeMemoDeleteMutation = { __typename?: 'Mutation', likeMemoDelete: { __typename?: 'Like', id: string, createdAt?: string | null } };

export type DeleteMemoMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteMemoMutation = { __typename?: 'Mutation', deleteMemo: { __typename?: 'Memo', id: string, content: string, createdAt?: string | null } };

export type SignupMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  name: Scalars['String']['input'];
}>;


export type SignupMutation = { __typename?: 'Mutation', signup: { __typename?: 'User', email: string, password: string, name: string } };

export type SigninMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type SigninMutation = { __typename?: 'Mutation', signin: { __typename?: 'User', email: string, password: string, name: string } };

export const MemoFragmentFragmentDoc = gql`
    fragment MemoFragment on Memo {
  id
  content
  createdAt
}
    `;
export const UserFragmentFragmentDoc = gql`
    fragment UserFragment on User {
  id
  name
}
    `;
export const LikeFragmentFragmentDoc = gql`
    fragment LikeFragment on Like {
  id
  createdAt
}
    `;
export const ListMemosDocument = gql`
    query ListMemos {
  memos {
    ...MemoFragment
    user {
      ...UserFragment
    }
  }
}
    ${MemoFragmentFragmentDoc}
${UserFragmentFragmentDoc}`;

/**
 * __useListMemosQuery__
 *
 * To run a query within a React component, call `useListMemosQuery` and pass it any options that fit your needs.
 * When your component renders, `useListMemosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListMemosQuery({
 *   variables: {
 *   },
 * });
 */
export function useListMemosQuery(baseOptions?: Apollo.QueryHookOptions<ListMemosQuery, ListMemosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListMemosQuery, ListMemosQueryVariables>(ListMemosDocument, options);
      }
export function useListMemosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListMemosQuery, ListMemosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListMemosQuery, ListMemosQueryVariables>(ListMemosDocument, options);
        }
export type ListMemosQueryHookResult = ReturnType<typeof useListMemosQuery>;
export type ListMemosLazyQueryHookResult = ReturnType<typeof useListMemosLazyQuery>;
export type ListMemosQueryResult = Apollo.QueryResult<ListMemosQuery, ListMemosQueryVariables>;
export const ShowUserDocument = gql`
    query ShowUser($userId: String!) {
  user(userId: $userId) {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;

/**
 * __useShowUserQuery__
 *
 * To run a query within a React component, call `useShowUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useShowUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useShowUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useShowUserQuery(baseOptions: Apollo.QueryHookOptions<ShowUserQuery, ShowUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ShowUserQuery, ShowUserQueryVariables>(ShowUserDocument, options);
      }
export function useShowUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ShowUserQuery, ShowUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ShowUserQuery, ShowUserQueryVariables>(ShowUserDocument, options);
        }
export type ShowUserQueryHookResult = ReturnType<typeof useShowUserQuery>;
export type ShowUserLazyQueryHookResult = ReturnType<typeof useShowUserLazyQuery>;
export type ShowUserQueryResult = Apollo.QueryResult<ShowUserQuery, ShowUserQueryVariables>;
export const ShowMemoDocument = gql`
    query ShowMemo($memoId: String!) {
  memo(memoId: $memoId) {
    ...MemoFragment
    user {
      ...UserFragment
    }
  }
}
    ${MemoFragmentFragmentDoc}
${UserFragmentFragmentDoc}`;

/**
 * __useShowMemoQuery__
 *
 * To run a query within a React component, call `useShowMemoQuery` and pass it any options that fit your needs.
 * When your component renders, `useShowMemoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useShowMemoQuery({
 *   variables: {
 *      memoId: // value for 'memoId'
 *   },
 * });
 */
export function useShowMemoQuery(baseOptions: Apollo.QueryHookOptions<ShowMemoQuery, ShowMemoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ShowMemoQuery, ShowMemoQueryVariables>(ShowMemoDocument, options);
      }
export function useShowMemoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ShowMemoQuery, ShowMemoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ShowMemoQuery, ShowMemoQueryVariables>(ShowMemoDocument, options);
        }
export type ShowMemoQueryHookResult = ReturnType<typeof useShowMemoQuery>;
export type ShowMemoLazyQueryHookResult = ReturnType<typeof useShowMemoLazyQuery>;
export type ShowMemoQueryResult = Apollo.QueryResult<ShowMemoQuery, ShowMemoQueryVariables>;
export const AddMemoDocument = gql`
    mutation AddMemo($content: String!, $userId: ID!) {
  addMemo(content: $content, userId: $userId) {
    ...MemoFragment
  }
}
    ${MemoFragmentFragmentDoc}`;
export type AddMemoMutationFn = Apollo.MutationFunction<AddMemoMutation, AddMemoMutationVariables>;

/**
 * __useAddMemoMutation__
 *
 * To run a mutation, you first call `useAddMemoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddMemoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addMemoMutation, { data, loading, error }] = useAddMemoMutation({
 *   variables: {
 *      content: // value for 'content'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useAddMemoMutation(baseOptions?: Apollo.MutationHookOptions<AddMemoMutation, AddMemoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddMemoMutation, AddMemoMutationVariables>(AddMemoDocument, options);
      }
export type AddMemoMutationHookResult = ReturnType<typeof useAddMemoMutation>;
export type AddMemoMutationResult = Apollo.MutationResult<AddMemoMutation>;
export type AddMemoMutationOptions = Apollo.BaseMutationOptions<AddMemoMutation, AddMemoMutationVariables>;
export const UpdateMemoDocument = gql`
    mutation updateMemo($id: ID!, $content: String!) {
  updateMemo(id: $id, content: $content) {
    ...MemoFragment
  }
}
    ${MemoFragmentFragmentDoc}`;
export type UpdateMemoMutationFn = Apollo.MutationFunction<UpdateMemoMutation, UpdateMemoMutationVariables>;

/**
 * __useUpdateMemoMutation__
 *
 * To run a mutation, you first call `useUpdateMemoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMemoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMemoMutation, { data, loading, error }] = useUpdateMemoMutation({
 *   variables: {
 *      id: // value for 'id'
 *      content: // value for 'content'
 *   },
 * });
 */
export function useUpdateMemoMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMemoMutation, UpdateMemoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMemoMutation, UpdateMemoMutationVariables>(UpdateMemoDocument, options);
      }
export type UpdateMemoMutationHookResult = ReturnType<typeof useUpdateMemoMutation>;
export type UpdateMemoMutationResult = Apollo.MutationResult<UpdateMemoMutation>;
export type UpdateMemoMutationOptions = Apollo.BaseMutationOptions<UpdateMemoMutation, UpdateMemoMutationVariables>;
export const LikeMemoDocument = gql`
    mutation LikeMemo($id: ID!, $userId: ID!) {
  likeMemo(id: $id, userId: $userId) {
    ...LikeFragment
  }
}
    ${LikeFragmentFragmentDoc}`;
export type LikeMemoMutationFn = Apollo.MutationFunction<LikeMemoMutation, LikeMemoMutationVariables>;

/**
 * __useLikeMemoMutation__
 *
 * To run a mutation, you first call `useLikeMemoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLikeMemoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [likeMemoMutation, { data, loading, error }] = useLikeMemoMutation({
 *   variables: {
 *      id: // value for 'id'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useLikeMemoMutation(baseOptions?: Apollo.MutationHookOptions<LikeMemoMutation, LikeMemoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LikeMemoMutation, LikeMemoMutationVariables>(LikeMemoDocument, options);
      }
export type LikeMemoMutationHookResult = ReturnType<typeof useLikeMemoMutation>;
export type LikeMemoMutationResult = Apollo.MutationResult<LikeMemoMutation>;
export type LikeMemoMutationOptions = Apollo.BaseMutationOptions<LikeMemoMutation, LikeMemoMutationVariables>;
export const LikeMemoDeleteDocument = gql`
    mutation likeMemoDelete($id: ID!) {
  likeMemoDelete(id: $id) {
    ...LikeFragment
  }
}
    ${LikeFragmentFragmentDoc}`;
export type LikeMemoDeleteMutationFn = Apollo.MutationFunction<LikeMemoDeleteMutation, LikeMemoDeleteMutationVariables>;

/**
 * __useLikeMemoDeleteMutation__
 *
 * To run a mutation, you first call `useLikeMemoDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLikeMemoDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [likeMemoDeleteMutation, { data, loading, error }] = useLikeMemoDeleteMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useLikeMemoDeleteMutation(baseOptions?: Apollo.MutationHookOptions<LikeMemoDeleteMutation, LikeMemoDeleteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LikeMemoDeleteMutation, LikeMemoDeleteMutationVariables>(LikeMemoDeleteDocument, options);
      }
export type LikeMemoDeleteMutationHookResult = ReturnType<typeof useLikeMemoDeleteMutation>;
export type LikeMemoDeleteMutationResult = Apollo.MutationResult<LikeMemoDeleteMutation>;
export type LikeMemoDeleteMutationOptions = Apollo.BaseMutationOptions<LikeMemoDeleteMutation, LikeMemoDeleteMutationVariables>;
export const DeleteMemoDocument = gql`
    mutation DeleteMemo($id: ID!) {
  deleteMemo(id: $id) {
    ...MemoFragment
  }
}
    ${MemoFragmentFragmentDoc}`;
export type DeleteMemoMutationFn = Apollo.MutationFunction<DeleteMemoMutation, DeleteMemoMutationVariables>;

/**
 * __useDeleteMemoMutation__
 *
 * To run a mutation, you first call `useDeleteMemoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMemoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMemoMutation, { data, loading, error }] = useDeleteMemoMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteMemoMutation(baseOptions?: Apollo.MutationHookOptions<DeleteMemoMutation, DeleteMemoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteMemoMutation, DeleteMemoMutationVariables>(DeleteMemoDocument, options);
      }
export type DeleteMemoMutationHookResult = ReturnType<typeof useDeleteMemoMutation>;
export type DeleteMemoMutationResult = Apollo.MutationResult<DeleteMemoMutation>;
export type DeleteMemoMutationOptions = Apollo.BaseMutationOptions<DeleteMemoMutation, DeleteMemoMutationVariables>;
export const SignupDocument = gql`
    mutation Signup($email: String!, $password: String!, $name: String!) {
  signup(email: $email, password: $password, name: $name) {
    email
    password
    name
  }
}
    `;
export type SignupMutationFn = Apollo.MutationFunction<SignupMutation, SignupMutationVariables>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useSignupMutation(baseOptions?: Apollo.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, options);
      }
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = Apollo.MutationResult<SignupMutation>;
export type SignupMutationOptions = Apollo.BaseMutationOptions<SignupMutation, SignupMutationVariables>;
export const SigninDocument = gql`
    mutation Signin($email: String!, $password: String!) {
  signin(email: $email, password: $password) {
    email
    password
    name
  }
}
    `;
export type SigninMutationFn = Apollo.MutationFunction<SigninMutation, SigninMutationVariables>;

/**
 * __useSigninMutation__
 *
 * To run a mutation, you first call `useSigninMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSigninMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signinMutation, { data, loading, error }] = useSigninMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSigninMutation(baseOptions?: Apollo.MutationHookOptions<SigninMutation, SigninMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SigninMutation, SigninMutationVariables>(SigninDocument, options);
      }
export type SigninMutationHookResult = ReturnType<typeof useSigninMutation>;
export type SigninMutationResult = Apollo.MutationResult<SigninMutation>;
export type SigninMutationOptions = Apollo.BaseMutationOptions<SigninMutation, SigninMutationVariables>;