import React from 'react'
import { ICoffeeCardData } from '../../data/@types'
import { CoffeeCard } from '../CoffeeCard'
import { CoffeeListGridContainer } from './styles'

interface ICoffeeListGridProps {
  data: ICoffeeCardData[]
}

export function CoffeeListGrid(data: ICoffeeListGridProps) {
  return (
    <CoffeeListGridContainer>
      {data.data?.map((info) => {
        return (
          <CoffeeCard
            key={info.id}
            id={info.id}
            name={info.name}
            description={info.description}
            coffeTags={info.coffeTags}
            price={info.price}
            quantity={info.quantity}
          />
        )
      })}
    </CoffeeListGridContainer>
  )
}
