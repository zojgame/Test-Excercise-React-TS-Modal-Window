import {useState} from 'react';
import SendData from '../axtions/axios-actions';
type ModalWindowProps = {
    setModal: React.Dispatch<React.SetStateAction<boolean>>,
}

function ModalWindow({setModal} : ModalWindowProps):JSX.Element{
    window.onkeydown = (evt: KeyboardEvent): any => {
        if(evt.key === 'Escape'){
            setModal(false)
        }
   }
   const [textInput1, changeTextInput1] = useState('')
   const handleInputChange1 = (evt: React.FormEvent<HTMLInputElement>) => {
    changeTextInput1(evt.currentTarget.value);
   }

   const [textInput2, changeTextInput2] = useState('')
   const handleInputChange2 = (evt: React.FormEvent<HTMLInputElement>) => {
    changeTextInput2(evt.currentTarget.value);
   }

   const handleClickSendButton = () => {
        SendData({FIO: textInput1,EMail: textInput2});
        setModal(false);
   }


    return (<div className="modal">
        <p>Заявка на участие</p>
            <label className="text-input-container">
                <input type="text" className="text-input" placeholder="ФИО" onChange={handleInputChange1}/><br/>
            </label>

            <label className="text-input-container">
                <input type="text" className="text-input" placeholder="E-mail" onChange={handleInputChange2}/>
            </label>
            <div className="sent-btn" onClick={handleClickSendButton}>Отправить</div>
    </div>);
}

export default ModalWindow;