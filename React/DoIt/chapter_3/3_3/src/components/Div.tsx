import type {FC, DetailedHTMLProps, HTMLAttributes, PropsWithChildren} from 'react'
import type { WidthHeigth } from './WidthHeigth'

export type ReactDivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>
export type DivProps = ReactDivProps & PropsWithChildren<WidthHeigth> & {
  src?: string
}

export const Div: FC<DivProps> = ({
  width, heigth, style: _style, src, className: _className, ...props
}) => {
  const style = {..._style, width, heigth, backgroundImage: src && `url(${src})`}
  const className = ['box-sizing', src && 'bg-gray-300', _className].join(' ')
  return <div {...props} className={className} style={style} />
}