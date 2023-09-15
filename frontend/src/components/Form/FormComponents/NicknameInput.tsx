import { useState } from 'react'
import styles from './Input.module.css'

interface NicknameInputProps {
    value: string
    setNickname: (value: string) => void
}

const NicknameInput = (props: NicknameInputProps) => {
    const [isValid, setIsValid] = useState(true)

    const BlurHandler = () => {
        if (props.value.trim().length === 0) {
            setIsValid(false)
        }
    }
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setNickname(event.target.value)
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
            <label className={styles.form_label}>Nickname</label>
            {!isValid && (
                <p className={styles.form_error}>Nickname is required</p>
            )}
        </div>
    )
}

export default NicknameInput