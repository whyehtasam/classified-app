
import React from 'react'; 
import { Button } from 'primereact/button';

export default function BasicDemo({ label}) {
    return (
        <div className="card flex justify-content-center">
            <Button label={label}  className='w-full py-3  focus:ring-0 border'/>
        </div>
    )
}
        