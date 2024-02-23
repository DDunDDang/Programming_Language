import type {FC, CSSProperties, HTMLAttributes, DetailedHTMLProps} from 'react'

type ReactSpanProps = DetailedHTMLProps<HTMLAttributes<HTMLAnchorElement>, HTMLSpanElement>

export type IconProps = ReactSpanProps & {
  name: string
  style?: CSSProperties
}

export const Icon: FC<IconProps> = ({name, className: _className, ...props}) => {
  const className = ['material-icons', _className].join(' ')
  return (
    <span {...props} className={className}>
      {name}
    </span>
  )
}