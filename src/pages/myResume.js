import React from 'react';

function MyResume() {
    return (
        <div style={{ height: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <object
                data="/ChanMeng.pdf"
                type="application/pdf"
                width="100%"
                height="100%"
            >
                <iframe src="/ChanMeng.pdf" width="100%" height="100%">
                    <p>This browser does not support PDFs. Please download the PDF to view it: <a href="/ChanMeng.pdf">Download PDF</a>.</p>
                </iframe>
            </object>
        </div>
    );
}

export default MyResume;
