import React from "react";


const  Footer= () => {
  let  date = new Date().getFullYear();

  return (
    <>
    <div className="copyright_div">
    <p className="copyright">Copyright ©️ {date}</p>
    </div>
    </>
  )
}

export default Footer;