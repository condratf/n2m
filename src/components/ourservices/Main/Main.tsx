'use client'
import { FC, useCallback, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
// local
import { routes } from '@/routes'
import { lato, syncopate, useIsMobile, } from '@/utils'
import { SERVICES_LIST } from '@/app/constants'
import { SectionKeys } from '../resources'
// styles
import styles from './styles.module.scss'

const moveToNode = (
  node: Element,
  behavior: string = 'smooth',
  block: ScrollLogicalPosition | undefined = 'center'
) => {
  // @ts-expect-error
  node.scrollIntoView({ behavior, block })
}

export const Main: FC = () => {
  const { isMobile } = useIsMobile()
  const searchParams = useSearchParams()

  const getOnClickHandler = useCallback((param: string) => () => {
    const node = document.querySelector(`[data-param=${param}]`)

    if (!node) return

    let heightBefore = document.body.scrollHeight

    moveToNode(node, 'smooth', isMobile ? 'start' : 'center');

    // хак, так как используем анимацию, блоки становятся больше
    // и из-за этого не доскроливается, выполняем доскрол, если
    // анимация еще не сработала
    setTimeout(() => {
      if (heightBefore === document.body.scrollHeight) return

      moveToNode(node, 'auto', isMobile ? 'start' : 'center');
    }, 400)
  }, [])

  useEffect(() => {
    const section = searchParams.get('section') as SectionKeys

    if (!section) return

    getOnClickHandler(section)()
  }, [])

  return (
    <div className={styles.main}>
      <h1 className={syncopate.className}>{'Our services'}</h1>

      {/* mobile */}
      <p className={lato.className}>{'We create solutions that work on the result of your projects.'}</p>

      {/* desktop */}
      <ul>
        {SERVICES_LIST.map(({ title, param }) => (
          <Link
            className={lato.className}
            key={title}
            onClick={getOnClickHandler(param)}
            href={{
              pathname: routes.ourservices,
              query: { section: param }
            }}
          >
            {title}
          </Link>
        ))}
      </ul>
    </div>
  )
}
