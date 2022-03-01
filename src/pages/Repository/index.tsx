import React from 'react'
import { useParams } from 'react-router-dom'

import { RepositoryHeader } from '../../components/Repository/Header'
import { RepositoryInfo } from '../../components/Repository/Info'
import { RepositoryIssues } from '../../components/Repository/Issues'

export const Repository = () => {
  const params = useParams()

  return (
    <>
      <RepositoryHeader />

      <RepositoryInfo />

      <RepositoryIssues />
    </>
  )
}
