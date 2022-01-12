import React, { Fragment, useState } from "react"
import {
    Button,
    Field,
    Control,
    Input,
    Column,
    Section,
    Help,
    Label
} from "rbx"
import { Navigate } from "react-router-dom"
function LoginForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [RedirectToRegister, setRedirectToRegister] = useState(false)
    const [RedirectToNotes, setRedirectToNotes] = useState(false)
    const [error, setError] = useState(false)

    if (RedirectToRegister) return <Navigate to="/register" />
    else if (RedirectToNotes) return <Navigate to="/notes" />

    return (
        <Fragment>
            <Column.Group centered>
                <form>
                    <Column size={12}>
                        <Field>
                            <Label size="small">Email:</Label>
                            <Control>
                                <Input
                                    type="email"
                                    required
                                    name="email"
                                    value="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Control>
                        </Field>
                        <Field>
                            <Label size="small">Password:</Label>
                            <Control>
                                <Input
                                    type="password"
                                    required
                                    name="password"
                                    value="password"
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </Control>
                        </Field>
                        <Field>
                            <Control>
                                <Column.Group breakpoint="mobile">
                                    <Column>
                                        <a
                                            onClick={(e) =>
                                                setRedirectToRegister(true)
                                            }
                                            className="button is-white has-text-custom-purple"
                                        >
                                            Register or
                                        </a>
                                    </Column>
                                    <Column>
                                        <Button color="custom-purple" outlined>
                                            Login
                                        </Button>
                                    </Column>
                                </Column.Group>
                            </Control>
                        </Field>
                        {error && (
                            <Help color="danger">
                                Email or Password invalid
                            </Help>
                        )}
                    </Column>
                </form>
            </Column.Group>
        </Fragment>
    )
}

export default LoginForm
