import Button from '../../UI/Button'
import styles from './BaseForm.module.css'
import EmailInput from './EmailInput'
import FirstNameInput from './FirstNameInput'
import LastNameInput from './LastNameInput'
import PasswordInput from './PasswordInput'

const BaseForm = () => {

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    }
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div>
                <FirstNameInput></FirstNameInput>
                <LastNameInput></LastNameInput>
                <EmailInput></EmailInput>
                <PasswordInput></PasswordInput>
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
