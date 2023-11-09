/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query GetMe {\n  me {\n    data {\n      id\n    }\n  }\n}\n\nmutation Regularlogin($input: EmailAndPasswordLoginInput!) {\n  emailAndPasswordLogin(input: $input) {\n    data {\n      token\n    }\n    success\n    message\n  }\n}": types.GetMeDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetMe {\n  me {\n    data {\n      id\n    }\n  }\n}\n\nmutation Regularlogin($input: EmailAndPasswordLoginInput!) {\n  emailAndPasswordLogin(input: $input) {\n    data {\n      token\n    }\n    success\n    message\n  }\n}"): typeof import('./graphql').GetMeDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
