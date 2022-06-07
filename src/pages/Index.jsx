import React from 'react'
import { Button, Card, CarouselItem, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Index = () => {
  
  
    return (
    <div>
        <Container>
        <Row>
        <Col>  
    <Card className='m-3' style={{ background:'gray' }}>
           <Card.Body>
            <Card.Title><h1>Menu</h1></Card.Title>
          </Card.Body>
           <Row>
           <h2 className='m-3'>Cadastramento</h2>
           <Card className="m-3" style={{ width: '18rem', background:'gray' }}>
           <Card.Img height={160.88} variant="top" src="https://meups.com.br/wp-content/uploads/2022/01/tres-plataformas.jpg" />
           <Card.Body>
           <Card.Title>Cadastrar uma nova plataforma</Card.Title>
           <Card.Text>
            <p>Realiza o cadastramento de uma nova plataforma.</p>
           </Card.Text>
           <Link className='btn btn-danger' to={'/plataforma'}>Ir para</Link>
           </Card.Body>
           </Card>

           <Card className="m-3" style={{ width: '18rem', background:'gray' }}>
           <Card.Img height={160.88} variant="top" src="https://i.imgur.com/24tZYi5.png" />
           <Card.Body>
           <Card.Title>Cadastrar um novo jogo</Card.Title>
           <Card.Text>
            <p>Realiza o cadastramento de um jogo de uma determinada plataforma.</p>
           </Card.Text>
           <Link className='btn btn-danger' to={'/jogo'}>Ir para</Link>
           </Card.Body>
           </Card>

           <Card className="m-3" style={{ width: '18rem', background:'gray' }}>
           <Card.Img height={160.88} variant="top" src="https://www.verminososporfutebol.com.br/wp-content/uploads/2020/12/Foto-jogador-de-videogame.jpg" />
           <Card.Body>
           <Card.Title>Cadastrar um novo cliente</Card.Title>
           <Card.Text>
            <p>Realiza o cadastramento de uma novo cliente.</p>
           </Card.Text>
           <Link className='btn btn-danger' to={'/cliente'}>Ir para</Link>
           </Card.Body>
           </Card>

           <Card className="m-3" style={{ width: '18rem', background:'gray' }}>
           <Card.Img height={160.88} variant="top" src="https://cdn.cloudflare.steamstatic.com/steam/apps/543260/ss_12415e4c36309004523d83a5e0b4c2640e9bf3c2.1920x1080.jpg?t=1629963784" />
           <Card.Body>
           <Card.Title>Cadastrar um novo funcionário</Card.Title>
           <Card.Text>
            <p>Realiza o cadastramento de um novo funcionário.</p>
           </Card.Text>
           <Link className='btn btn-danger' to={'/funcionario'}>Ir para</Link>
           </Card.Body>
           </Card>

           <Card className="m-3" style={{ width: '18rem', background:'gray' }}>
           <Card.Img height={160.88} variant="top" src="https://pbs.twimg.com/media/EEJQGrJWsAEHBqN?format=png&name=4096x4096" />
           <Card.Body>
           <Card.Title>Cadastrar equipamentos</Card.Title>
           <Card.Text>
            <p>Realiza o cadastramento de novos equipamentos.</p>
           </Card.Text>
           <Link className='btn btn-danger' to={'/equipamento'}>Ir para</Link>
           </Card.Body>
           </Card>
           </Row>
           <Row>
           <h2 className='m-3'>Listas</h2>
           <Card className="m-3" style={{ width: '18rem', background:'gray' }}>
           <Card.Img height={160.88} variant="top" src="https://www.oficinadanet.com.br/imagens/post/35832/capa-os-10-consoles-mais-vendidos-da-historia.jpg" />
           <Card.Body>
           <Card.Title>Lista de Plataformas</Card.Title>
           <Card.Text>
            <p>Verificar as plataformas cadastradas.</p>
           </Card.Text>
           <Link className='btn btn-danger' to={'/plataformalista'}>Ir para</Link>
           </Card.Body>
           </Card> 

           <Card className="m-3" style={{ width: '18rem', background:'gray' }}>
           <Card.Img height={160.88} variant="top" src="https://s2.glbimg.com/bMZWaxWQ_I9L83fhHW3dNXOpiPs=/0x0:1039x553/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2019/U/X/Jp8FdiSKmvkPFhqIqEUw/captura-de-tela-2019-04-01-as-12.08.30.png" />
           <Card.Body>
           <Card.Title>Lista de jogos</Card.Title>
           <Card.Text>
            <p>Verificar os jogos cadastrados.</p>
           </Card.Text>
           <Link className='btn btn-danger' to={'/jogolista'}>Ir para</Link>
           </Card.Body>
           </Card>

           <Card className="m-3" style={{ width: '18rem', background:'gray' }}>
           <Card.Img height={160.88} variant="top" src="https://2.bp.blogspot.com/-uUzBut-yXog/VxwZqvdrORI/AAAAAAAAA2o/RB7bCO5uyA4EkWCj13q69FubmQEyVLdEwCKgB/s1600/sunset%2Briders%2Bselect%2Byour%2Bplayer.jpg" />
           <Card.Body>
           <Card.Title>Lista de Clientes</Card.Title>
           <Card.Text>
            <p>Verificar os clientes cadastrados.</p>
           </Card.Text>
           <Link className='btn btn-danger' to={'/clientelista'}>Ir para</Link>
           </Card.Body>
           </Card>

           <Card className="m-3" style={{ width: '18rem', background:'gray' }}>
           <Card.Img height={160.88} variant="top" src="https://static0.cbrimages.com/wordpress/wp-content/uploads/2017/03/Wind-Waker-Tetra-Zelda-Link.jpg" />
           <Card.Body>
           <Card.Title>Lista de Funcionários</Card.Title>
           <Card.Text>
            <p>Verificar os funcionários cadastrados.</p>
           </Card.Text>
           <Link className='btn btn-danger' to={'/funcionariolista'}>Ir para</Link>
           </Card.Body>
           </Card>

           <Card className="m-3" style={{ width: '18rem', background:'gray' }}>
           <Card.Img height={160.88} variant="top" src="https://www.emugen.net/wp-content/uploads/2020/08/screenshot-the-legend-of-zelda-the-minish-cap-gba-4.jpeg" />
           <Card.Body>
           <Card.Title>Lista de Equipamentos</Card.Title>
           <Card.Text>
            <p>Verificar os equipamentos cadastrados.</p>
           </Card.Text>
           <Link className='btn btn-danger' to={'/equipamentolista'}>Ir para</Link>
           </Card.Body>
           </Card> 
           </Row>
           
    </Card>
        </Col>
        </Row> 
        </Container>
    </div>
  )
}

export default Index