import { useState } from 'react'
import styles from './Input.module.css'

interface EmailInputProps {
    value: string;
    setEmail: (value: string) => void;
}

const EmailInput = (props: EmailInputProps) => {
    const [isValid, setIsValid] = useState(true)

    const BlurHandler = () => {
        if (props.value.trim().length === 0) {
            setIsValid(false)
        }
    }
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setEmail(event.target.value)
        if (props.value.trim().length === 0) {
            setIsValid(true)
        }
    }
    return (
        <div className={styles.input_group}>
            <input
                type="email"
                className={styles.form_field}
                name="email"
                id="email"
                value={props.value}
                onChange={handleChange}
                onBlur={BlurHandler}
                autoComplete="off"
                required
            />
            <label className={styles.form_label}>Email</label>
            {!isValid ? (
                <p className={styles.form_error}>Email is required</p>
            ): <p className={styles.form_info}>* Email must be valid</p>}
        </div>
    )
}

export default EmailInput
