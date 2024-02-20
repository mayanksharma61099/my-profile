import style from '@/styles/content.module.css';

export default function About () {
    return (
        <div className={`${style.home_content} ${style.fade_in}`}>
            <div id='Home' className='tab-pane active'>
                <h1>About Me</h1>
                <br />
                <p>An enthusiastic, committed, fast learner and motivated individual with an 3+ years of Industry Experience, 
                    2+ years of team leading and hands-on experience on testing and developing full stack web applications, 
                    seeking Software Engineering opportunities in an industry leading company where I can use my 
                    problem-solving skills to the advantage of the company and provide Technical Solutions while having the 
                    scope of growing my own skills.</p>
            </div>
        </div>
    );
}