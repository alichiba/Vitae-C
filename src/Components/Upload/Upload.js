import React, { useState } from 'react';
import makeApiCall from '../../api';

const Upload = () => {
    const [file, setFile] = useState()
	const [isFilePicked, setIsFilePicked] = useState(false);

	const changeHandler = (event) => {
		setFile(event.target.files[0]);
		setIsFilePicked(true);
	};

	const handleSubmission = () => {
        makeApiCall(file);
        console.log(file);
	};


  return (
    <div>
        <input type="file" onChange={changeHandler} />
          <button onClick={handleSubmission}>Submit</button>    
    </div>
  )
}

export default Upload;