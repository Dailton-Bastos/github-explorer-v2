import React from 'react'

import { FormProps } from '../../utils/types'
import * as S from './styles'

export const Form = ({
  handleAddRepository,
  newRepo,
  setNewRepo,
  hasError,
  isLoading,
}: FormProps) => {
  return (
    <S.Form onSubmit={handleAddRepository} hasError={hasError}>
      <input
        type="text"
        placeholder="Digite o nome do repositório"
        value={newRepo}
        onChange={({ target }) => setNewRepo(target.value)}
      />
      {isLoading ? (
        <button type="button" disabled>
          Pesquisando...
        </button>
      ) : (
        <button type="submit">Pesquisar</button>
      )}
    </S.Form>
  )
}
