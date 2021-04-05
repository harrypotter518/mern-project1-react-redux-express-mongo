import React, { Fragment, useState } from 'react';
import { MaterialDropZone } from 'enl-components';

function UploadInputAll() {
  const [files] = useState([]);

  return (
    <Fragment>
      <div>
        <MaterialDropZone
          files={files}
          showPreviews
          maxSize={5000000}
          filesLimit={5}
          text="Drag and drop file(s) here or click"
        />
      </div>
    </Fragment>
  );
}

export default UploadInputAll;
