import './second.css'
function Second(props){
    console.log(props);
    return (
        <div className="Second">
            <h1> Second component which is child to First component</h1>
            <h1> {props.data.name}</h1>
            <h1> {props.data.age}</h1>
        </div>
        
    )
}
export default Second;
