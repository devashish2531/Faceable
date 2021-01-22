import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className='f3'>
        {'This Magic Brain will detect faces in your pictures. Git it a try.'}
      </p>
      <div className='center'>
        <div className='form center pa4 br3 shadow-5'>
          <input className='f4 pa2 w-70 center' type='tex' placeholder="Enter Image URL here" onChange={onInputChange}/>
          <button
            className='w-30 grow f4 link ph3 pv2 dib white bg-dark-blue ba--white'
            onClick={onButtonSubmit}
          >DETECT !</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;