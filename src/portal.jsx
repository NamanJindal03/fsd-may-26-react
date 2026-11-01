import ReactDom from 'react-dom'
function Portal({show, closeModal}){
    if(!show) return null
    return ReactDom.createPortal(
        <p>
            Portal created
        </p>,
        document.getElementById("portal")
    )
}
export default Portal