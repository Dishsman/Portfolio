

const FirstPage = () => {
    return (
        <div id="big" style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontFamily: 'Grenze Gotisch', color: 'aliceblue', fontSize: '8rem', height: '40%', width: '100%', 
                display: 'flex', justifyContent: 'center',paddingLeft:'30px' }} className="color-change-text">
                Front-End Developer
            </div>
            <div id="p" style={{
                fontFamily: 'Grenze Gotisch', color: 'aliceblue', fontSize: '2.5rem', paddingLeft: '15px', height: '60%', width: '80%',
                display: 'flex', flexDirection: 'column', marginLeft: '80px'
            }}>
                {/* <div className="type type-set-1"> Despite Majoring in Chinese, I always had a strong interest in iT related field. </div>
                <div className="type type-set-2"> After graduation, I focused my time on learning front-end development</div>
                <div className="type type-set-3"> and became experience in react-vite framework</div>
                <div className="type type-set-4">but I'm not limited to it, as I always open to learn a new thing </div>
                <div className="type type-set-5">to expand my skill set.</div> */}
            </div>
        </div>
    )
}

export default FirstPage