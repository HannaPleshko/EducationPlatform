import style from './style.module.scss'
function Footer() {
    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                <nav>
                    <div className={style.navigation}>
                        <p>Home</p>
                        <p>Textbook</p>
                        <p>Statistics</p>
                        <p>Sprint</p>
                    </div>

                    <div className={style.developers}>
                        <p>Hanna</p>
                        <p>Nastya</p>
                        <p>Marcus</p>
                    </div>
                </nav>
              
                <nav>
                    <div className={style.logoImgs}>
                        <div className={style.logoGit}></div>
                        <div className={style.logoGT}></div>
                        <div className={style.logoYouTube}></div>
                    </div>
                    <p>©2021 Hschool. Project for Hschool.</p>
                </nav>
            </div>
        </div>
    )
}

export default Footer