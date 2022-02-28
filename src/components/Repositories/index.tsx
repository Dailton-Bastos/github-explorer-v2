import React from 'react'
import { FiChevronRight } from 'react-icons/fi'

import { Repository } from '../../utils/types'
import * as S from './styles'

interface RepositoriesProps {
  repositories: Repository[]
}

export const Repositories = ({ repositories = [] }: RepositoriesProps) => {
  return (
    <S.Repositories>
      {repositories.map((repository) => (
        <a href={repository.html_url} key={repository.id}>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />

          <div>
            <strong>{repository.full_name}</strong>
            <p>{repository.description}</p>
          </div>

          <FiChevronRight size={20} color="#cbcbd6" />
        </a>
      ))}
    </S.Repositories>
  )
}
