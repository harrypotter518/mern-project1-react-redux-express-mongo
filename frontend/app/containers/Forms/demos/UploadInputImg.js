import React, { Fragment, useState } from 'react';
import { MaterialDropZone } from 'enl-components';

function UploadInputImg() {
  const [files] = useState([]);

  return (
    <Fragment>
      <div>
        <MaterialDropZone
          acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
          files={files}
          showPreviews
          maxSize={5000000}
          filesLimit={5}
          text="Drag and drop image(s) here or click"
        />
      </div>
    </Fragment>
  );
}

export default UploadInputImg;
