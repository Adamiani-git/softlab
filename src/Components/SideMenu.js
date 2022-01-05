import React from "react";
import './css/sideMenu.css'

export default class SideMenu extends React.Component {
    render() {

        return (
            <div className="col-md-3 left ps-0 bg-light row mx-0 align-content-start">
                <div className="col-6 col-md-12">

                    <nav>
                        <ul className="navigation text-center">
                            <li><a href="/">Home</a></li>

                            <li><a href="#">MyMarket</a> </li>

                            <li><a href="#"> JavaScript</a></li>

                            <li><a href="#">Boring Things</a></li>

                            <li><a href="#">Form</a></li>

                        </ul>
                    </nav>
                </div>
                <div className="col-6 col-md-12">

                    <div className="underNav">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut
                        aliquip ex ea commodo consequat.
                    </div>
                </div>
                <hr className="d-md-none" />
            </div>
        )
    }
}
