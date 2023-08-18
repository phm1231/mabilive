function NavigationBar(){

    return(
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="container-fluid w-50">
            <a className="navbar-brand" href="/home">마비노기 기댓값 계산기</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="/home">세공</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/enchant">인챈트</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/stone">개조석</a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
    )
}

export default NavigationBar;