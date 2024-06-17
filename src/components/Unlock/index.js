import {useState} from 'react'

import {Applockbg, LockImage, Text, Button} from './styledComponents'

const Unlock = () => {
  const [isLocked, setDeviceLock] = useState(true)

  const lockImageUrl = isLocked
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'

  const imageAltText = isLocked ? 'lock' : 'unlock'
  const paraText = isLocked
    ? 'Your Device is Locked'
    : 'Your Device is Unlocked'
  const buttonText = isLocked ? 'Unlock' : 'Lock'

  const onSetDeviceLock = () => {
    setDeviceLock(prevSetdevicelock =>  !prevSetdevicelock)
  }

  return (
    <Applockbg>
      <LockImage src={lockImageUrl} alt={imageAltText} />
      <Text>{paraText}</Text>
      <Button type="button" onClick={onSetDeviceLock}>{buttonText}</Button>
    </Applockbg>
  )
}
export default Unlock
