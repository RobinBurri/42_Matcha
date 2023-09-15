import styles from './Input.module.css'


const EmailInput = () => {
    return (
        <div className={styles.input_group}>
            <input
                type="email"
                className={styles.form_field}
                name="email"
                id="email"
                required
            />
            <label className={styles.form_label}>Email</label>
        </div>
    )
}

export default EmailInput