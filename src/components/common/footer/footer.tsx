import Image from 'next/image'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <>
      <footer>
        <div className={styles.row}>
          <ul id={styles.botoes}>
            <li style={{ paddingTop: '5px' }}>
              <Image
                src="/ICON - carousellLogo.svg"
                alt="carousell logo"
                width={155}
                height={20}
              />
            </li>
            <li>
              <a href="#help">Help Centre</a>
            </li>
            <li>
              <a href="#contact">&bull;&nbsp;Contact Us </a>
            </li>
            <li>
              <a href="#press">&bull;&nbsp;Press</a>
            </li>
            <li>
              <a href="#jobs">&bull;&nbsp;Jobs</a>
            </li>
            <li>
              <a href="#adv">&bull;&nbsp;Advertise with Us</a>
            </li>
            <li>
              <a href="#terms">&bull;&nbsp;Terms</a>
            </li>
            <li>
              <a href="#privacy">&bull;&nbsp;Privacy</a>
            </li>
          </ul>
          <ul
            id={styles.botoesCountries}
            style={{ paddingTop: '2px', paddingLeft: '155px' }}
          >
            <li>
              <a
                href="https://au.carousell.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <img
                    src="https://mweb-cdn.karousell.com/build/flag-au-c094de0255f3087b0269c7a4f7929b59.jpg"
                    alt=""
                    height="24px"
                    width="24px"
                  />
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://ca.carousell.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <img
                    src="https://mweb-cdn.karousell.com/build/flag-ca-690717abdea48bc0c83ab8ff2b18c566.jpg"
                    alt=""
                    height="24px"
                    width="24px"
                  />
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://www.carousell.com.hk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <img
                    src="https://mweb-cdn.karousell.com/build/flag-hk-eed8ab38d0d0c8e4861fe93acdcfc805.jpg"
                    alt=""
                    height="24px"
                    width="24px"
                  />
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://id.carousell.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <img
                    src="https://mweb-cdn.karousell.com/build/flag-id-fe11364f09198c36993c435046d70f23.jpg"
                    alt=""
                    height="24px"
                    width="24px"
                  />
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://www.carousell.com.my/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <img
                    src="https://mweb-cdn.karousell.com/build/flag-my-dc0174229a57fd348d854cbdac582240.jpg"
                    alt=""
                    height="24px"
                    width="24px"
                  />
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://nz.carousell.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <img
                    src="https://mweb-cdn.karousell.com/build/flag-nz-ce76221d08d97c0c3ce03278eedec756.jpg"
                    alt=""
                    height="24px"
                    width="24px"
                  />
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://www.coursell.com.ph"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <img
                    src="https://mweb-cdn.karousell.com/build/flag-ph-30ab4a33b8d84b5587dd1c1bed8a873b.jpg"
                    alt=""
                    height="24px"
                    width="24px"
                  />
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://www.coursell.com.sg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <img
                    src="https://mweb-cdn.karousell.com/build/flag-sg-db4234069d2c6bf8768b18da7f91f10e.jpg"
                    alt=""
                    height="24px"
                    width="24px"
                  />
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://tw.coursell.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <img
                    src="https://mweb-cdn.karousell.com/build/flag-tw-ae719733baf090f016f6dd297aa71c2b.jpg"
                    alt=""
                    height="24px"
                    width="24px"
                  />
                </span>
              </a>
            </li>
          </ul>
          <ul className={styles.select}>
            <select className={styles.wrapper}>
              <option value="en">English</option>
              <option value="zh-Hant-TW">繁體中文 (台灣)</option>
              <option value="zh-Hant-HK">繁體中文 (香港)</option>
              <option value="id">Bahasa Indonesia</option>
            </select>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default Footer

Footer.defaultProps = {}

Footer.propTypes = {}
