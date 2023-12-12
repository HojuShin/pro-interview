import '@/styles/view.css';
import Detail from './Detail';
import { getAuthor } from '@/utils/session/session'
import { getDocument } from '@/utils/session/document'

export default async function View() {
  
  const authorDb = await getAuthor();
  const authorDocument = await getDocument();

  return(
    <Detail authorDb={authorDb} authorDocument={authorDocument}/>
  )
}