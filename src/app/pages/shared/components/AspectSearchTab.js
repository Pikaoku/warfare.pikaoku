import React from 'react';
import {connectHits, InstantSearch, Panel, SearchBox} from "react-instantsearch-dom";
import {Card, Divider, Header, Tab, Table} from "semantic-ui-react";
import WarfareRefinementList from "./WarfareRefinementList";
import {UNIT_STAT_TYPES, withSign} from "../../../../store/unitmaker/unitmakerUtils";
import {connect} from "react-redux";
import SaveButton from "../../../components/searching/SaveButton";
import {saveAspectToUser, unsaveAspectFromUser} from "../../../../store/data/dataActions";
import {AUTH} from "../../../../store/reducer";
import {AUTH_USER} from "../../../../store/auth/authReducer";


const AspectHits =
    connect(
        state => ({user: state[AUTH][AUTH_USER]}),
        {saveAspectToUser, unsaveAspectFromUser}
    )(connectHits(
        ({hits, user, saveAspectToUser, unsaveAspectFromUser}) =>
            <Card.Group centered itemsPerRow={4} doubling>
                {
                    hits.map(
                        hit =>
                            <Card key={hit.objectID}>
                                <Card.Content>
                                    <Header textAlign={'center'} size={'medium'} color={'blue'}>
                                        {hit.name}
                                        <Header.Subheader>
                                            {hit.authorId ? 'by ' : 'from '} <b>{hit.author}</b>
                                        </Header.Subheader>
                                    </Header>
                                </Card.Content>
                                <Card.Content style={{padding: 0}}>
                                    <Table compact basic={'very'} padded definition unstackable>
                                        <Table.Body>
                                            <Table.Row>
                                                <Table.Cell textAlign={'right'} width={8}>
                                                    Type
                                                </Table.Cell>
                                                <Table.Cell width={8}>
                                                    {hit.type}
                                                </Table.Cell>
                                            </Table.Row>
                                            {
                                                UNIT_STAT_TYPES.map(
                                                    statType =>
                                                        <Table.Row key={statType}>
                                                            <Table.Cell
                                                                textAlign={'right'}
                                                                className={'capitalize'}>
                                                                {statType}
                                                            </Table.Cell>
                                                            <Table.Cell>
                                                                {withSign(hit[statType])}
                                                            </Table.Cell>
                                                        </Table.Row>
                                                )
                                            }
                                        </Table.Body>
                                    </Table>
                                </Card.Content>
                                <Card.Content>
                                    <SaveButton
                                        saved={user && hit.saved.includes(user.uid)}
                                        disabled={!user}
                                        objectId={hit.objectID}
                                        saveFunc={saveAspectToUser}
                                        unsaveFunc={unsaveAspectFromUser}
                                    />
                                </Card.Content>
                            </Card>
                    )
                }
            </Card.Group>
    ));

const AspectSearchTab = ({searchClient}) => (
    <Tab.Pane>
        <div className="ais-InstantSearch">
            <InstantSearch indexName={'aspects'} searchClient={searchClient}>
                <Panel>
                    <SearchBox/>
                    <WarfareRefinementList attribute={'type'}/>
                </Panel>
                <Divider hidden/>
                <AspectHits/>
            </InstantSearch>
        </div>
        <br/>
    </Tab.Pane>
);

export default AspectSearchTab;
