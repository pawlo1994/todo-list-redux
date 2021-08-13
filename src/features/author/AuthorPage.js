import Section from '../../common/Section';
import Header from "../../common/Header";
import Container from "../../common/Container";
import { StyledParagraph } from "../../common/StyledParagraph";

function AuthorPage() {

    return (
        <Container>
            <Header title="O autorze" />
            <Section
                title="Paweł Suchy"
                body={
                    <>
                        <StyledParagraph>Nazywam się <strong>Paweł Suchy</strong>, mam 26 lat, mieszkam w
                            Międzyrzeczu
                            Dolnym koło Bielska-Białej.</StyledParagraph>
                        <StyledParagraph>Ukończyłem technikum informatyczne w Zespole Szkół "Silesia" w
                            Czechowicach-Dziedzicach jednak póki co nie pracuję w zawodzie.</StyledParagraph>
                        <StyledParagraph>Aktualnie pracuję na produkcji w branży Automotive jednak bardzo mocno
                            wierzę w to,
                            że po ukończeniu tego kursu uda mi się, jeśli nie zmienić pracę na stałe, to chociaż zacząć dorabiać
                            na frontendzie.</StyledParagraph>
                        <StyledParagraph>Poza pracą od prawie 13 lat gram na puzonie a od prawie 12 w Młodzieżowej
                            Orkiestrze Dętej Miejskiego Domu Kultury w Czechowicach-Dziedzicach. Poza tą orkiestrą miałem
                            również okazję wziąć udział w czterech edycjach Żywieckiego Suwakowania a także zagrać dwa koncerty
                            razem z zespołem Golec uOrkiestra.</StyledParagraph>
                    </>
                }
            />
        </Container>
    );
}

export default AuthorPage;
