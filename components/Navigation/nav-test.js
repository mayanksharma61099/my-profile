import style from '@/styles/navigation-bar.module.css'
import NavigationItems from './navigation-items';

export default function NavigationMobile () {

    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch("docs/Mayank_Sharma_Resume.pdf").then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Mayank_Sharma_Resume.pdf';
                alink.click();
            })
        })
    }

    return (
        <>
            <div class="collapse in" id="navbarToggleExternalContent">
                <div>
                    <div className={`container`} aria-expanded='true'>
                        <ul className={`navbar-nav flex-grow-1 pe-3`} style={{textAlign:'center'}} role="tablist">
                            <NavigationItems link ='Home' />
                            <NavigationItems link = 'About'/>
                            <NavigationItems link = 'Portfolio' />
                            <NavigationItems link = 'Projects' />
                            <NavigationItems link = 'Achievements' />
                            <NavigationItems link = 'Contact' />
                            <li><button onClick={onButtonClick} className='btn btn-dark'>Download CV</button></li>
                        </ul>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" 
                    aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
        </>
    );
}