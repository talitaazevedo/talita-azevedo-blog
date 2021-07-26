import { Container } from './styles';

export function Profile() {
    return (
        <Container>
            {' '}
            <img
                src="https://avatars.githubusercontent.com/u/24778188?v=4"
                alt="talita azevedo"
            />
            <h1>
                Talita Azevedo
                <small>Web Developer</small>
            </h1>
            <p>Hello World! Sometimes you have to be your own Hero!!!</p>
        </Container>
    );
}
