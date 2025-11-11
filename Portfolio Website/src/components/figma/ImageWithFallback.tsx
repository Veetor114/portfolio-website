import image_a140d4bdb3563829997d8cf862f9777a040cb84f from 'figma:asset/a140d4bdb3563829997d8cf862f9777a040cb84f.png';
import React, { useState } from 'react'

const ERROR_IMG_SRC =
  image_a140d4bdb3563829997d8cf862f9777a040cb84f

export function ImageWithFallback(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [didError, setDidError] = useState(false)

  const handleError = () => {
    setDidError(true)
  }

  const { src, alt, style, className, ...rest } = props

  return didError ? (
    <div
      className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
      style={style}
    >
      <div className="flex items-center justify-center w-full h-full">
        <img src={ERROR_IMG_SRC} alt="Error loading image" {...rest} data-original-url={src} />
      </div>
    </div>
  ) : (
    <img src={src} alt={alt} className={className} style={style} {...rest} onError={handleError} />
  )
}
