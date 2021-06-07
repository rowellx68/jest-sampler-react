import React from 'react'
import Navbar from 'components/Navbar'
import Wrapper from 'components/Wrapper'
import Clap from 'components/Clap'
import Greeting from 'components/Greeting'
import SignupForm from 'components/SignupForm'
import JokeBox from 'components/JokeBox'

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Navbar className="mb-3" />
      <Wrapper>
        <div className="grid space-y-6">
          <Greeting />

          <div>
            <Clap />
          </div>

          <SignupForm onSubmit={() => {}} />

          <JokeBox />
        </div>
      </Wrapper>
    </React.Fragment>
  )
}

export default App
