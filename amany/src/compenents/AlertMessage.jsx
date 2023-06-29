import { Alert } from '@material-tailwind/react'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'

export default function AlertMessage({ message, type }) {
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        setIsOpen(false)
      }, 3000)
    }
  }, [message])
  return (
    <div className='w-full absolute top-0'>
      <Alert
        icon={<CheckCircleIcon className='mt-px h-6 w-6' />}
        className='bg-[#2ec946]/40 text-gray-900 border-l-4 border-[#2ec946] rounded-none font-medium  m-auto w-[50%] h-[5rem] flex items-center justify-center'
        open={isOpen}
        color={type === 'success' ? 'green' : 'red'}
      >
        {message}
      </Alert>
    </div>
  )
}
