import { ButtonHTMLAttributes, memo, ReactNode } from 'react'
import { LTContainer } from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>
interface IProps {
  title: string
  icon?: ReactNode
  iconStyle?: React.CSSProperties
}

const ListTile = memo(function ListTile(props: IProps & ButtonProps) {
  return (
    <LTContainer {...props}>
      {props.icon && <div style={props.iconStyle}>{props.icon}</div>}
      <p>{props.title}</p>
    </LTContainer>
  )
})

export default ListTile
