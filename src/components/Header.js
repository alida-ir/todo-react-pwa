import React from 'react'
import { Container, Dropdown, Nav, Navbar } from 'react-bootstrap'
import { Offline, Online } from 'react-detect-offline'


const Header = () => {
    return (
                <Navbar bg="dark" variant="dark">
                    <Container>
                    <Navbar.Brand href="http://todo.alida.ir/">Todo List</Navbar.Brand>
                    <Nav className="mr-auto d-xs-none" >
                    <Nav.Link href="https://alida.ir">AliDa</Nav.Link>
                    <Nav.Link href="https://github.com/alida-ir/todo-react-pwa">Repositories</Nav.Link>
                    <Nav.Link href="https://github.com/alida-ir">Github</Nav.Link>
                    <Nav.Link href="https://instagram.com/alida_ir">Instagram</Nav.Link>
                    <Nav.Link href="https://t.me/alida_ir">Telegram</Nav.Link>
                    <Navbar.Text>
                        <Online><span  className='text-success'>Online</span></Online>
                        <Offline><span  className='text-danger'>Offlined</span></Offline>
                    </Navbar.Text>
                    </Nav>
                    <Dropdown className='d-sm-none '>
                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                        Menu
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant="dark" className='dropdown-menu-dark'>
                    <Dropdown.Item href="https://alida.ir">
                        AliDa
                    </Dropdown.Item>
                    <Dropdown.Item href="https://github.com/alida-ir/todo-react-pwa">Repositories</Dropdown.Item>
                    <Dropdown.Item href="https://github.com/alida-ir">Github</Dropdown.Item>
                    <Dropdown.Item href="https://instagram.com/alida_ir">Instagram</Dropdown.Item>
                    <Dropdown.Item href="https://t.me/alida_ir">Telegram</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item >
                            <Online><span  className='text-success'>Online</span></Online>
                            <Offline><span  className='text-danger'>Offlined</span></Offline>
                    </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                    </Container>
                </Navbar>
    )
}

export {Header}
