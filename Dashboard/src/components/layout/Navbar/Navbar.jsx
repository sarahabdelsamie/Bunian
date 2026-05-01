import Logo from '../../../assets/div-logo.png'
import notfacation from '../../../assets/div.png'
import Style from './Navbar.module.css'
export default function Navbar() {
    return (
        <>

            <nav className='d-flex justify-content-between align-items-center'>
                <div className='d-flex px-4'>
                    <img className={Style.navLogo} src={Logo} alt="logo" />
                </div>


                <div className={Style.super}>
                    <img src={notfacation} alt="notfacation" className={Style.notfacation} />
                    <ul><select className={Style.select} name="Super Admin" >
                        <option>Super Admin</option>

                        <option >item-1</option>
                        <option >item-1</option>

                    </select></ul>
                </div>


            </nav>

        </>
    );
}