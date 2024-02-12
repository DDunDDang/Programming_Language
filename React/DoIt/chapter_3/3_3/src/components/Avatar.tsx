import type {FC} from 'react'
import {Div} from './Div'
import type {DivProps} from './Div'

export type AvatarProps = DivProps & {
  size?: string
}

export const Avater: FC<AvatarProps> = ({
  className: _className, style, src, size, ...props
}) => {
  const w_or_h = size ?? '3rem'
  const className = ['rounded-full bg-cover bg-gray-300', _className].join(' ')
  return (
    <Div {...props} src={src} width={w_or_h} heigth={w_or_h} className={className} style={style} />
  )
}