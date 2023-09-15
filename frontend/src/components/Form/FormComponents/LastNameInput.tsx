import { useState } from 'react'
import styles from './Input.module.css'

const LastNameInput = () => {
    const [LastName, setLastName] = useState('')
    return (
        <div className={styles.input_group}>
            <input
                type="input"
                className={styles.form_field}
                name="last_name"
                id="last_name"
                value={LastName}
                onChange={(event) => setLastName(event.target.value)}
                autoComplete="off"
                required
            />
            <label className={styles.form_label}>Last Name</label>
        </div>
    )
}

export default LastNameInput
