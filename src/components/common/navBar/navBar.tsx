import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Container from '@material-ui/core/Container'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Divider from '@material-ui/core/Divider'
import Button from '../button/button'
import InputGroup from '../inputGroup/inputGroup'

import styles from './navBar.module.css'

const NavBar = () => {
  const [searchInput, setSearchInput] = useState('')

  const handleInputOnChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSearchInput(e.target.value)
  }

  // todo: add a button and handle search

  return (
    <>
      <Container>
        <AppBar
          position="static"
          color="transparent"
          className={styles.navBarWrapper}
        >
          <Toolbar disableGutters>
            <Link href="/">
              <a>
                <Image
                  src="/ICON - carousellLogo.svg"
                  alt="carousell logo"
                  width={168}
                  height={32}
                />
              </a>
            </Link>
            <InputGroup
              name="search-bar"
              value={searchInput}
              placeholder="Search for an item"
              onChange={handleInputOnChange}
              className={styles.inputWrapper}
            />
            <Button className={styles.buttonWrapper}>Sell</Button>
          </Toolbar>
        </AppBar>
      </Container>
      <Divider />
    </>
  )
}

export default NavBar
