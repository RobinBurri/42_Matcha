import { useState } from 'react'
import styles from './Input.module.css'

interface LastNameInputProps {
    value: string
    setLastname: (value: string) => void
}

const LastNameInput = (props: LastNameInputProps) => {
    const [isValid, setIsValid] = useState(true)

    const BlurHandler = () => {
        if (props.value.trim().length === 0) {
            setIsValid(false)
        }
    }
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setLastname(event.target.value)
        if (props.value.trim().length === 0) {
            setIsValid(true)
        }
    }
    return (
        <div className={styles.input_group}>
            <input
                type="input"
                className={styles.form_field}
                name="last_name"
                id="last_name"
                value={props.value}
                onChange={handleChange}
                onBlur={BlurHandler}
                autoComplete="off"
                required
            />
            <label className={styles.form_label}>Last Name</label>
            {!isValid && (
                <p className={styles.form_error}>Last Name is required</p>
            )}
        </div>
    )
}

export default LastNameInput
