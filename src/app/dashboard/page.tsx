import React from 'react'

const dashboard = () => {
  return (
    <div className='flex gap-4 mt-4 overflow-auto scrollbar-none'>
      <div className='main'>
        <div className='cards'>
          CARD 1
        </div>
        <div className='flex '>
        <div className='transactions'>CARD 2</div>
        <div className='Chat'>CARD 3</div>
        </div>
      </div>

      <div className='side'>
        <div className='Rigthbar'>
          CARD 4
        </div>
        <div className='transactions'>CARD 5</div>
      </div>
    </div>
  )
}

export default dashboard 
