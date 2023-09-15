import { useState } from 'react';

import styles from './Input.module.css'


const EmailInput = () => {
    const [email, setEmail] = useState('');
    return (
        <div className={styles.input_group}>
            <input
                type="email"
                className={styles.form_field}
                name="email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                autoComplete="off"
                required
            />
            <label className={styles.form_label}>Email</label>
        </div>
    )
}

export default EmailInput