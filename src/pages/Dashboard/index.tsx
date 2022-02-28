import React from 'react'

import { Form } from '../../components/Form'
import { Repositories } from '../../components/Repositories'
import * as S from './styles'

export const Dashboard = () => {
  return (
    <>
      <S.Title>Explore repositórios no Github</S.Title>

      <S.Form>
        <Form />
      </S.Form>

      <S.Repositories>
        <Repositories />
      </S.Repositories>
    </>
  )
}
