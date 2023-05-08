import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Acceuil from '@/components/Acceuil';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
        <Acceuil/>
    </div>
    
  )
}
