/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFormulario = `query GetFormulario($id: ID!) {
  getFormulario(id: $id) {
    id
    pregResp
  }
}
`;
export const listFormularios = `query ListFormularios(
  $filter: ModelformularioFilterInput
  $limit: Int
  $nextToken: String
) {
  listFormularios(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      pregResp
    }
    nextToken
  }
}
`;
