export interface FormProps {
  handleAddRepository: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
  newRepo: string
  setNewRepo: React.Dispatch<React.SetStateAction<string>>
  hasError: boolean
  isLoading?: boolean
}

export interface Repository {
  id: number
  full_name: string
  description: string
  html_url: string
  owner: {
    login: string
    avatar_url: string
  }
}

export interface ErrorProps {
  error: string
}
