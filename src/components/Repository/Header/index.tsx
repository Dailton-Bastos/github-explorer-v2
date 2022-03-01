import React from 'react'
import { FiChevronLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { Logo } from '../../Logo'
import * as S from './styles'

export const RepositoryHeader = () => {
  return (
    <S.Header>
      <Logo />

      <Link to="/">
        <FiChevronLeft size={16} />
        Voltar
      </Link>
    </S.Header>
  )
}
