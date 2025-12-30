import React from 'react'

function Banner() {
  return (
    <div className = 'h-[90vh] md:h-[75vh] bg-cover bg-center bg-no-repeat flex items-end' style = {{backgroundImage : 'url(https://imgs.search.brave.com/kIpnAquVIKnVSv4QoqXx6-Tg5SfgvG8IqYVgYzC_ddo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDUyODE3/MzEuanBn)'}}>
        <div className = "text-white text-2xl text-center w-full bg-gray-900/60 p-4">
            Avengers Endgame
        </div>
        </div>
  )
}

export default Banner