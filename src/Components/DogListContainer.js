import * as React from 'react'
import DogsList from './Doglist'
import { connect } from 'react-redux'
import * as request from 'superagent'

class DogsListContainer extends React.Component {

    render() {
        return <DogsList Dogs={this.props.breeds} />
    }


    componentDidMount() {
        request
            .get('https://dog.ceo/api/breeds/list/all')
            .then(response => this.updateBreeds(Object.keys(response.body.message)))
            .catch(console.error)
    }

    updateBreeds(breeds) {
        if (breeds)
      this.props.dispatch({
        type: 'FETCHDOGS',
        payload: [...breeds] 
      })
    }
}

const mapStateToProps = (state) => {
    return {
        breeds: state
    }
}

export default connect(mapStateToProps)(DogsListContainer)