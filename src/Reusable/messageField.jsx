import { useState } from 'react';

function MessageField(props){

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
      setInputValue(e.target.value); 
    };

    return(
        <div className="contact-box-wrapper flex flex-col items-start space-y-3 bg-transparent">
            <h1 className="text-black-800 font-medium">{props.captionTitle}</h1>
                <div classname="flex items-center">
              <textarea
                  type="text"          
                  value={inputValue}     
                  onChange={handleInputChange}  
                  placeholder="Type here..."
                  className="border-2 border-gray-100 p-2 rounded-md w-96 h-60 resize-none"
              />
        </div>
    </div>
    );
}

export default MessageField;