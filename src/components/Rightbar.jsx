import React from 'react'

function Rightbar() {
  return (
    <div className='h-4/5 flex-1 flex flex-col justify-between border-rounded-xl'>
      <div>
        <div>댓글</div>
      </div>
      <div className='flex'>
        <input/>
        <button>댓글작성</button>
      </div>
    </div>
  )
}

export default Rightbar