import styled from 'styled-components'
import './App.css'

const Button = styled.button`
  background-color: black;
  color: white;
  padding: 10px;
`

function App() {
  const handleClick = () => {
    console.log('Button clicked!');
  }

  return (
    <>
      <Button onClick={handleClick}>Click me</Button>
    </>
  )
}

export default App
