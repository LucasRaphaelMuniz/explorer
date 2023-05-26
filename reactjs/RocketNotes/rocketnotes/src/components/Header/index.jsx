import { RiShutDownLine } from "react-icons/ri";
import { Container, Profile, Logout } from "./styles";

export function Header(){
    return(
        <Container>
            <Profile to="/profile">
                <img 
                    src="https://github.com/LucasRaphaelMuniz.png" 
                    alt="Foto do usuário"                
                />
                <div>
                    <span>Bem-Vindo</span>
                    <strong>Lucas Muniz</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}