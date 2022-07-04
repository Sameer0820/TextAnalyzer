import React from 'react'

export default function About(props) {
    let myStyle = {
        color: props.mode === 'dark'?'white':'rgb(29, 26, 26)',
        backgroundColor: props.mode==='light'?'white':'rgb(29, 26, 26)',
    }
    return (
        <div className='container' style={myStyle}>
            <h2 className='my-3'>About Us</h2>
            <div className="accordion" id="accordionExample" style={{border: '1px solid white'}}>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingOne" style={{border: '1px solid white'}}>
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                            <strong> Analyze Your Text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>TextUtils</strong> gives you a way to analyze your text quickly and efficiently. Be it word count, character count, removing extra spaces, changing the font and much more.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingTwo" style={{border: '1px solid white'}}>
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                           <strong> Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>TextUtils </strong>is a free character count tool that provides instant character count & word count statistics for a given text.<strong> TextUtils</strong> reports the number of words and characters. Thus it is suitable for writing text with word/character limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingThree" style={{border: '1px solid white'}}>
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                           <strong> Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            This word counter software works in any web browsers such as <strong> Chrome, Firefox, Internet Explorer, Safari, Opera.</strong> It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
