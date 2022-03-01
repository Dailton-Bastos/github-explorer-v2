import React from 'react'
import { FiChevronRight } from 'react-icons/fi'

import { Issue } from '../../../utils/types'
import * as S from './styles'

interface RepositoryIssuesProps {
  issues: Issue[]
}

export const RepositoryIssues = ({ issues = [] }: RepositoryIssuesProps) => {
  return (
    <S.RepositoryIssues>
      {issues.map((issue) => (
        <a href={issue.html_url} key={issue.id}>
          <div>
            <strong>{issue.title}</strong>
            <p>{issue.user.login}</p>
          </div>

          <FiChevronRight size={20} color="#cbcbd6" />
        </a>
      ))}
    </S.RepositoryIssues>
  )
}
