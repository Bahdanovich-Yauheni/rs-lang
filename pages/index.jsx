import React, { useState } from 'react'
import Link from 'next/link'
import { Audiocall, Puzzle, Speakit, SprintGame } from '../components/games'
import { AppLayout } from '../layouts'
import { Button, Popup, SignIn, SignUp } from '../components'
import { GameStartModalWindow } from '../components/GameStartModalWindow'
import './index.less'

import ProgressBar from '../components/Progress/progress-bar'

function Home() {
  const [showSignUp, toggleSignUp] = useState(false)
  const [showSignIn, toggleSignIn] = useState(false)

  return (
    <AppLayout>
      {/* <GameStartModalWindow />  */}
      {/* <Audiocall />    */}
      {/* <Puzzle />       */}
      {/* <Speakit />   */}
      {/* <SprintGame /> */}
      <ProgressBar current={36} total={50} width='60%' />

      <h1>Main page</h1>
      <Button className='danger' onClick={() => console.log('triggered')}>
        Danger button
      </Button>
      <Button className='default' onClick={() => toggleSignUp(!showSignUp)}>
        Sign Up
      </Button>
      <Button className='log-in' onClick={() => toggleSignIn(!showSignIn)}>
        <div></div>
        {/* Sign In */}
      </Button>
      {showSignUp ? (
        <Popup toggleClose={() => toggleSignUp(false)}>
          <div className='register-form'>
            <h2>Sign up</h2>
            <SignUp />
          </div>
        </Popup>
      ) : showSignIn ? (
        <Popup toggleClose={() => toggleSignIn(false)}>
          <div className='register-form'>
            <h2>Sign in</h2>
            <SignIn />
          </div>
        </Popup>
      ) : null}
      <Link href='/account'>
        <a>Account</a>
      </Link>
    </AppLayout>
  )
}

export default Home
