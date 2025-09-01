function Cell({ colour, border, onClick }) {
    return (
        // Default Styling For Grid Cell
        <div 
            onClick={onClick}
            className={`size-8 ${colour} ${border} flex items-center justify-center`}
        >        
        </div>    
    )
}

export default Cell