import React, { useState } from 'react';

const useImageProcess = (imageData) => {
    const [image,setImage] = useState(null)
    const formData = new FormData()
    formData.append('image', imageData[0])

    fetch(`https://api.imgbb.com/1/upload?key=980c5aa9b32d7a954c2c27ea3bb7f131`, {
        method: 'POST',
        body: formData
    })
        .then(res => res.json())
        .then(res => setImage(res.data.url))

    return image
};

export default useImageProcess;