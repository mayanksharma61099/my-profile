import style from '@/styles/content.module.css'
import Typewriter from 'typewriter-effect';

export default function HomeContent () {
    return (
        <div className={`${style.home_content} ${style.fade_in}`}>
            <div id='Home' className='tab-pane active'>
                <h2>Hi, Myself Mayank Sharma</h2>
                <br />
                <h2>I am </h2><br />
                <h1>
                    <Typewriter
                    options={{
                        strings: ['Software Engineer', 'Web Developer', 'Innovator'],
                        autoStart: true,
                        loop: true
                    }}
                /></h1>
            </div>
        </div>
    );
}