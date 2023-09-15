import styles from './Button.module.css'

interface ButtonProps {
    type: 'button' | 'submit' | 'reset'
    onClick: () => void
    children: React.ReactNode
}

const Button = (props: ButtonProps) => {
    const typeStyles: Record<string, string> = {
        button: styles.primary,
        submit: styles.success,
        reset: styles.warning,
    }

    const customStyle = typeStyles[props.type]

    return (
        <button
            className={`${styles.button} ${customStyle}`}
            type={props.type}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}

export default Button
