import React from 'react'

function Service({ text, iconClass, iconColor, bgColor }) {
  return (
    <div
      id="w-node-_3a6e22a5-d5d4-4d09-0e86-eefd41c4bf5f-5b7b51fb"
      className="icon-2 flex flex-col items-center text-center p-4 rounded-2xl shadow-md"
    >
      <div className="img" style={{ background: bgColor }}>
        <i className={iconClass} style={{ color: iconColor, fontSize: "24px" }}></i>
      </div>
      <div className="p-skil-text">
        <div className="body-small-14">{text}</div>
      </div>
    </div>
  )
}

export default Service
