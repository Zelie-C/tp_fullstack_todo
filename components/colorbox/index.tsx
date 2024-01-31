import styles from "@/styles/Home.module.css"

const Colorbox = (props: {color: string, className: string, onClick: (clickedColor: string) => void}) => {
    
    return (
        <div 
            className={props.className}
            onClick={() => props.onClick(props.color)}></div>
    )
    
}

export default Colorbox