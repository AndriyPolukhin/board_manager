'use client'
import { useGlobalState } from '@/app/context/globalProvider'
import React from 'react'
import styled from 'styled-components'
import CreateContent from '../Modals/CreateContent'

const Tasks = () => {
	const { themes } = useGlobalState()
	return (
		<TaskStyled theme={themes}>
			<CreateContent />
		</TaskStyled>
	)
}

const TaskStyled = styled.main`
	position: relative;
	height: 100%;
	width: 100%;
	padding: 2rem;
	background-color: ${(props) => props.theme.colorBg2};
	border: 2px solid ${(props) => props.theme.borderColor2};
	border-radius: 1rem;
	overflow-y: auto;

	&::-webkit-scrollbar {
		width: 0.5rem;
	}
`

export default Tasks
