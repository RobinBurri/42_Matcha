import { useState } from 'react'
import styles from './Input.module.css'

interface FirstNameInputProps {
    value: string
    setFirstname: (value: string) => void
}

const FirstNameInput = (props: FirstNameInputProps) => {
    const [isValid, setIsValid] = useState(true)

    const BlurHandler = () => {
        if (props.value.trim().length === 0) {
            setIsValid(false)
        }
    }
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setFirstname(event.target.value)
        if (props.value.trim().length === 0) {
            setIsValid(true)
        }
    }

    return (
        <div className={styles.input_group}>
            <input
                type="input"
                className={styles.form_field}
                name="first_name"
                id="first_name"
                value={props.value}
                onChange={handleChange}
                onBlur={BlurHandler}
                autoComplete="off"
                required
            />
            <label className={styles.form_label}>First Name</label>
            {!isValid ? (
                <p className={styles.form_error}>First name is required</p>
            ): <p className={styles.form_info}>* First name must be at between 4 and 20 characters</p>}
       
        </div>
    )
}

export default FirstNameInput
