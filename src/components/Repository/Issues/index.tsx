import React from 'react'
import { FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import * as S from './styles'

export const RepositoryIssues = () => {
  return (
    <S.RepositoryIssues>
      <Link to="/repositories">
        <div>
          <strong>alguma coisa</strong>
          <p>alguma coisa</p>
        </div>

        <FiChevronRight size={20} color="#cbcbd6" />
      </Link>
      <Link to="/repositories">
        <div>
          <strong>alguma coisa</strong>
          <p>alguma coisa</p>
        </div>

        <FiChevronRight size={20} color="#cbcbd6" />
      </Link>
      <Link to="/repositories">
        <div>
          <strong>alguma coisa</strong>
          <p>alguma coisa</p>
        </div>

        <FiChevronRight size={20} color="#cbcbd6" />
      </Link>
    </S.RepositoryIssues>
  )
}
