import { useState } from 'react';

function InputField(props){

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
      setInputValue(e.target.value); 
    };

    return(
        <div className="contact-box-wrapper flex flex-col items-start space-y-3 bg-transparent">
            <h1 className="text-black-800 font-medium">{props.boxTitle}</h1>
                <div classname="flex items-center">
              <input
                  type="text"          
                  value={inputValue}     
                  onChange={handleInputChange}  
                  placeholder="Type here..."
                  className="border-2 border-gray-100 p-2 rounded-md w-96"
              />
        </div>
    </div>
    );
}

export default InputField;