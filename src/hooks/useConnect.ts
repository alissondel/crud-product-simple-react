export async function useConnection<T>(
  url: string,
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
  id?: string,
  data?: unknown,
): Promise<T> {
  if (id) url = `${url}/${id}`

  const config: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  }

  if (['POST', 'PUT', 'PATCH', 'DELETE'].includes(method) && data) {
    config.body = JSON.stringify(data)
  }

  try {
    const response = await fetch(url, config)

    if (!response.ok) {
      const errorDetails = await response.text()
      throw new Error(`A resposta da rede não foi boa: ${errorDetails}`)
    }

    const result = await response.json()
    return result
  } catch (error) {
    console.log(error instanceof Error)
    throw new Error('Erro ao conectar na api')
  }
}
