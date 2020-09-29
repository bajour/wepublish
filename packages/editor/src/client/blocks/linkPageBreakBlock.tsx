import React, {useRef, useEffect} from 'react'

import {BlockProps, TypographicTextArea, Box} from '@karma.run/ui'
import {LinkPageBreakBlockValue} from './types'

import {useTranslation} from 'react-i18next'

export type LinkPageBreakBlockProps = BlockProps<LinkPageBreakBlockValue>

export function LinkPageBreakBlock({
  value,
  onChange,
  autofocus,
  disabled
}: LinkPageBreakBlockProps) {
  const {text, linkText, linkURL} = value
  const focusRef = useRef<HTMLTextAreaElement>(null)

  const {t} = useTranslation()

  useEffect(() => {
    if (autofocus) focusRef.current?.focus()
  }, [])

  return (
    <>
      <Box flexGrow={1}>
        <TypographicTextArea
          ref={focusRef}
          variant="h2"
          placeholder={t('Text')}
          align="center"
          value={text}
          disabled={disabled}
          onChange={e => onChange({...value, text: e.target.value})}
        />
      </Box>
      <TypographicTextArea
        ref={focusRef}
        variant="body1"
        placeholder={t('Link Text')}
        align="center"
        value={linkText}
        disabled={disabled}
        onChange={e => onChange({...value, linkText: e.target.value})}
      />
      <TypographicTextArea
        ref={focusRef}
        variant="subtitle2"
        placeholder={t('Link URL')}
        align="center"
        value={linkURL}
        disabled={disabled}
        onChange={e => onChange({...value, linkURL: e.target.value})}
      />
    </>
  )
}
