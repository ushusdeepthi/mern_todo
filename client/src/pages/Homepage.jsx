import React from 'react'
import { Link} from 'react-router-dom'
import { Container, AppBar, Typography , Card, Button } from '@material-ui/core'

export default function Homepage() {
    return (
        <Container maxWidth="md">
            <AppBar position="static">
                <Typography variant="h2" align="center">TODO APP</Typography>
            </AppBar>
            <Card variant="outlined">
                <Button>
                <Link to="/login">Login </Link>
                </Button>
                <Button>
                <Link to="/register">Register </Link>
                </Button>
            </Card>
            
        </Container>
    )
}
