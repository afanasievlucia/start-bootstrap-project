import FirstPost from "./First-post"
import SecondPost from "./Second-post"
import ThirdPost from "./Third-post"
import FourthPost from "./Fourth-post"

const Main = () => {
    return (
        <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-md-10 col-lg-8 col-xl-7">
                  <FirstPost />
                    {/* Divider */}
                    <hr className="my-4" /><hr className="my-4" />
                  <SecondPost />  
                    {/* Divider */}
                    <hr className="my-4" /><hr className="my-4" />
                  <ThirdPost />  
                    {/* Divider */}
                    <hr className="my-4" /><hr className="my-4" />
                    {/*<!-- Post preview-->*/}
                   <FourthPost /> 
                    {/*<!-- Divider-->*/}
                    <hr className="my-4" /><hr className="my-4" />
                   {/*<!-- Pager-->*/}
                    <div className="d-flex justify-content-end mb-4"><a className="btn btn-primary text-uppercase" href="#!">Older Posts →</a></div>
                </div>
            </div>
        </div>
    )
}

export default Main