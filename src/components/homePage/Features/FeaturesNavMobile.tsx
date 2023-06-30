import { FC, useEffect, useState } from 'react'
// styles
import styles from './styles.module.scss'

type FeaturesNavMobileProps = {
  featuresList: { title: string; list: string[]; }[]
  i: number,
  setI: (i: number) => void
}

export const FeaturesNavMobile: FC<FeaturesNavMobileProps> = ({
  featuresList,
  i,
  setI
}) => {
  const [selectedFeature, setSelectedFeature] = useState(0)

  const handleNavItemClick = (i: number) => {
    setSelectedFeature(i)
    setI(i)
  }
  useEffect(() => {
    setSelectedFeature(i)
  }, [i])

  return (
    <div className={styles.featuresNavigationMobile}>
      {featuresList.map((_, i) =>
        (i === selectedFeature
          ? <div key={i} className={styles.activeDot} />
          : <div key={i} className={styles.dot} onClick={() => handleNavItemClick(i)} />
        )
      )}
    </div>
  )
}
