'use client'
import React, { useState, useEffect, createContext, useContext } from 'react'
import { useUser } from '@clerk/nextjs'
import themes from './themes'
import axios from 'axios'
import toast from 'react-hot-toast'

export const GlobalContext = createContext()
export const GlobalUpdateContext = createContext()

export const GlobalProvider = ({ children }) => {
	const { user } = useUser()
	const [selectedTheme, setSelectedTheme] = useState(0)
	const [isLoading, setIsLoading] = useState(false)

	const [tasks, setTasks] = useState([])
	const theme = themes[selectedTheme]

	const allTasks = async () => {
		setIsLoading(true)
		try {
			const res = await axios.get('/api/tasks')
			const sorted = res.data.sort((a, b) => {
				return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
			})

			setTasks(sorted)
			setIsLoading(false)
		} catch (error) {
			console.log(error)
			toast.error(
				'Something went wrong retrieving all tasks for the current user'
			)
		}
	}

	useEffect(() => {
		if (user) allTasks()
	}, [user])

	return (
		<GlobalContext.Provider value={{ theme, tasks, isLoading }}>
			<GlobalUpdateContext.Provider value={{}}>
				{children}
			</GlobalUpdateContext.Provider>
		</GlobalContext.Provider>
	)
}

export const useGlobalState = () => useContext(GlobalContext)
export const useGlobalUpdate = () => useContext(GlobalUpdateContext)
