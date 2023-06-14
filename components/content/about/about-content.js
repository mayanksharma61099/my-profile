import style from '@/styles/content.module.css';

export default function About () {
    return (
        <div className={`${style.home_content} ${style.fade_in}`}>
            <div id='Home' className='tab-pane active'>
                <h1>About Me</h1>
                <br />
                <p>An enthusiastic, passionate, fast learner and motivated individual with an Industry Experience and 
                    hands-on experience on different Object-Oriented Programming Languages, Algorithms, and development tools, 
                    seeking opportunities to grow myself in an industry leading company, where I can use my problem-solving 
                    skills to the advantage of the company and provide Technical Solutions while having the scope of growing 
                    my own skills.</p>
            </div>
        </div>
    );
}