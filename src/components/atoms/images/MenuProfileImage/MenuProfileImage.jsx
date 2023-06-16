import "./MenuProfileImage.css"

function MenuProfileImage(props){
    let source = props.source;
    return(
        <div>
            <img src = {source} className="MenuProfileImage"></img>
        </div>
    )
}

export default MenuProfileImage;