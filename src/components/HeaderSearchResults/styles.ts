import styled from 'styled-components'
import ListTile from '../ListTile'

export const HSRContainer = styled.div`
  width: 100%;
  padding-top: 48px;

  top: 0px;
  position: absolute;
  background-color: #fff;

  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.searchResults};
  border-radius: 0.5rem;
`

export const HSRContent = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  border-top: 1px solid ${({ theme }) => theme.colors.divider};
`

export const HSRMoreResults = styled(ListTile)`
  padding: 24px 20px;

  color: ${({ theme }) => theme.colors.grey};
  font-weight: 500;

  border-top: 1px solid ${({ theme }) => theme.colors.divider};
  background-color: #fafafa;
`
