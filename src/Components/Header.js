import React from 'react'
import "./css/Header.css"

export default class Header extends React.Component {
    render() {
        return (
            <header className='row ms-0'>
                <div className="col-12 col-sm-4">
                    <div className="picDiv img-thumbnail"
                        style={{ display: "block", margin: 'auto', width: 80, height: 60, marginTop: 20 }}>
                    </div>
                </div>
                <div className="col-12 col-sm-8 text-center">
                    <span style={{ color: 'white', fontSize: 56 }}>
                        My Website
                    </span>
                </div>
            </header>

        )
    }
}
