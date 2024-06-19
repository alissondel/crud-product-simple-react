import { useEffect, useState } from 'react'
import { IFetch } from '../interfaces/fetch'

export function useFetch<T>(url: string): IFetch<T> {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url)

        if (!response.ok) {
          const errorDetails = await response.text()
          throw new Error(`A resposta da rede não foi boa: ${errorDetails}`)
        }

        const result: T = await response.json()
        setData(result)
      } catch (error) {
        console.log('Erro ao recarragar')
        setError('Erro ao recarragar')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [url, data])

  return { data, loading, error }
}
