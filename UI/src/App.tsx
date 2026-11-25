import { useNavigate } from "react-router-dom";
import WelcomePage from "./Components/WelcomePage";
import { token, userInfo } from "./Services/Tokeservices";
import { useEffect } from "react";


function App() {

  const navigate = useNavigate()
  useEffect(() => {


    const test = () => {
      let user_role = JSON.parse(userInfo)?.Role;





      if (user_role == "user") {
        navigate("/explore/home")
      }
      else if (user_role === "Admin" || "admin") {
        console.log("first")
        navigate("/admin/Dashboard")
      }
      else {
        navigate("/admin/Dashboard")

      }
    }
    test()
  }, [userInfo])

  return (


    <>
      <WelcomePage></WelcomePage>

    </>
  )
}

export default App