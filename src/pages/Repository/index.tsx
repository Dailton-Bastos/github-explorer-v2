import React from 'react'
import { useParams } from 'react-router-dom'

import { RepositoryHeader } from '../../components/Repository/Header'
import { RepositoryInfo } from '../../components/Repository/Info'
import { RepositoryIssues } from '../../components/Repository/Issues'
import { api } from '../../services/api'
import { Issue, Repository as RepositoryProps } from '../../utils/types'

export const Repository = () => {
  const [repository, setRepository] = React.useState<RepositoryProps | null>(
    null
  )
  const [issues, setIssues] = React.useState<Issue[]>([])
  const params = useParams()

  React.useEffect(() => {
    const repositoryName = `${params.repository}/${params['*']}`

    api.get(`repos/${repositoryName}`).then((response) => {
      setRepository(response.data)
    })

    api.get(`repos/${repositoryName}/issues`).then((response) => {
      setIssues(response.data)
    })
  }, [params])

  return (
    <>
      <RepositoryHeader />

      {repository && <RepositoryInfo repository={repository} />}

      <RepositoryIssues issues={issues} />
    </>
  )
}
