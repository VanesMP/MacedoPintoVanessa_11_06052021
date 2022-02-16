import '../styles/components-style/Banner.css'

function Banner({children}){
    return (
        <div className="banner">
            {children}
    </div> 
    );
};

export default Banner;

 /*<div className="banner">
            <img src={children} alt="kasa-location-appartements" />
        <h1 className="slogan">Chez vous, partout et ailleurs</h1>
    </div> */