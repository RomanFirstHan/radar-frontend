import React from 'react'
import { ILoginRequest } from './MainApi'

export const login = (login, password) => ILoginRequest(login, password)

