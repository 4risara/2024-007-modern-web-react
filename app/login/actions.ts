'use server'

import { LoginData } from "@/types/user"
import axios from 'axios';

export async function login(prevState: any, formData: FormData) {

  const rawFormData: LoginData = {
    username: formData.get('username'),
    password: formData.get('password'),
  }

  try {
    const response = await axios.request({
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://89534e29-0fce-4172-a8ff-cf55054fd53f.mock.pstmn.io/login',
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(rawFormData),
    });
    return response.data;
  } catch (error: any) {
    return error.response.data
  }
}