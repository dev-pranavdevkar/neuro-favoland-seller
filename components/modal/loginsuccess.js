import React from 'react'
import { Button, Modal } from 'antd';


export default function Loginsuccess() {
    const [modal, contextHolder] = Modal.useModal();
    const countDown = () => {
        let secondsToGo = 2;
    
        const instance = modal.success({
          title: 'You have logged in successfully',
        //   content: `This modal will be destroyed after ${secondsToGo} second.`,
        });
    
        const timer = setInterval(() => {
          secondsToGo -= 1;
          instance.update({
            // content: `This modal will be destroyed after ${secondsToGo} second.`,
          });
        }, 1000);
    
        setTimeout(() => {
          clearInterval(timer);
          instance.destroy();
        }, secondsToGo * 1000);
      };
  return (
    <div>
        <Button onClick={countDown}>Open modal to close in 5s</Button>
      {contextHolder}
    </div>
  )
}
