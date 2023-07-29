import { getCurrentSession } from "@/lib/session"
import NameForm from "./NameForm"

export default async function Wrapper({children,}: {children: React.ReactNode}) {
    const session = await getCurrentSession()

    if (session !== null) {
        if (session.user.firstName === null || session.user.lastName === null) {
            return (
                <NameForm />
            )
        }
    }

    return (
    <div>
        {children}
    </div>
    )
}
