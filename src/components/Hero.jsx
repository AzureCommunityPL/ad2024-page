import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function Hero() {
  return (
    <div className="relative py-20 sm:pb-24 sm:pt-36">
      <BackgroundImage className="-bottom-14 -top-36" />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-blue-600 sm:text-7xl">
            AzureDay Poland 2024
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-blue-900">
            <p>
            Wszystkich miłośników rozwiązań chmurowych zapraszamy serdecznie już 15 lutego 2024 roku do Warszawy na siódmą edycję naszej konferencji!
            AzureDay Poland to wydarzenie organizowane od 2016 roku przez społeczność Microsoft Azure User Group Poland przy wsparciu zaprzyjaźnionych organizacji i firm.
            To miejsce, gdzie ekspercka wiedza łączy się z pasją do dzielenia się nią. Jest to doskała okazja do nawiązania nowych znajomości, wymiany opinii czy zapoczątkowania nowych biznesów czy nowej ścieki kariery.
            </p>
            <p>
            Brzmi interesująco? Zapewniamy, że tak będzie!
            </p>
          </div>
          <Button href="https://azureday2024.konfeo.com/pl/groups" className="mt-10 w-full sm:hidden">
            Kup bilet!
          </Button>
          <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ['Prelegenci', '10'],
              ['Uczestnicy', '300'],
              ['Lokalizacja', 'Airport Hotel Okęcie'],
              ['Miasto', 'Warszawa'],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-blue-600">{name}</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  )
}
