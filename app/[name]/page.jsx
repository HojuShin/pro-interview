import '@/styles/user.css'
import { getAuthor } from '@/utils/session/session'
import { getDocument } from '@/utils/session/document'
import Main from './main'

export default async function User() {

    const authorDb = await getAuthor();
    const authorDocument = await getDocument();

    return (
        <Main authorDb={authorDb} authorDocument={authorDocument} />
    )
}