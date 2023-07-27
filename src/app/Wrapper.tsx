import { getCurrentSession } from "@/lib/session"

export default async function Wrapper({children,}: {children: React.ReactNode}) {
    const session = await getCurrentSession()

    if (session !== null) {
        if (!session.user.name) {
            return (
                <div>Please enter your name to finish account creation</div>
            )
        }
    }

    return (
    <div>
        {children}
    </div>
    )
}
