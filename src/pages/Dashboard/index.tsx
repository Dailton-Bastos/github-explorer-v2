import React from 'react'

import { Form } from '../../components/Form'
import { Repositories } from '../../components/Repositories'
import { api } from '../../services/api'
import { Repository } from '../../utils/types'
import * as S from './styles'

export const Dashboard = () => {
  const [newRepo, setNewRepo] = React.useState('')

  const [repositories, setRepositories] = React.useState<Repository[]>([])

  async function handleAddRepository(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const response = await api.get<Repository>(`repos/${newRepo}`)

    setRepositories([...repositories, response.data])

    setNewRepo('')
  }

  return (
    <>
      <S.Title>Explore repositórios no Github</S.Title>

      <S.Form>
        <Form
          handleAddRepository={handleAddRepository}
          newRepo={newRepo}
          setNewRepo={setNewRepo}
        />
      </S.Form>

      <S.Repositories>
        <Repositories repositories={repositories} />
      </S.Repositories>
    </>
  )
}
