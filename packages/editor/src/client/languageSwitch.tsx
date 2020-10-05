/* eslint-disable i18next/no-literal-string */

import React, {useState} from 'react'
import {elementForTypographyVariant, Select, Spacing} from '@karma.run/ui'
import {cssRule, useStyle} from '@karma.run/react'
import {MaterialIconLanguage} from '@karma.run/icons'
import {Color} from '../style/colors'
import e from 'express'
//import {useTranslation} from 'react-i18next'

export function pxToRem(px: number) {
  return `${px / 10}rem`
}

const languageSwitch = cssRule({
  position: 'relative',
  marginBottom: pxToRem(100),
  paddingLeft: pxToRem(11),
  paddingBottom: pxToRem(10),
  paddingTop: pxToRem(10),

  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.025)'
  },

  '& > div ': {padding: 0},

  '& > div > ul': {
    borderRadius: 0,
    marginTop: pxToRem(10),
    marginLeft: pxToRem(-11),
    width: 'calc(100% + 1.1rem)',

    '& li': {
      paddingLeft: pxToRem(13)
    }
  },

  '& > div > label > button': {
    paddingLeft: pxToRem(21),
    border: 'none'
  },

  '& > div > label > svg': {
    fontSize: '1.5em'
  },

  '& > div > label > svg > path': {
    cursor: 'pointer'
  }
})

export function LanguageSwitch() {
  const css = useStyle()
  const [uiLanguage, setUILanguage] = useState({id: 'en', lang: 'en_US', name: 'English'})
  //const {t} = useTranslation()

  return (
    <div className={css(languageSwitch)}>
      <Select
        icon={MaterialIconLanguage}
        options={[
          {id: 'en', lang: 'en_US', name: 'English'},
          {id: 'de', lang: 'de_CH', name: 'Deutsch'},
          {id: 'fr', lang: 'fr_FR', name: 'Français'}
        ]}
        value={{id: uiLanguage.id, lang: uiLanguage.lang, name: uiLanguage.name}}
        renderListItem={value => value?.name}
        onChange={value => {
          if (value?.name) {
            setUILanguage(value)
          }
        }}
      />
    </div>
  )
}