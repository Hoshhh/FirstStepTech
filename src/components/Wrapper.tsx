import { getCurrentSession } from "@/lib/session"
import InfoForm from "./InfoForm"

export default async function Wrapper({children,}: {children: React.ReactNode}) {
    const session = await getCurrentSession()

    if (session !== null) {
        if (session.user.firstName === null || session.user.lastName === null) {
            return (
                <InfoForm id={session.user.id} />
            )
        }
    }

    return (
    <div>
        {children}
    </div>
    )
}
