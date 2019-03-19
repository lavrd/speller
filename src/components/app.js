import React from "react";
import "./static";
import {HistoryC, SpellCheckC} from "../containers";

export default () => {
  return (
    <div className='container text-center'>
      <h1 className='text-muted'>Speller</h1>

      <SpellCheckC />
      <HistoryC />

      <p>
        <a className='link' href='http://api.yandex.ru/speller/' target='_blank' rel='noopener noreferrer'>
          Spell check: Yandex.Speller</a>
      </p>

      <p>
        <a className='link' href='https://github.com/xthelavr/speller' target='_blank' rel='noopener noreferrer'>GitHub</a>
      </p>
    </div>
  )
}
