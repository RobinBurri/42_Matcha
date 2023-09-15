import { useState } from 'react'

import Button from '../../UI/Button'
import styles from './BaseForm.module.css'
import EmailInput from './EmailInput'
import FirstNameInput from './FirstNameInput'
import LastNameInput from './LastNameInput'
import PasswordInput from './PasswordInput'
import NicknameInput from './NicknameInput'

const BaseForm = () => {
    const [firstName, setFirstName] = useState('')
    const [LastName, setLastName] = useState('')
    const [nickname, setNickname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div>
                <FirstNameInput value={firstName} setFirstname={setFirstName} />
                <LastNameInput value={LastName} setLastname={setLastName} />
                <NicknameInput value={nickname} setNickname={setNickname} />
                <EmailInput value={email} setEmail={setEmail} />
                <PasswordInput value={password} setPassword={setPassword} />
            </div>
            <div className={styles.form_action}>
                <Button type="submit" onClick={() => {}}>
                    Submit
                </Button>
                <Button type="reset" onClick={() => {}}>
                    Cancel
                </Button>
            </div>
        </form>
    )
}

export default BaseForm
