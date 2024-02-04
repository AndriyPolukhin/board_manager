import prisma from '@/app/utils/connect'
import { auth } from '@clerk/nextjs'
import { NextResponse } from 'next/server'

export const DELETE = async (
	req: Request,
	{ params }: { params: { id: string } }
) => {
	try {
		const { userId } = auth()
		const { id } = params

		if (!userId) {
			return NextResponse.json({ error: 'Unauthorized', status: 401 })
		}

		const task = await prisma.task.delete({
			where: {
				id,
			},
		})

		return NextResponse.json(task)
	} catch (error) {
		console.log('Error deleting task: ', error)
		return NextResponse.json({ error: 'Error deleting task', status: 500 })
	}
}
