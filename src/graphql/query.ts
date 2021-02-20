import { gql } from '@apollo/client'

export const ALL_PRODUCTS_QUERY = gql`
  query getAllProducts {
    products {
      id
      name
      description
      image {
        url
      }
      createdAt
      categories {
        type
      }
    }
  }
`

export const SEARCH_PRODUCTS_BY_NAME = gql`
  query getProductsByName($name: String!) {
    products(where: { name: $name }) {
      id
      name
      description
      image {
        url
      }
      createdAt
      categories {
        type
      }
    }
  }
`

export default {}
