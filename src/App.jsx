import React, { Component, Fragment } from 'react'
import { Alert } from 'react-bootstrap'
import './App.scss'
//Imports componentes!
import CalendarComponent from './components/Calendar'

class App extends Component {
    render() {
        return (
            <Fragment>
                <section className="container">
                    <Alert variant="info" className="text-center">
                        <img src="src/assets/logo.svg" alt="" className="logo" />
                        <h4>ReactJS Calendar Example! 🚀</h4>
                    </Alert>
                </section>
                {/* <!-- Calendar --> */}
                <section className="container mt-5">
                    <CalendarComponent />
                </section>
            </Fragment>
        )
    }
}

export default App
