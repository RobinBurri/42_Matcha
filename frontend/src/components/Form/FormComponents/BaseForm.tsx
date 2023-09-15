import Button from '../../UI/Button'
import styles from './BaseForm.module.css'
import FirstNameInput from './FirstNameInput'
import LastNameInput from './LastNameInput'

const BaseForm = () => {
    return (
        <form className={styles.form}>
            <div>
               <FirstNameInput></FirstNameInput>
               <LastNameInput></LastNameInput>
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
