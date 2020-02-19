import React, { Component } from 'react'
import './index.css'
import Facts from './components/facts'
import ErrorNotification from './components/errorNotification'


class App extends Component {

  state = {
    facts: null,
    baseUrl: 'https://cat-fact.herokuapp.com/facts/',
    proxyUrl: 'https://cors-anywhere.herokuapp.com/https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=5',
    loading: true,
  };
  async componentDidMount() {
    try {
      const response = await fetch(this.state.proxyUrl)
      const data = await response.json()
      this.setState({ facts: data, loading: false })
    }
    catch (e) {
      console.log(e)
      this.setState({ loading: false })
      return (<ErrorNotification message={`An error occured ${e}`}></ErrorNotification>)
    }
  }

  handleClick = () => {
    this.setState({ loading: true })
    try {
      fetch(this.state.proxyUrl)
        .then(response => response.json())
        .then(data => this.setState({ facts: data, loading: false }));
    } catch (e) {
      console.log(e)
      this.setState({ facts: null, loading: false })
    }
  };

  render() {
    return (
      <>
        <button onClick={this.handleClick}>Fetch new set of facts!</button>
        <Facts data={this.state.facts} baseUrl={this.state.baseUrl} loading={this.state.loading} />
      </>
    );
  }
}

export default App