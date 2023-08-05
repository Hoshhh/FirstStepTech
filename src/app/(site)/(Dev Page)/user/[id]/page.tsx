import AboutForm from '@/components/dashboard/AboutForm'
import Container from '@/components/dashboard/Container'
import SkillsForm from '@/components/dashboard/SkillsForm'
import { getCurrentSession } from '@/lib/session'
import React from 'react'

export default async function page({ params }: {
  params: { id: string }
}) {
  const session = await getCurrentSession()
  const modal = {
    skillsHeader : "Edit your skills",
    skillsDesc : "List your strongest skills",
    aboutHeader : "Edit your about section",
    aboutDesc : "Let people know what you're about!",
  }

  return (
    <div className='flex flex-col w-3/4 items-center mt-32'>
      <Container 
        section="Skills" 
        id={params.id} 
        sessionId={session?.user.id} 
        modalHeader={modal.skillsHeader} 
        modalDesc={modal.skillsDesc} 
      >
        <SkillsForm id={params.id} />
      </Container>
      <Container 
        section="About" 
        id={params.id} 
        sessionId={session?.user.id} 
        modalHeader={modal.aboutHeader} 
        modalDesc={modal.aboutDesc} 
      >
        <AboutForm id={params.id} />
      </Container>
    </div>
  )
}
