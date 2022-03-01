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
  stargazers_count?: number
  forks_count?: number
  open_issues_count?: number
  owner: {
    login: string
    avatar_url: string
  }
}

export interface Issue {
  id: number
  title: string
  html_url: string
  user: {
    login: string
  }
}

export interface ErrorProps {
  error: string
}
