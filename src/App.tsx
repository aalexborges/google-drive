import moment from 'moment'
import Header from './components/Header'
import LeftAsideColumn from './components/LeftAsideColumn'
import PathBar from './components/PathBar'
import Tooltip from './components/Tooltip'
import files from './data/files.json'
import { AContainer, AContent, AContentTable, AMain } from './styles'
import getIcon from './utils/getIcon'

function App() {
  return (
    <AContainer>
      <Header />
      <LeftAsideColumn />

      <AMain>
        <PathBar />

        <AContent>
          <AContentTable>
            <tr>
              <th>Name</th>
              <th>Owner</th>
              <th>Last modified</th>
              <th>File size</th>
            </tr>

            {files.map(file => (
              <tr key={file.id}>
                <td>
                  <div>
                    <img src={getIcon(file.type)} alt="" />
                  </div>
                  {file.name}
                </td>
                <td>me</td>
                <td>
                  {moment(file.updatedAt).format('MMM DD, yyyy')}
                  <span>me</span>
                </td>
                <td>
                  {file.size >= 1024
                    ? `${file.size / 1024} MB`
                    : `${file.size} KB`}
                </td>
              </tr>
            ))}
          </AContentTable>
        </AContent>
      </AMain>

      <Tooltip />
    </AContainer>
  )
}

export default App
