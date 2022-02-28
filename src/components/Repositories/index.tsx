import React from 'react'
import { FiChevronRight } from 'react-icons/fi'

import * as S from './styles'

export const Repositories = () => {
  return (
    <S.Repositories>
      <a href="#">
        <img
          src="https://avatars.githubusercontent.com/u/36246937?v=4"
          alt="Dailton Bastos"
        />

        <div>
          <strong>Dailton Bastos</strong>
          <p>Alguma coisa alguma coisa</p>
        </div>

        <FiChevronRight size={20} color="#cbcbd6" />
      </a>
      <a href="#">
        <img
          src="https://avatars.githubusercontent.com/u/36246937?v=4"
          alt="Dailton Bastos"
        />

        <div>
          <strong>Dailton Bastos</strong>
          <p>Alguma coisa alguma coisa</p>
        </div>

        <FiChevronRight size={20} color="#cbcbd6" />
      </a>
      <a href="#">
        <img
          src="https://avatars.githubusercontent.com/u/36246937?v=4"
          alt="Dailton Bastos"
        />

        <div>
          <strong>Dailton Bastos</strong>
          <p>Alguma coisa alguma coisa</p>
        </div>

        <FiChevronRight size={20} color="#cbcbd6" />
      </a>
    </S.Repositories>
  )
}
