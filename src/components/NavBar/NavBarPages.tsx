import { ABOUTME_PATH, CONTACT_PATH, PORTFOLIO_PATH } from '../../routes/const';
import styled from "styled-components"; 

const NavBarPages = () => {
  return (
    <Pages>
        <PageButton>
            <a href={PORTFOLIO_PATH}>
            MY PORTFOLIO
            </a>
        </PageButton>
        <PageButton>
            <a href={ABOUTME_PATH}>
            ABOUT ME
            </a>
        </PageButton>
        <PageButton>
            <a href={CONTACT_PATH}>
            CONTACT
            </a>
        </PageButton>
    </Pages>
  )
}

export default NavBarPages;

const Pages = styled.div`

`;

const PageButton = styled.button`
    margin-right: 20px;
    border: 1px solid white;
    background: inherit;
    height: 30px;

    a {
        font-family: sans-serif;
        letter-spacing: 5px;
        font-weight: 550;
        color: white;
        text-decoration: none;
    }
`