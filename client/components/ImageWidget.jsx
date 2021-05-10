import React from 'react'

export default function showUploadWidget () {
  cloudinary.openUploadWidget({
    cloudName: '<cloud name>',
    uploadPreset: '<upload preset>',
    sources: [
      'local',
      'url',
      'camera',
      'image_search',
      'google_drive',
      'facebook',
      'dropbox',
      'instagram',
      'shutterstock'
    ],
    googleApiKey: '<image_search_google_api_key>',
    showAdvancedOptions: true,
    cropping: true,
    multiple: false,
    defaultSource: 'local',
    styles: {
      palette: {
        window: '#F5F5F5',
        sourceBg: '#FFFFFF',
        windowBorder: '#90a0b3',
        tabIcon: '#098D44',
        inactiveTabIcon: '#69778A',
        menuIcons: '#0094C7',
        link: '#098D44',
        action: '#098D44',
        inProgress: '#0194c7',
        complete: '#098D44',
        error: '#c43737',
        textDark: '#000000',
        textLight: '#FFFFFF'
      },
      fonts: {
        default: null,
        "'Poppins', sans-serif": {
          url: 'https://fonts.googleapis.com/css?family=Poppins',
          active: true
        }
      }
    }
  },
  (err, info) => {
    if (!err) {
      console.log('Upload Widget event - ', info)
    }
  })
}
