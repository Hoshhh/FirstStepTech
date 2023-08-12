import AboutForm from '@/components/dashboard/AboutForm'
import Container from '@/components/dashboard/Container'
import LinksForm from '@/components/dashboard/LinksForm'
import SkillsForm from '@/components/dashboard/SkillsForm'
import { getCurrentSession } from '@/lib/session'
import React from 'react'


export default async function page({ params }: {
  params: { id: string }
}) {
  const session = await getCurrentSession()
  const modal = {
    skillsHeader : "Edit your skills",
    skillsDesc : "List your 6 strongest technical skills",
    aboutHeader : "Edit your about section",
    aboutDesc : "Let people know about you!",
    linksHeader : "Edit your links",
    linksDesc : "Add links to your portfolio, Github, and LinkedIn"
  }

  const res = await fetch(`http://localhost:3000/api/user/${params.id}`)
  const user = await res.json()

  return (
    <div className='flex flex-col w-full sm:w-3/4 items-center mt-16 mb-auto'>
      <Container 
        section="Skills" 
        id={params.id} 
        sessionId={session?.user.id} 
        modalHeader={modal.skillsHeader} 
        modalDesc={modal.skillsDesc}
        isArray={true}
        isLink={false}
        data={user.skills}
      >
        <SkillsForm id={params.id} skills={user.skills} />
      </Container>
      <Container 
        section="About" 
        id={params.id} 
        sessionId={session?.user.id} 
        modalHeader={modal.aboutHeader} 
        modalDesc={modal.aboutDesc}
        isArray={false} 
        isLink={false}
        data={user.about}
      >
        <AboutForm id={params.id} about={user.about} />
      </Container>

      <Container
        section="Links"
        id={params.id} 
        sessionId={session?.user.id} 
        modalHeader={modal.linksHeader} 
        modalDesc={modal.linksDesc}
        isArray={true} 
        isLink={true}
        data={user.links}
      >
        <LinksForm id={params.id} links={user.links} />
      </Container>
    </div>
  )
}
