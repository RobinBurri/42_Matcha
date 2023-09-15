import { useState } from 'react'
import styles from './Input.module.css'

interface FirstNameInputProps {
    onFormSubmit: (e: React.FormEvent) => void
}

const FirstNameInput = (props: FirstNameInputProps) => {
    const [firstName, setFirstName] = useState('')
    const [firstNameIsValid, setFirstNameIsValid] = useState(false);
    return (
        <div className={styles.input_group}>
            <input
                type="input"
                className={styles.form_field}
                name="first_name"
                id="first_name"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                autoComplete="off"
                required
            />
            <label className={styles.form_label}>First Name</label>
        </div>
    )
}

export default FirstNameInput
