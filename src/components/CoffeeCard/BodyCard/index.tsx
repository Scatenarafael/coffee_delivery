import React from 'react'
import { BodyContainer } from './styles'

interface IBodyCardProps {
  name: string
  description: string
}

export function BodyCard({ name, description }: IBodyCardProps) {
  return (
    <BodyContainer>
      <p className="title_card">{name}</p>
      <p className="description_card">{description}</p>
    </BodyContainer>
  )
}
