import * as React from 'react'

export default function DogsList(props) {
  console.log(props.Dogs)
  return (<div>
    <h1>Dogs Explorer</h1>
    <ul>
      { props.Dogs.map(Dog =>
        <li key ={Math.ceil(Math.random(1,50)*10000) }>
          { Dog }
        </li>
      )}
    </ul>
  </div>
  )
}