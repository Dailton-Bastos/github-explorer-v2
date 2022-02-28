import React from 'react'

import { FormProps } from '../../utils/types'
import * as S from './styles'

export const Form = ({
  handleAddRepository,
  newRepo,
  setNewRepo,
}: FormProps) => {
  return (
    <S.Form onSubmit={handleAddRepository}>
      <input
        type="text"
        placeholder="Digite o nome do repositório"
        value={newRepo}
        onChange={({ target }) => setNewRepo(target.value)}
      />
      <button type="submit">Pesquisar</button>
    </S.Form>
  )
}
