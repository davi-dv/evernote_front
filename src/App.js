import React, { Fragment } from "react"
import "./App.scss"
import { Notification, Section } from "rbx"

const App = () => (
    <Fragment>
        <div>
            <Section>
                <Notification color="success">Javascript Notes!</Notification>
            </Section>
        </div>
    </Fragment>
)

export default App
