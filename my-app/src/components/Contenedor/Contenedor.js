export const Contenedor = ({children}) => {

     const styles = {
        margin: '30px 40px',
        maxWidth: '1200px'
    }

    return (
        <div style={styles}>
            {children}
        </div>
    )
}