import Button from '../../UI/Button'
import classes from './BaseForm.module.css'

const BaseForm = () => {
    return (
        <form>
            <div></div>
            <div className={classes.form_action}>
                <Button type="submit" onClick={() => {}}>
                    Submit
                </Button>
                <Button type="button" onClick={() => {}}>
                    Cancel
                </Button>
                <Button type="reset" onClick={() => {}}>
                    Cancel
                </Button>
            </div>
        </form>
    )
}

export default BaseForm
