import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from './components/Sidebar/Sidebar'
import GlobalStylesProvider from './providers/GlobalStylesProvider'
import ContextProvider from './providers/ContextProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Board Manager',
	description: 'Board Manager app to manage tasks',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body>
				<ContextProvider>
					<GlobalStylesProvider>
						<Sidebar />
						{children}
					</GlobalStylesProvider>
				</ContextProvider>
			</body>
		</html>
	)
}
