import React from 'react'

import { Repository } from '../../../utils/types'
import * as S from './styles'

interface RepositoryInfoProps {
  repository: Repository
}

export const RepositoryInfo = ({ repository }: RepositoryInfoProps) => {
  return (
    <S.RepositoryInfo>
      <header>
        <img src={repository.owner.avatar_url} alt={repository.owner.login} />

        <div>
          <strong>{repository.full_name}</strong>
          <p>{repository.description}</p>
        </div>
      </header>

      <ul>
        <li>
          <strong>{repository.stargazers_count}</strong>
          <span>Stars</span>
        </li>
        <li>
          <strong>{repository.forks_count}</strong>
          <span>Forks</span>
        </li>
        <li>
          <strong>{repository.open_issues_count}</strong>
          <span>Issues abertas</span>
        </li>
      </ul>
    </S.RepositoryInfo>
  )
}
