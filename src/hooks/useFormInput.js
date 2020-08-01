import { useState } from "react";

export const useFormInput = (initialState = {}) => {
    const [values, setValues] = useState(initialState);

    const reset = ()=>{
        setValues(initialState);
    }

    const handleInputChange = ({target}) =>{
        setValues({
            [target.name]: target.value //asocio el name con el value y capturo el valor en el metodo onChange
        });
    }

    return [values, handleInputChange, reset];

}
