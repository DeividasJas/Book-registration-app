import axios from 'axios'

export const uploadBook  = async (data) => {
    const response = await axios.post('http://localhost:3000/books',{...data, reserved: false})
}