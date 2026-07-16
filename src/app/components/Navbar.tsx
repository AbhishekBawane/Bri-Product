import Link from "next/link";
import styles from '../styles/navbar.module.css'
interface NavbarProps {
  search: string;
  onSearch: (value: string) => void;
}

export  default function Navbar({search, onSearch}: NavbarProps){

    return(
        <nav className={`${styles.navbar} navbar container-sm navbar-expand-lg bg-body-tertiary`}>
              <div className="container-fluid">
                  <Link href={"/"} className="navbar-brand text-light">Bi<span className="text-danger">Product</span></Link>

                  <div className="" id="navbarSupportedContent">
                            <form className="d-flex ms-auto" role="search">
                                  <input className="form-control me-2"
                                         type="search"
                                         placeholder="Search"
                                         aria-label="Search"
                                         value={search}
                                         onChange={(e) => onSearch(e.target.value)}
                                  />
                            </form>
                  </div>
              </div>
        </nav>
    )
}