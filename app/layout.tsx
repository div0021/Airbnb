import RegisterModal from './components/modals/RegisterModal'
import Navbar from './components/navbar/Navbar'
import './globals.css'
import {Nunito} from 'next/font/google'
import Toaster from './providers/ToasterProvider'
import LoginModal from './components/modals/LoginModal'
import getCurrentUser from './actions/getCurrentUser'
import RentModal from './components/modals/RentModal'
import SearchModal from './components/modals/SearchModal'
import { Suspense } from 'react'

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb project',
}
const font = Nunito({
  subsets:['latin']
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <Suspense fallback={<p>Loading...</p>}>
        <Toaster />
        <SearchModal />
        <RentModal />
        <RegisterModal />
        <LoginModal />
        <Navbar currentUser={currentUser} />
        
        <div className='pb-20 pt-28 dark:bg-black dark:text-neutral-200 min-h-full transition-all duration-100 ease-in-out'>
              {children}
        </div>
        </Suspense>
        </body>
    </html>
  )
}
