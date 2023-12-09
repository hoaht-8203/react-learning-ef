import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import PostList from './components/PostList';
import './styles.css'
import Loading from '../../components/Loading';

class PostFeature extends PureComponent {
    constructor(props) {
        super(props)
        
        this.isComponentMounted = false
        this.state = {
            loading: true,
            postList: [],
        }
    }

    async componentDidMount() {
        this.isComponentMounted = true

        try {
            await fetch('https://jsonplaceholder.typicode.com/comments')
                .then(response => response.json())
                .then((data) => {
                    if (this.isComponentMounted) {
                        this.setState({
                            postList: data,
                            loading:false,
                        })
                    }
                })
        } catch (error) {
            console.log('Failed to connect to api!', error)
            this.state({loading: false})
        }
    }

    componentWillUnmount() {
        this.isComponentMounted = false
    }

    render() {
        const { loading, postList } = this.state
        if (loading) return <Loading/>

        return <PostList postList={postList} />
    }
}


export default PostFeature;