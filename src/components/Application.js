import React , {useState , useEffect} from 'react'
import { Alert, Badge, Button, Col, Container, FormControl, InputGroup, ListGroup } from 'react-bootstrap'



const Application = () => {
    const [list , setList] = useState(
                localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : []
    )
    const [text , setText] = useState('' )

    useEffect(() => {
       localStorage.setItem('list' , JSON.stringify(list))
    }, [list])

    const textChange = e => {
        setText(e.target.value)
    }

    const btnClick = (e) => {
        e.preventDefault()
        if(text === '') return;
        setList(prev => [...prev , {
            id: list.length ,
            name: text,
            checked:false
        }])
        setText('')
    }

    const badgeClick = (itemId) =>{
        const newList = list.filter(item => {return item.id !== itemId})
        setList(newList)
    }
  
    const badgeChangeClick = (itemId) => {
        setList(
            list.map((item , key) => {
            if(item.id === itemId)
            {    
                item.checked = !item.checked;
            }   
                return item;    
              } )
        )
    }

    const Todo = list.map((item  , key)=> { 
                            return <ListGroup.Item className={ item.checked ? 'd-flex justify-content-between active' : 'd-flex justify-content-between' } as="li" key={key}  >
                                                    {item.name}
                                                    <div>
                                                        <Badge onClick={() => badgeChangeClick(item.id)}  bg='success'>تیک زدن</Badge>
                                                        <Badge onClick={() => badgeClick(item.id)}  bg='danger'>حذف</Badge>
                                                    </div>
                                                </ListGroup.Item>
                                    })

    return (
        <React.Fragment>
            <Container className='mt-5 d-flex justify-content-center flex-column align-items-center'>
                <Col md={10}>
                        <form onSubmit={(e) => btnClick(e)}>
                            <InputGroup size="lg">
                                    <Button onClick={(e) => btnClick(e)} variant='primary' >اضافه کن</Button>
                                    <FormControl onChange={e => textChange(e)} value={text} aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                            </InputGroup>
                        </form>
                </Col>
                <Col md={9} xs={12} className='mt-5'>
                    <ListGroup as="ul" className='rounded-0'>
                        {list.length ? 
                            Todo
                        : 
                            <Alert variant="success">هیچ کاری برای انجام نیست !</Alert>
                        }
                    </ListGroup>
                </Col>
            </Container>
            {React.classList}
        </React.Fragment>
    )
}

export {Application}