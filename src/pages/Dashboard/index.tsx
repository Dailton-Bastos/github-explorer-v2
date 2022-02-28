import React from 'react'

import { Error } from '../../components/Error'
import { Form } from '../../components/Form'
import { Repositories } from '../../components/Repositories'
import { api } from '../../services/api'
import { Repository } from '../../utils/types'
import * as S from './styles'

export const Dashboard = () => {
  const [newRepo, setNewRepo] = React.useState('')
  const [inputError, setInputError] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(false)

  const [repositories, setRepositories] = React.useState<Repository[]>([])

  async function handleAddRepository(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!newRepo) {
      setInputError('Digite o autor/nome do repositório')
      return
    }

    try {
      setIsLoading(true)
      const response = await api.get<Repository>(`repos/${newRepo}`)

      setRepositories([...repositories, response.data])

      setNewRepo('')
      setInputError('')
      setIsLoading(false)
    } catch (error) {
      setInputError('Error na busca por esse repositório')
      setIsLoading(false)
    }
  }

  return (
    <>
      <S.Title>Explore repositórios no Github</S.Title>

      <S.Form>
        <Form
          handleAddRepository={handleAddRepository}
          newRepo={newRepo}
          setNewRepo={setNewRepo}
          hasError={!!inputError}
          isLoading={isLoading}
        />
      </S.Form>

      {inputError && (
        <S.Error>
          <Error error={inputError} />
        </S.Error>
      )}

      <S.Repositories>
        <Repositories repositories={repositories} />
      </S.Repositories>
    </>
  )
}
