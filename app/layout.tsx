import { useMode } from '@/lib/mode-hook'
import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'INTO Hackday 2023',
  description: 'Welcome to INTO\'s 2023 hackday.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [mode, modeAddress] = useMode();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <main className="container">
            <div className='flex flex-col lg:flex-row py-12 gap-8'>
              <div className='py-4 w-full space-y-4'>
                <h1 className='text-4xl'>INTO Hackday 2023</h1>
                <p className='text-lg font-medium'>Vote for your favourite presentations here.</p>
                <ol className='list-decimal list-inside'>
                  <li className={mode === "WELCOME" ? 'font-bold' : ''}>Welcome</li>
                  <li className={mode === "PRESENTING" ? 'font-bold' : ''}>Presentations</li>
                  <li className={mode === "VOTING" ? 'font-bold' : ''}>Voting</li>
                  <li className={mode === "RESULTS" ? 'font-bold' : ''}>Votes revealed</li>
                  <li className={mode === "FEEDBACK" ? 'font-bold' : ''}>Feedback</li>
                </ol>
              </div>
              <div className='py-4 w-full space-y-6'>
                {children}

              </div>
            </div>
          </main >
        </ThemeProvider>
      </body>
    </html>
  )
}
