import React from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

const Toasty = ({header,body}) => {
  return (
    <div>
      <div className="p-3 my-2 rounded">
        <Toast>
          <ToastHeader>
            {header}
          </ToastHeader>
          <ToastBody>
          {body}
          </ToastBody>
        </Toast>
      </div>
      </div>
  )
}
export default Toasty