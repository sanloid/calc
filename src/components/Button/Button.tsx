import React, { FC } from 'react'

interface ButtonPropType {
    children: React.ReactNode,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
}

const Button: FC<ButtonPropType> = (props) => {
    return (
        <button className='border p-5 m-3 bg-yellow-200 hover:bg-yellow-400 rounded-full shadow-md' onClick={props.onClick ? props.onClick : () => null}>
            {props.children}
        </button>
    )
}


export default Button; 