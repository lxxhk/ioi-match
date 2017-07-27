
import React, { Component }  from 'react'
import { Dropdown, Container, Grid, Header, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


class AgentsHeader extends Component {
  state = {agents: []}

  componentWillReceiveProps = (nextProps) => {
    const { agents } = nextProps

    const agentObjects = agents.map(agent => {
      const obj = {key:`${agent.id}`, value:`${agent.id}`, text:`${agent.name}`}
      return obj
    }).sort((a, b) => a.text.localeCompare(b.text))

    this.setState({agents: agentObjects})
  }

  handleChange = (e, {value}) => this.props.agentSubmit(value)

  render(){
    const { agents } = this.state

    return (
      <Grid>
        <Grid.Row columns={3} >
        <Grid.Column textAlign='center'>
          <Menu secondary>
            <Menu.Item name="About" active={false} as={Link} to='/about'/>
            <Menu.Item name="Investor" active={false} as={Link} to='/principal' />
            <Menu.Item name="Broker" active={true} as={Link} to='/agent' />
            <Menu.Item name="Algo" active={false} as={Link} to='/algo' />
          </Menu>
        </Grid.Column >
        <Grid.Column>
        <Header textAlign='center' as='h1'> IOI Match</Header>
        </Grid.Column>

        <Grid.Column textAlign='center'>
        <Container>
        <Dropdown selection
          loading={!agents.length}
          placeholder='Broker'
          name='agent'
          options={agents}
          onChange={this.handleChange}
          />
        </Container>

        </Grid.Column>
        </Grid.Row>
    </Grid>
    )
  }
}

export default AgentsHeader

// <Button basic >
//   <Link to='/principal'> Swith to Investor's Page </Link>
// </Button>
