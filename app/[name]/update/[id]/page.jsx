import { getDocument } from '@/utils/session/document'
import Cmp from './Cmp';

export default async function Update(){

    const authorDocument = await getDocument();

    return(
        <Cmp authorDocument={authorDocument}></Cmp>
    )
}