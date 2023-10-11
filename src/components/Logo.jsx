import Image from 'next/image'
import logo from '@/images/logos/logo_with_text_black.png'

export function Logo(props) {
  return (
    <Image src={logo}  className="max-w-xs max-h-16 object-contain" alt="Microsoft Azure User Group Poland" unoptimized />
  )
}
