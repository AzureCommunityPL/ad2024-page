import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-newsletter.jpg'

function ArrowRightIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
      <path
        d="m14 7 5 5-5 5M19 12H5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function CFP() {
  return (
    <section id="cfp" aria-label="cfp">
      <Container>
        <div className="relative -mx-4 overflow-hidden bg-indigo-50 px-4 py-20 sm:-mx-6 sm:px-6 md:mx-0 md:rounded-5xl md:px-16 xl:px-24 xl:py-36">
          <Image
            className="absolute left-1/2 top-0 translate-x-[-10%] translate-y-[-45%] lg:translate-x-[-32%]"
            src={backgroundImage}
            alt=""
            width={919}
            height={1351}
            unoptimized
          />
          <div className="relative mx-auto grid max-w-2xl grid-cols-1 gap-x-32 gap-y-14 xl:max-w-none xl:grid-cols-2">
            <div>
              <p className="font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
                Call for Papers
              </p>
              <p className="mt-4 text-lg tracking-tight text-blue-900">
                Call for Papers otwarte! Spróbuj swoich sił w roli prelegenta na scenach naszej konferencji. Wypełnij formularz! Czekamy do 15 grudnia!
              </p>
            </div>
            <form>
              <h3 className="text-lg font-semibold tracking-tight text-blue-900">
                Wyślij zgłoszenie <span aria-hidden="true">&darr;</span>
              </h3>
              <div className="mt-5 flex py-2.5 pr-2.5">
                <Button href="https://forms.office.com/pages/responsepage.aspx?id=Gbdpq3Nn5EGlr_ruzER8CRXGk1gk1S9EtzXyd0zvPNFUOUxTMllNUFZIM0daSDMwUFZCT0RITlNGWC4u">
                  <span className="sr-only sm:not-sr-only">Formularz</span>
                  <span className="sm:hidden">
                    <ArrowRightIcon className="h-6 w-6" />
                  </span>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}
