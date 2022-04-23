import { useState } from 'react'
import { ReactComponent as AskIcon } from '../../assets/icons/ask.svg'
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg'
import { ReactComponent as GearIcon } from '../../assets/icons/gear.svg'
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg'
import { ReactComponent as SettingsIcon } from '../../assets/icons/settings.svg'
import { DropButton, HSContainer, HSForm, HSFormContainer } from './styles'

function HeaderSearch() {
  const [value, setValue] = useState('')

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <HSContainer>
      <HSFormContainer>
        <HSForm>
          <button type="button" aria-label="Search">
            <SearchIcon />
          </button>

          <input
            type="text"
            value={value}
            placeholder="Search in Drive"
            onChange={onChange}
          />

          {value.length > 0 && (
            <button type="button" aria-label="Clear search">
              <CloseIcon />
            </button>
          )}

          <button type="button" aria-label="Search options">
            <SettingsIcon />
          </button>
        </HSForm>
      </HSFormContainer>

      <DropButton type="button" aria-label="Support">
        <AskIcon />
      </DropButton>

      <DropButton type="button" darkHover aria-label="Settings">
        <GearIcon />
      </DropButton>
    </HSContainer>
  )
}

export default HeaderSearch
