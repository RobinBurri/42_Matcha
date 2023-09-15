import styles from './Input.module.css'


const LastNameInput = () => {
    return (
        <div className={styles.input_group}>
            <input
                type="input"
                className={styles.form_field}
                placeholder="Name"
                name="name"
                id="name"
                required
            />
            <label className={styles.form_label}>Last Name</label>
        </div>
    )
}

export default LastNameInput