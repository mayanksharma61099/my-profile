import style from '@/styles/content.module.css';
import ContactDetails from './contact-details';

export default function ContactContent ()
{
    return (
        <div>
            <div id='Home' className={`tab-pane active ${style.fade_in}`}>
                <h1 className={style.project_title}>Let's Connect</h1>
                <br />
                <ContactDetails image='/img/email.png' link='mailto:mayanksharma61099@gmail.com' name ='mayanksharma61099@gmail.com' /><br />
                <ContactDetails image='/img/linkedin.png' link='https://linkedin.com/in/mayank-sharma- ab9784121/' name ='Mayank Sharma' /><br />
                <ContactDetails image='/img/twitter.png' link='https://twitter.com/Mayank61099' name ='Mayank.61099' /><br />
            </div>
        </div>
    );
}