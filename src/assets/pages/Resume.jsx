import React from 'react';
import resume from '../utils/Resume.pdf'
import { Document, Page, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workSrc = '//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js'

export default function Resume() {
    return (
        <div>
          <h1>Resume</h1>
        </div>
    ),
        <div className='res'>
          <h2 className='heading'>Resume</h2>
            <Document
              file={resume}
              onLoadError={console.error}
              style={{ width: '100vw', height: 'auto'}}
            >
              <Page pageIndex={0}/>
            </Document>
        </div>
}
