import { getAuthor } from '@/utils/session/session'
import { getDocument } from '@/utils/session/document'
import Cmp from './Cmp';

export default async function Update(){

    const authorDb = await getAuthor();
    const authorDocument = await getDocument();

    return(
        <Cmp authorDb={authorDb} authorDocument={authorDocument}></Cmp>
    )
}