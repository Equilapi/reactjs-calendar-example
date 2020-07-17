import React, { useState, Fragment } from 'react'
import Calendar from 'react-calendar'
import { Row, Col, Alert } from 'react-bootstrap'

const CalendarComponent = () => {
    const [dateIn, setDateIn] = useState(new Date())
    const [dateRange, setDateRange] = useState(new Date())
    
    const handleChangeDate = (value) => {
        setDateIn(value)
    }

    const handleRange = (value) => {
        setDateRange(value)
    }
    return (
        <Fragment>
            <Row>
                <Col>
                    <h2>Default</h2>
                    <Alert variant="success">
                        <h6>{`${JSON.stringify(dateIn)}`}</h6>
                    </Alert>
                    <Calendar
                        onChange={handleChangeDate}
                        value={dateIn}
                    />
                </Col>
                <Col>
                    <h2>Range</h2>
                    <Alert variant="success">
                        <h6>{`${JSON.stringify(dateRange)}`}</h6>
                    </Alert>
                    <Calendar
                        selectRange={true}
                        onChange={handleRange}
                        value={dateRange}
                    />
                </Col>
            </Row>
        </Fragment>
    )
}

export default CalendarComponent
