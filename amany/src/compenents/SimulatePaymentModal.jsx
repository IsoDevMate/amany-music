import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from '@material-tailwind/react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import AlertMessage from './AlertMessage'

const SimulatePaymentModal = () => {
  // const backend_url = import.meta.env.VITE_BACKEND_URL
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [responseData, setResponseData] = useState({})
  const [formData, setFormData] = useState({
    name: '',
    amount: '',
    phone: '',
  })

  const handleOpen = () => {
    setOpen(!open)
  }

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    console.log('form data', formData)
    setLoading(true)
    try {
      const res = await axios.post(
        // `${backend_url}/api/v1/payments/simulate`,
        `http://localhost:8000/api/v1/payments/simulate`,
        {
          phoneNumber: formData.phone,
          amount: formData.amount,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      // console.log('response', res)
      setResponseData(res.data)
      setLoading(false)
    } catch (err) {
      console.log('error', err)
      setError(err.response.data)
      setLoading(false)
    }
  }

  const { message } = responseData

  useEffect(() => {
    if (message) {
      setOpen(false)
    }
  }, [message])

  if (error.error) {
    return (
      <>
        <AlertMessage message={error.error} type='error' className='mt-4' />
      </>
    )
  }

  return (
    <>
      {message && (
        <AlertMessage message={message} type='success' className='mt-4' />
      )}
      <button
        className='text-3xl bg-white rounded-xl uppercase ml-60 px-4  py-2 hover:bg-gray-100 text-primary font-bold'
        onClick={handleOpen}
      >
        <a href='#' className=''>
          {' '}
          Donate ❤️
        </a>
      </button>
      {/* <Button onClick={handleOpen} variant='gradient'>
          Open Dialog
        </Button> */}
      <Dialog
        open={open}
        handler={handleOpen}
        size='md'
        className='bg-white rounded-xl shadow-xl md:w-[35%] m-auto w-[80%] backdrop-filter backdrop-blur-lg bg-opacity-70'
      >
        <DialogHeader>Donate Now</DialogHeader>
        <DialogBody divider>
          <form className='flex flex-col' onSubmit={handleFormSubmit}>
            <label className='text-lg'>Name</label>
            <input
              className='border-2 border-gray-300 p-2 rounded-lg mb-2'
              name='name'
              onChange={handleInputChange}
              required
            />
            <label className='text-lg'>Amount</label>
            <input
              className='border-2 border-gray-300 p-2 rounded-lg mb-2'
              name='amount'
              onChange={handleInputChange}
              required
              type='number'
            />
            <label className='text-lg'>Phone Number</label>
            <input
              className='border-2 border-gray-300 p-2 rounded-lg mb-2'
              name='phone'
              placeholder='07xxxxxxxx'
              onChange={handleInputChange}
              required
            />
            <button
              className='bg-green-500 text-white rounded-lg p-2 mt-2'
              type='submit'
              // {...(loading && 'disabled')}
              // disabled={loading}
            >
              Donate
            </button>
          </form>
        </DialogBody>
        <DialogFooter>
          <Button
            variant='text'
            color='red'
            onClick={handleOpen}
            className='mr-1'
          >
            <span>Cancel</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  )
}

export default SimulatePaymentModal
