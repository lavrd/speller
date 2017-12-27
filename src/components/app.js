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
        <a className='link' href='http://api.yandex.ru/speller/' target='_blank'>
          Spell check: Yandex.Speller</a>
      </p>

      <p>
        <a className='link' href='https://github.com/lavrs/speller' target='_blank'>GitHub</a>
      </p>
    </div>
  )
}
