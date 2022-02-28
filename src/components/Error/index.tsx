import React from 'react'

import { ErrorProps } from '../../utils/types'
import * as S from './styles'

export const Error = ({ error }: ErrorProps) => {
  return <S.Error>{error}</S.Error>
}
