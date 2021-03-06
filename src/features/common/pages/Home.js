import React, {Component} from 'react';
import {connect} from 'react-redux';
import StandardPage from "../components/StandardPage";
import {Button, Container, Divider, Header, Segment} from "semantic-ui-react";

class Home extends Component {
    render() {
        return (
            <StandardPage
                title={'Info'}
                subtitle={''}
                icon={'info circle'}
                canonical={'https://warfare.pikaoku.com/info'}
                description={"A site that provides tools for Matt Colville's Strongholds & Followers for Dungeons & Dragons 5th Edition"}
                metaTitle={'Info'}
            >
                <Container text>
                    <Segment.Group>
                        <Segment>
                            <p>If you have designed a <em>Strongholds & Followers</em> unit card message me and I will add it. </p>

                            <Header as={'h3'}>Patreon</Header>
                            <Button as={'a'} href={'https://www.patreon.com/bePatron?u=9218037'} color={'google plus'}
                                    icon={'patreon'} content={'Become a Patron!'}/>
                        </Segment>
                    </Segment.Group>
                </Container>
            </StandardPage>
        );
    }
}

const mapStateToProps = (state) => ({});

export default connect(
    mapStateToProps,
)(Home);
