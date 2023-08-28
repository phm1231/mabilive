import { Link } from "react-router-dom";

function NavigationBar(){
    return(
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="container-fluid w-50">
            <Link className="navbar-brand" to="/">마비노기 기댓값 계산기</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/">세공</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/enchant">인챈트</Link>
                </li>
                </ul>
            </div>
            </div>
        </nav>
    )
}

export default NavigationBar;