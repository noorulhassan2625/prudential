import { Button } from 'antd'
import React from 'react'

function ActionButton({buttonClass , buttonText}) {
  return (
    <div>
      <Button className={buttonClass} >{buttonText}</Button>
    </div>
  )
}

export default ActionButton
