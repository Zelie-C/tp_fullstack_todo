import styles from "@/styles/Home.module.css"

const Colorbox = (props: {color: string, isComputer: boolean, colorToLight: string, onClick: (clickedColor: string) => void}) => {
    
    return (
        <div 
            className={`${styles.colorbox} ${styles[`${props.color}box`]} ${props.isComputer && props.colorToLight === props.color ? styles[`${props.color}box`] : styles.darker}`}
            onClick={() => props.onClick(props.color)}></div>
    )
    
}

export default Colorbox