import style from '@/styles/footer.module.css'

export default function Footer () {
    return (
        <div className="justify-content-center fixed-bottom">
            <div className={style.Footer}>
                <h5 className={style.h_margin}><span>&#169;</span> All Rights Reserved</h5>
            </div>
        </div>
    );
}