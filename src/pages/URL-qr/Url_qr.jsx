import React, { useState } from 'react'
import { QRCodeCanvas } from 'qrcode.react'
import './Url_qr.scss'

const Url_qr = () => {
  const [value, setValue] = useState('https://example.com')

  const downloadQRCode = () => {
    const canvas = document.getElementById('qr-canvas')
    if (!canvas) return
    const url = canvas.toDataURL('image/png')
    const link = document.createElement('a')
    link.href = url
    link.download = 'qr-code.png'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="url-parent parent">
      <div className="url-cont container">
        <p>Enter your URL and get a QR code instantly</p>

        <div className="main-box">
          <div className="left-box">
            <h2 className="label">URL</h2>
            <input
              className="url-input"
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="https://exampleurl.com"
            />



            <button className="btn" onClick={() => { }}>Generate</button>
          </div>

          <div className="right-box">
            <h2 className="label">Preview QR code </h2>
            <div className="preview">
              <QRCodeCanvas id="qr-canvas" value={value || ' '} />
            </div>

            <button className="btn" onClick={downloadQRCode}>Download QR</button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Url_qr
