import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from './components/Sidebar/Sidebar'
import GlobalStylesProvider from './providers/GlobalStylesProvider'
import ContextProvider from './providers/ContextProvider'
import { ClerkProvider } from '@clerk/nextjs'
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
		<ClerkProvider>
			<html lang='en'>
				<head>
					<link
						rel='stylesheet'
						href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css'
						integrity='sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=='
						crossOrigin='anonymous'
						referrerPolicy='no-referrer'
					/>
				</head>
				<body>
					<ContextProvider>
						<GlobalStylesProvider>
							<Sidebar />
							<div className='w-full'>{children}</div>
						</GlobalStylesProvider>
					</ContextProvider>
				</body>
			</html>
		</ClerkProvider>
	)
}
