import { Popover } from 'antd';
const ToolsPage = () => {
    const htmlC = (
        <div className='popContent'>
            <p>The standard language used to create and structure content on the web.</p>
            <p className='popLine'> It uses tags to define elements like headings, paragraphs, images,</p>
            <p className='popLine'>and links, forming the backbone of every webpage.</p>
        </div>)
    const htmlT = (
        <div className='popTitle'>
            Html
        </div>)


    const gitC = (
        <div className='popContent'>
            <p>A platform for hosting and managing code. It helps developers track changes,</p>
            <p className='popLine'>collaborate on projects, and share their work with others using version control.</p>
            <p className='popLine'></p>
        </div>)
    const gitT = (
        <div className='popTitle'>
            GitHub
        </div>)


    const cssC = (
        <div className='popContent'>
            <p> I use CSS to style and layout web pages, making them visually appealing.</p>
            <p className='popLine'>It helps me control things like colors, fonts, spacing, positioning, </p>
            <p className='popLine'>and layout with display properties to create clean and organized designs.</p>
        </div>)
    const cssT = (
        <div className='popTitle'>
            CSS
        </div>)



    const vscodeC = (
        <div className='popContent'>
            <p>I use VS Code as my code editor because it's fast, customizable, and works great with</p>
            <p className='popLine'>JavaScript and TypeScript. It has useful features like an autocomplete that feature </p>
            <p className='popLine'>code suggestion and built-in Git support. making coding more efficient</p>
        </div>
    );
    const vscodeT = (
        <div className='popTitle'>
            VS-code
        </div>
    )
    const antdC = (
        <div className='popContent'>
            <p>A React UI framework used for building modern, responsive web applications.</p>
            <p className='popLine'>It provides pre-built, customizable components like buttons, forms, and tables, </p>
            <p className='popLine'>helping developers create consistent and visually appealing designs quickly.</p>
        </div>)
    const antdT = (
        <div className='popTitle'>
            Antd
        </div>)
    const yarnC = (
        <div className='popContent'>
            <p>Yarn is a package manager that helps me manage dependencies in my projects.</p> 
            <p className='popLine'>I use it to quickly install,update, and keep track of the libraries and packages I need,</p> 
            <p className='popLine'> all while keeping things fast and reliable.</p>

        </div>)
    const yarnT = (
        <div className='popTitle'>
            Yarn
        </div>)
 const routerC = (
    <div className='popContent'>
        <p>React Router DOM is a library I use to handle routing in my React apps.</p> 
        <p className='popLine'> It makes it easy to set up navigation between different pages or views,</p> 
        <p className='popLine'> so users can move around the app without refreshing the page.</p>

    </div>)
const routerT = (
    <div className='popTitle'>
       React router dom
    </div>)
const eslintC = (
    <div className='popContent'>
        <p>ESLint is a tool I use to make sure my JavaScript code is clean and error-free.</p> 
        <p className='popLine'>It checks for issues like missing semicolons or unused variables, </p> 
        <p className='popLine'> It's great for keeping code quality high and preventing bugs before they happen.</p>

    </div>)
const eslintT = (
    <div className='popTitle'>
       EsLint
    </div>)
    const reactC = (
        <div className='popContent'>
            <p>React is a library I use for building user interfaces, especially for SPAs(Single-Page Applications)</p> 
            <p className='popLine'> It helps manage app state and update the UI dynamically without reloading the page, </p> 
            <p className='popLine'>creating a smooth experience.</p>
    
        </div>)
    const reactT = (
        <div className='popTitle'>
           React
        </div>)
        const tsxC = (
            <div className='popContent'>
                <p>TSX lets me write React components with TypeScript and JSX in the same file. It helps me catch errors early</p> 
                <p className='popLine'> with type checking, making the code cleaner and easier to maintain</p> 
                <p className='popLine'></p>
        
            </div>)
        const tsxT = (
            <div className='popTitle'>
               TypeScript
            </div>)
    return (
        <div id="big" style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontFamily: 'Grenze Gotisch', color: 'aliceblue', fontSize: '9rem', height: '25%', width: '100%', display: 'flex', justifyContent: 'center' }} className="color-change-text">
                <span style={{ fontFamily: 'Math', color: 'aliceblue', fontSize: '10rem', letterSpacing: "-15px" }} className="color-change-text">
                    T</span>
                ools
            </div>
            <div id="p" style={{
                fontFamily: 'Grenze Gotisch', color: 'aliceblue', fontSize: '2.5rem',
                // paddingLeft: '15px', 
                height: '70%', width: '100%',
                display: 'flex', flexDirection: 'column', alignItems: 'center'
            }}>
                {/* <div id="1" style={{ height: "33%", width: '80%', display: 'flex', flexDirection: 'row', paddingTop: '10%', justifyContent: 'center', gap: '3%' }}>
                    <Popover content={htmlC} title={htmlT}>
                        <img src="html-5.svg" className="img fadeIn" />
                    </Popover>
                    <Popover content={gitC} title={gitT}>
                        <img src="github-color.svg" className="img fadeIn" style={{ width: '18%' }} />
                    </Popover>
                    <Popover content={antdC} title={antdT}>
                        <img src="yarn.svg" className="img fadeIn" style={{width: '20%',paddingTop: '3%',paddingLeft: '3%',}} />
                    </Popover>
                    <Popover content={cssC} title={cssT}>
                        <img src="css3-logo.svg" className="img fadeIn" style={{ width: '25%' }} />
                    </Popover>
                </div>
                <div id="2" style={{
                    height: "33%", width: '80%', display: 'flex', flexDirection: 'row',
                    justifyContent: 'center',
                    gap: '5%'
                }}>
                    <Popover content={antdC} title={antdT}>
                        <img src="react-router.svg" className="img fadeIn" />
                    </Popover>
                    <Popover content={vscodeC} title={vscodeT}>
                        <img src="vs-code.svg" className="img fadeIn" />
                    </Popover>
                    <Popover content={antdC} title={antdT}>
                        <img src="antdLogo.png" className="imgPng fadeIn" />
                    </Popover>
                    <Popover content={antdC} title={antdT}>
                        <img src="eslint.svg" className="img fadeIn" />
                    </Popover>
                </div>
                <div id="3" style={{
                    height: "33%", width: '80%', display: 'flex', flexDirection: 'row',
                    justifyContent: 'center',
                    gap: '5%'
                }}>
                    <Popover content={antdC} title={antdT}>
                        <img src="react.svg" className="img fadeIn" />
                    </Popover>
                    <Popover content={antdC} title={antdT}>
                        <img src="typescript-logo.svg" className="img fadeIn" />
                    </Popover>

                </div> */}
                           <div id="1" className='toolGrid'>
                    <Popover content={htmlC} title={htmlT}>
                        <img src="html-5.svg" className="img fadeIn" />
                    </Popover>
                    <Popover content={yarnC} title={yarnT}>
                        <img src="yarn.svg" className="img fadeIn" style={{width: '50%',paddingTop: '3%',paddingLeft: '3%',}} />
                    </Popover>
                    <Popover content={gitC} title={gitT}>
                        <img src="github-color.svg" className="img fadeIn" style={{ width: '50%' }} />
                    </Popover>
                    <Popover content={cssC} title={cssT}>
                        <img src="css3-logo.svg" className="img fadeIn" style={{ width: '65%' }} />
                    </Popover>
                
                    <Popover content={routerC} title={routerT}>
                        <img src="react-router.svg" className="img fadeIn" />
                    </Popover>
                    <Popover content={vscodeC} title={vscodeT}>
                        <img src="vs-code.svg" className="img fadeIn" />
                    </Popover>
                    <Popover content={antdC} title={antdT}>
                        <img src="ant-design.svg" className="img fadeIn" />
                    </Popover>
                    <Popover content={eslintC} title={eslintT}>
                        <img src="eslint.svg" className="img fadeIn" />
                    </Popover>
               
                    <Popover content={reactC} title={reactT}>
                        <img src="react.svg" className="img fadeIn" />
                    </Popover>
                    <Popover content={tsxC} title={tsxT}>
                        <img src="typescript-logo.svg" className="img fadeIn" />
                    </Popover>

                </div>
            </div>
        </div>
    )
}
export default ToolsPage