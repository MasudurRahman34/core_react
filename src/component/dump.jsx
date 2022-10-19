import React from "react";
// functional component
function Dump ({msg}) {
    return(
        <div>
            <h3>i am dump</h3>
            <p>{msg}</p>
        </div>
    );
} 
// const Dump = (props) => (
//         <div>
//             <h3>i am dump</h3>
//             <p>{props.msg}</p>
//         </div>
// )
export default Dump;