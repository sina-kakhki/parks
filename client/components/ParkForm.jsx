import React, { useState } from 'react'

export default function ParkForm (props) {
  const [form, setForm] = useState(props.formData || {
    name: '',
    address: '',
    lat: 0,
    lon: 0,
    council_url: '',
    description: '',
    image: '',
    playground: false,
    toilets: false,
    picnic_site: false,
    sports_field: false,
    tramp: false,
    dog_walking: false,
    approved: false
  })

  function handleChange (e) {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  function handleSubmit (e) {
    e.preventDefault()
    props.submitEvent(form)
  }

  const { name, address, url, image, playground, toilets, picnicSite, sportsField, tramp, dogWalking, approved } = form
  return (
    <>
      <div>
        <h2>Add a Park</h2>
        <form>
          <div className="field">
            <label
              htmlFor='name'
              className='label'>Park Name</label>
            <input
              id='name'
              name='name'
              className='input is-normal'
              type='text'
              placeholder='park name'
              value={name}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label
              htmlFor='address'
              className='label'
            >Address</label>
            <input
              id='address'
              name='address'
              className='input is-normal'
              type='text'
              value={address}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label
              htmlFor='url'
              className='label'
            >Website (url)</label>
            <input
              id='url'
              name='url'
              className='input is-normal'
              type='url'
              value={url}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label
              htmlFor='image'
              className='label'
            >Image</label>
            <textarea
              id='image'
              name='image'
              className='input is-normal'
              type='image'
              placeholder='park image'
              value={image}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label
              htmlFor='playground'
              className='label'
            >Playground</label>
            <input
              id='playground'
              name='playground'
              className='input is-normal'
              type='playground'
              value={playground}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label
              htmlFor='toilets'
              className='label'
            >Toilets</label>
            <input
              id='toilets'
              name='toilets'
              className='input is-normal'
              type='checkbox'
              value={toilets}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label
              htmlFor='picnicSite'
              className='label'
            >Picnic Site</label>
            <input
              id='picnicSite'
              name='picnicSite'
              className='input is-normal'
              type='checkbox'
              value={picnicSite}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label
              htmlFor='sportsField'
              className='label'
            >Sports Field</label>
            <input
              id='sportsField'
              name='sportsField'
              className='input is-normal'
              type='checkbox'
              value={sportsField}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label
              htmlFor='tramp'
              className='label'
            >Tramp</label>
            <input
              id='tramp'
              name='tramp'
              className='input is-normal'
              type='checkbox'
              value={tramp}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label
              htmlFor='dogWalking'
              className='label'
            >Dog Walking Allowed</label>
            <input
              id='dogWalking'
              name='dogWalking'
              className='input is-normal'
              type='checkbox'
              value={dogWalking}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label
              htmlFor='approved'
              className='label'
            >Park Approved</label>
            <input
              id='approved'
              name='approved'
              className='input is-normal'
              type='checkbox'
              value={approved}
              onChange={handleChange}
            />
          </div>
          {/* <div className="field">
            <label
              htmlFor='url'
              className='label'
            >Website (url)</label>
            <input
              id='url'
              name='url'
              className='input is-normal'
              type='url'
              value={url}
              onChange={handleChange}
            />
          </div> */}
          <button
            className='button mt-4'
            onClick={handleSubmit}
          >{props.action}</button>
        </form>
      </div>
      <div className='column is-half'>
        <h2 className='title is-5 mb-4'>Event Preview</h2>
        <div className='box'>
          {name
            ? <h2>{name}</h2>
            : <h2>Park Name here</h2>
          }
          {address
            ? <p>{address}</p>
            : <p>Park Address here</p>
          }
          {url
            ? <p>{url}</p>
            : <p>website URL here</p>
          }
          {image
            ? <p>{image}</p>
            : <p>Park Image here</p>
          }
          {playground
            ? <p>{playground}</p>
            : <p>Playground here?</p>
          }
          {toilets
            ? <p>{toilets}</p>
            : <p>Toilets here?</p>
          }
          {picnicSite
            ? <p>{picnicSite}</p>
            : <p>Picnic-Site here?</p>
          }
          {sportsField
            ? <p>{sportsField}</p>
            : <p>Sports-field here?</p>
          }
          {tramp
            ? <p>{tramp}</p>
            : <p>Tramp/Bush walk here?</p>
          }
          {dogWalking
            ? <p>{dogWalking}</p>
            : <p>Dog Walking allowed?</p>
          }
          {approved
            ? <p>{approved}</p>
            : <p>Park Approved?</p>
          }
        </div>
      </div>
    </>
  )
}
