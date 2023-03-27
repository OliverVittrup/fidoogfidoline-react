import CallIcon from '@mui/icons-material/Call';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
export default function Footer() {
    return (
        <footer className="sidefod">
            <div>
                <CallIcon />
                <p><b>Kontakt</b></p>
                <p className="info" >+45 12 34 56 78</p>
                <p className="info">fidoogfidoline@gmail.com</p>
            </div>

            <div>
                <AccessTimeIcon />
                <p><b>Åbningstider</b></p>
                <p className="info">Man-Fre: 9-17</p>
                <p className="info">Lørdag: 11-16</p>
                <p className="info">Søndag: Lukket</p>
            </div>

            <div>
                <ConnectWithoutContactIcon />
                <p><b>SoMe</b></p>
                <div className='socials'>
                    <FacebookIcon />
                    <InstagramIcon />
                    <LinkedInIcon />
                </div>
            </div>
        </footer>
    )
}