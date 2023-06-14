import style from '@/styles/content.module.css';

export default function AchievementContent () {
    return (
        <div>
            <div className={`tab-pane active ${style.fade_in}`}>
                <h1 className={style.project_title}>Achievements</h1>
                <br />
                <ul>
                    <li>Successfully Organized and Coordinated many events in college</li>
                    <li>Scored 3rd Position in Paper Mache Competition</li>
                    <li>Awarded with On-the-Spot Award twice for good performance in the TCS Team</li>
                    <li>Awarded with On-the-Spot Award for creative initiatives for different teams in TCS</li>
                    <li>Recognized multiple times in Barclays for good performance</li>
                </ul>
            </div>
        </div>
    );
}