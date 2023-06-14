import style from '@/styles/navigation-bar.module.css'
import NavigationItems from './navigation-items';

export default function NavigationBar () {

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
        <div className={style.navformat}>
            <div className="container">
                <ul className={`nav nav-pills justify-content-end`} role="tablist">
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
    );
}