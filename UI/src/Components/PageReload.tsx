// import { useDispatch } from "react-redux";
// import type { AppDispatch } from "../Store/store";
// import { Setnavigation } from "../Store/Navigation";

import { useDispatch } from "react-redux";
import type { AppDispatch } from "../Store/store";
import { Setnavigation } from "../Store/Navigation";

// const PageReoloadpath = () => {



//     const dispatch = useDispatch<AppDispatch>();

//     // console.log(window.location.pathname.split("/")[2])
//     const role = 'admin'
//     const Test = () => {
//         if (role == "admin") {
//             console.log("user role is admin")

//             return dispatch(Setnavigation(window.location.pathname.split("/")[2]))
//         }
//         else if (role == "Padmin") {
//             console.log("user role is Paltformadmin")
//             dispatch(Setnavigation(window.location.pathname.split("/")[2]))

//             return console.log(window.location.pathname.split("/")[2])
//         }
//         else {
//             console.log("Role is User")
//             dispatch(Setnavigation(window.location.pathname))
//             return console.log(window.location.pathname)
//         }
//     }

//     Test();
//     return (
//         <>
//         </>
//     )

// }

// export default PageReoloadpath


function PageReload() {
    const dispatch = useDispatch<AppDispatch>();

    // console.log(window.location.pathname.split("/")[2])
    const role = 'admin'
    const Test = () => {
        if (role == "admin") {
            console.log("user role is admin")

            return dispatch(Setnavigation(window.location.pathname.split("/")[2]))
        }
        else if (role == "Padmin") {
            console.log("user role is Paltformadmin")
            dispatch(Setnavigation(window.location.pathname.split("/")[2]))

            return console.log(window.location.pathname.split("/")[2])
        }
        else {
            console.log("Role is User")
            dispatch(Setnavigation(window.location.pathname))
            return console.log(window.location.pathname)
        }
    }

    Test();
    return (
        // <div>PageReload</div>
        <></>
    )
}

export default PageReload