import Layout from 'components/common/layout/layout'
import { useTranslation } from 'react-i18next'
import { useQuery } from '@apollo/client'

import { ALL_PRODUCTS_QUERY } from 'graphql/query'

export default function Search() {
  const { t } = useTranslation()
  const { loading, error, data } = useQuery(ALL_PRODUCTS_QUERY)

  const { products } = data || { products: null }

  return (
    <div>
      {t('search.title')}{' '}
      {products && (
        <div>
          {products.map((item: any) => (
            <div key={item.id}>{item.name}</div>
          ))}
        </div>
      )}
    </div>
  )
}
