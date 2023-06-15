import { FC } from 'react'
import Image from 'next/image'
// shared
import { Button } from '@/components/shared'
import { Modal, ModalProps } from '../Modal'
import { lato } from '@/utils'
// styles
import styles from './styles.module.scss'

export const ThankYouModal: FC<ModalProps> = ({
  ...props
}) => {
  return (
    <Modal {...props}>
      <div className={styles.container}>

        <div className={styles.image}>
          <Image
            src={'/assets/graphic/cactus/long_cactus_2.png'}
            alt='card2'
            width={464}
            height={200}
          />
        </div>
 
        <div className={styles.inner}>
          <h1 className={`${lato.className}`}>
            {'Thank You!'}
          </h1>
          <p className={lato.className}>
            {'Your form has been successfully submitted. We will contact you soon.'}
          </p>

          <Button btnType={'button'} onClick={props.onClose}>
            {'Thanks'}
          </Button>
        </div>
      </div>
    </Modal>
  )
}
