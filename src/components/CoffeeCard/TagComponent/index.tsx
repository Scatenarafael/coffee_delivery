import React from 'react'
import { TagsContainer } from './styles'

export function TagComponent({ coffeTags }: { coffeTags: string[] }) {
  return (
    <TagsContainer>
      {coffeTags.map((tag, index) => {
        return (
          <div key={index} className="badge">
            {tag.toUpperCase()}
          </div>
        )
      })}
    </TagsContainer>
  )
}
