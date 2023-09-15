import { useState } from 'react'
import styles from './Input.module.css'


interface PasswordInputProps {
    onFormSubmit: (e: React.FormEvent) => void
}

const PasswordInput = (props: PasswordInputProps) => {
    const [password, setPassword] = useState('')
    return (
        <div className={styles.input_group}>
            <input
                type="password"
                className={styles.form_field}
                name="password"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                autoComplete="off"
                required
            />
            <label className={styles.form_label}>Password</label>
        </div>
    )
}

export default PasswordInput
