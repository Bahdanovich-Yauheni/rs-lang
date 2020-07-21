import React, { useContext, useEffect, useRef } from 'react'

import { Context } from 'context'

function StatisticButton({newWords, repetition, words, data: { type, text, link, icon, isBordered, styling, subClass }, isShown, action }) {
  

  return (
    <div className='item statistic'>
      <div className={`icon icon_statistic ${styling ? `icon_statistic${styling}` : ''}`}>
        {type === 'counter-new' ? words.filter(el => !el.new).length : repetition}
      </div>
      <div className='tooltip' dangerouslySetInnerHTML={{ __html: text.replace(/\s/g, '&nbsp;') }} />
      <div
        className={`sub-menu sub-menu__small ${subClass ? subClass : ''} ${isShown ? 'show' : ''} ${
          isBordered ? 'sub-menu__bordered' : ''
        }`}
        dangerouslySetInnerHTML={{ __html: text.replace(/\s/g, '&nbsp;') }}
      />
    </div>
  )
}

export const StatiscticButtons = (props) => {
  const { toRepeatWords, newWords, words, setRepetition, } = useContext(Context)
  const repetition = useRef()

  useEffect(()=> {
    repetition.current = words.filter(el => el.optional && el.optional.nextRepeat < Date.now()).length
    setRepetition(repetition.current)
  }, [words])
  


  const { data } = props

  const buttons = data.map((item) => <StatisticButton key={item.text} {...props} data={item} words={words} repetition={repetition.current} newWords={newWords} />)
  return <>{buttons}</>
}
