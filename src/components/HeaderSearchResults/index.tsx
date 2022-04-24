import documentsImg from '../../assets/icons/documents.png'
import imageImg from '../../assets/icons/image.png'
import pdfImg from '../../assets/icons/pdf.png'
import presentationImg from '../../assets/icons/presentation.png'
import spreadsheetImg from '../../assets/icons/spreadsheet.png'
import videoImg from '../../assets/icons/video.png'
import ListTile from '../ListTile'
import { HSRContainer, HSRContent, HSRMoreResults } from './styles'

interface IProps {
  value: string
}

function HeaderSearchResults({ value }: IProps) {
  return (
    <HSRContainer>
      <HSRContent>
        <ListTile title="PDFs" icon={<img src={pdfImg} />} />
        <ListTile title="Documents" icon={<img src={documentsImg} />} />
        <ListTile title="Spreadsheets" icon={<img src={spreadsheetImg} />} />
        <ListTile title="Presentations" icon={<img src={presentationImg} />} />
        <ListTile title="Photos & images" icon={<img src={imageImg} />} />
        <ListTile title="Videos" icon={<img src={videoImg} />} />

        <HSRMoreResults title="More search tools" />
      </HSRContent>
    </HSRContainer>
  )
}

export default HeaderSearchResults
