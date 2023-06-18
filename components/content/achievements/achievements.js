import style from '@/styles/content.module.css'
import AchievementContent from './achievements-content';
import ProfilePic from '@/components/image';

export default function AchievementsPage () {
    return (
        <div className='container'>
            <div className={`${style.outline} ${style.mobile_margin}`}>
                <div className='col-sm-12'>
                    <div className={style.content}>
                        <div className='row'>
                            <div className='col-sm-4'>
                                <ProfilePic/>
                            </div>
                            <div className='col-sm-8'>
                                <div className='container'>
                                    <div className='tab-content'>
                                        <AchievementContent />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}