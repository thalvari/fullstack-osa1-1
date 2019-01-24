import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => (
    <>
        <h1>{props.course}</h1>
    </>
)

const Part = (props) => (
    <>
        <p>
            {props.part.name} {props.part.exercises}
        </p>
    </>
)

const Content = (props) => (
    <>
        <Part part={props.parts[0]}/>
        <Part part={props.parts[1]}/>
        <Part part={props.parts[2]}/>
    </>
)

const Total = (props) => {
    let total = 0
    props.parts.forEach(part => {
        total += part.exercises
    })
    return (
        <>
            <p>yhteensä {total} tehtävää</p>
        </>
    )
}

const App = () => {
    const course = {
        name: 'Half Stack -sovelluskehitys',
        parts: [
            {
                name: 'Reactin perusteet',
                exercises: 10
            },
            {
                name: 'Tiedonvälitys propseilla',
                exercises: 7
            },
            {
                name: 'Komponenttien tila',
                exercises: 14
            }
        ]
    }

    return (
        <>
            <Header course={course.name}/>
            <Content parts={course.parts}/>
            <Total parts={course.parts}/>
        </>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))
