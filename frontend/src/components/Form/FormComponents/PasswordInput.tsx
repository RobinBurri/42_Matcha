import { useState } from 'react'

import styles from './Input.module.css'

interface PasswordInputProps {
    value: string
    setPassword: (value: string) => void
}

const PasswordInput = (props: PasswordInputProps) => {
    const [isValid, setIsValid] = useState(true)

    const BlurHandler = () => {
        if (props.value.trim().length === 0) {
            setIsValid(false)
        }
    }
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setPassword(event.target.value)
        if (props.value.trim().length === 0) {
            setIsValid(true)
        }
    }
    return (
        <div className={styles.input_group}>
            <input
                type="password"
                className={styles.form_field}
                name="password"
                id="password"
                value={props.value}
                onChange={handleChange}
                onBlur={BlurHandler}
                autoComplete="off"
                required
            />
            <label className={styles.form_label}>Password</label>
            {!isValid && (
                <p className={styles.form_error}>Password is required</p>
            )}
        </div>
    )
}

export default PasswordInput
