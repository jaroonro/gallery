import "./Modal.css"
import FileUpload from "./FileUpload";
function Modal(props){
    const {isVisible,onButtonClick,file,setFile,warningText,setVisible} = props;
    const handleContentClick = (e) => {
        // Stop event propagation to prevent background click from activating
        e.stopPropagation();
      };
    if(isVisible===false)
    return(
    null
    )

    return(
        <div className='modal' style={{display: "block"}}>
            <div className='modal-bg' onClick={()=>{
                if(isVisible)setVisible(false);
            }}>
                <div className='modal-content' onClick={handleContentClick}>
                    <p className="warning">{warningText}</p>
                    <FileUpload file={file} setFile={setFile}/>
                    <input type="text" placeholder="image URL pls" className="inputUrl"/>
                    <input type="text" placeholder="Title here" className="inputTitle"/>
                    <input type="text" placeholder="Title here" className="inputDescription"/>
                    <button onClick={onButtonClick}>Submit</button>
                </div>
            </div>
            
        </div>
    )
};
export function getTitle(){
    return document.getElementsByClassName("inputTitle")[0].value;
}
export function getThumbnail(){
    return document.getElementsByClassName("inputUrl")[0].value;
}
export function getDescription(){
    return document.getElementsByClassName("inputDescription")[0].value;
}
export default Modal;