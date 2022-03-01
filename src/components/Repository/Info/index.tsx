import React from 'react'

import * as S from './styles'

export const RepositoryInfo = () => {
  return (
    <S.RepositoryInfo>
      <header>
        <img
          src="https://avatars.githubusercontent.com/u/36246937?v=4"
          alt="Dailton"
        />

        <div>
          <strong>Dailton-Bastos/Fast-Feet</strong>
          <p>Description</p>
        </div>
      </header>

      <ul>
        <li>
          <strong>1808</strong>
          <span>Stars</span>
        </li>
        <li>
          <strong>48</strong>
          <span>Forks</span>
        </li>
        <li>
          <strong>76</strong>
          <span>Issues abertas</span>
        </li>
      </ul>
    </S.RepositoryInfo>
  )
}
