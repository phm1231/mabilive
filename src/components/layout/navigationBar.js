function NavigationBar(){

    return(
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
            <div class="container-fluid w-50">
            <a class="navbar-brand" href="/home">마비노기 기댓값 계산기</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="/home">세공</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/enchant">인챈트</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/stone">개조석</a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
    )
}

export default NavigationBar;