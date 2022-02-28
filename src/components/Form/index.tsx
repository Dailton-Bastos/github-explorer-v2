import React from 'react'

import * as S from './styles'

export const Form = () => {
  return (
    <S.Form>
      <input type="text" placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </S.Form>
  )
}
