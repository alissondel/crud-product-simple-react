export interface IFetch<T> {
  data: T | null
  loading: boolean
  error: string | null
}
