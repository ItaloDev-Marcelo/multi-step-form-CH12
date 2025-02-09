import bg from "../../assets/images/bg-sidebar-desktop.svg"

export default function Result() {
  return (
    <div className="form-container" >
      <div className="container-img">
        <img src={bg} className="bg" />
        <ul>
          <li className="navagation">1</li>
          <li className="navagation">2</li>
          <li className="navagation">3</li>
          <li className="navagation active">4</li>
        </ul>
      </div>
      <h3>Finish form</h3>
    </div >
  )
}