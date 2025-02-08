import { Image } from 'antd'
import React from 'react'

function ImageDisplay({ className, imageLink, width, preview }) {
  return (
    <div>
      <Image
        className={className}
        src={imageLink}
        width={width}
        preview={preview}
      />
    </div>
  )
}

export default ImageDisplay
