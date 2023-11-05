import { CFP } from '@/components/Cfp'
import { Hero } from '@/components/Hero'
import { Newsletter } from '@/components/Newsletter'
import Price from '@/components/Price'
import { Schedule } from '@/components/Schedule'
import { Speakers } from '@/components/Speakers'
import { Sponsors } from '@/components/Sponsors'
import { Organizers } from '@/components/Organizers'

export default function Home() {
  return (
    <>
      <Hero />
      <CFP />
      <Organizers />
      <Sponsors />
    </>
  )
}
