import React from 'react'
import './TypeTwoComponent.css'

export default function TypeOneComponent({heading, description, link_title, image}) {
  return (
    <div className="type-two-container">
      <div className="type-two-container-left">
        <div className="type-two-container-heading"><div>{heading}</div></div>
        <div className="type-two-container-illustration"><img src={image} alt="Illustrations" /></div>
      </div>
      <div className="type-two-container-right">
        <div className="type-two-container-description"><div>{description}</div></div>
        <div className="type-two-container-link"><div>&lt; {link_title}</div></div>
      </div>
    </div>
  )
}
