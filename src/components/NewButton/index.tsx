import { memo } from 'react'
import { ReactComponent as PlusIcon } from '../../assets/icons/plus.svg'
import { NBContainer } from './styles'

const NewButton = memo(function NewButton() {
  return (
    <NBContainer>
      <button type="button">
        <PlusIcon />
        New
      </button>
    </NBContainer>
  )
})

export default NewButton
