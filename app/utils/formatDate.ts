import dayjs from 'dayjs'
dayjs().format()

const formatDate = (
	date: string | number | Date | dayjs.Dayjs | null | undefined
) => {
	return dayjs(date).format('DD/MM/YYYY')
}

export default formatDate
