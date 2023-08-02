
export default async function ProfileHeader({id}: {id: string }) {
    const data = await fetch(`http://localhost:3000/api/user/${id}`)
    const currentUser = await data.json()

  return (
    <div className='flex flex-col items-center pt-16 p-4 border-b-2'>
        <img src={currentUser?.image} alt="Profile Picture" className="w-24 h-24 rounded-full shadow-md shadow-gray-400" />
        <h4 className='pt-2 font-normal text-slate-800 text-md'>{`${currentUser?.firstName} ${currentUser?.lastName}`}</h4>
        <h4 className='pt-1 font-normal text-slate-400 text-xs'>Full Stack Web Developer</h4>
    </div>
  )
}