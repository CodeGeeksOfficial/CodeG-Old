import React from 'react'
import './TypeOneComponent.css'

export default function TypeOneComponent({heading, description, link_title, image}) {
  return (
    <div className="type-one-container">
      <div className="type-one-container-content">
        <div className="type-one-container-heading"><div>{heading}</div></div>
        <div className="type-one-container-description"><div>{description}</div></div>
        <div className="type-one-container-link"><div>{link_title} &gt;</div></div>
      </div>
      <div className="type-one-container-illustration"><img src={image} alt="Illustrations" /></div>
    </div>
  )
}
