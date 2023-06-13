import React from 'react'

const Button = ({name , onClick}) => {
  return (
    <button onClick={onClick} className='btn btn-accent text-[12px] font-semibold max-w-[180px]'>
        {name}
    </button>
  )
}

export default Button