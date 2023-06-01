const Header = () => {
    return(
        <header className="container-fluid d-flex justify-content-end">
            <div className="d-flex align-items-center">
                <div >
                    <span className="d-block m-0 p-0 text-white">Barbearia EstiloMaloka</span>
                    <small className="m-0 p-0">Plano Anual</small>
                </div>
                <img src="https://img.freepik.com/fotos-gratis/homem-bonito-e-confiante-sorrindo-com-as-maos-cruzadas-no-peito_176420-18743.jpg"/>
                <span className="mdi mdi-chevron-down text-white"></span>
            </div>    
        </header>
    );
};

export default Header;