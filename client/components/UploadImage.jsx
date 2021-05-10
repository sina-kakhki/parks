import React from 'react'

export default function UploadImage () {
  const uploadedImage = React.useRef(null)
  const imageUploader = React.useRef(null)

  const handleImageUpload = e => {
    const [file] = e.target.files
    if (file) {
      const reader = new FileReader()
      const { current } = uploadedImage
      current.file = file
      reader.onload = e => {
        current.src = e.target.result
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div
      className=
        'flex flex-column justify-content-center'

    >
      <input
        type='file'
        accept='image/*'
        onChange={handleImageUpload}
        ref={imageUploader}
        style={{
          display: 'none'
        }}
      />
      <div
        className ='bg-gray-200 border-2 border-green-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500'
        onClick={() => imageUploader.current.click()}
      >
        <img
          ref={uploadedImage}
          style={{
            width: '100%',
            height: '100%',
            position: 'acsolute'
          }}
        />
      </div>
      Click to upload Image
    </div>
  )
}
