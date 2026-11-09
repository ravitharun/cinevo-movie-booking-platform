

function App() {
  let user_role = "admin";
  if (user_role == "user") {
    window.location.href = "/explore/home"
  }
  else if (user_role == "admin") {

    window.location.href = "/admin/Dashboard"
  }
  else {
    window.location.href = "/Padmin/Dashboard"

  }
  return (


    <>
    
    </>
  )
}

export default App