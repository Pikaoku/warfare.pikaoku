import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as algoliasearch from "algoliasearch";
import {Header, Menu, Tab} from "semantic-ui-react";
import AspectSearchTab from "../components/AspectSearchTab";
import FeatureSearchTab from "../components/FeatureSearchTab";
import UnitSearchTab from "../components/UnitSearchTab";
import StandardPage from "../../common/components/StandardPage";

class Browse extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeIndex: 0
        };

        this.searchClient = algoliasearch(
            '4VK9GM16WD',
            'e1786c7de6633fca532d4318f72af2c8'
        )
    }

    render() {
        const SearchTabMenuItem = ({label, index}) =>
            <Menu.Item active={this.state.activeIndex === index}>
                <Header
                    as={'a'}
                    content={label}
                    className={'capitalize'}
                    onClick={() => this.setState({activeIndex: index})}
                />
            </Menu.Item>;

        const panes = [
            {
                menuItem: (
                    <SearchTabMenuItem
                        key={0} index={0}
                        label={'Aspects'}
                    />
                ),
                render: () => <AspectSearchTab searchClient={this.searchClient}/>
            },
            {
                menuItem: (
                    <SearchTabMenuItem
                        key={1} index={1}
                        label={'Features'}
                    />
                ),
                render: () => <FeatureSearchTab searchClient={this.searchClient}/>
            },
            {
                menuItem: (
                    <SearchTabMenuItem
                        key={2} index={2}
                        label={'Units'}
                    />
                ),
                render: () => <UnitSearchTab searchClient={this.searchClient}/>
            }
        ];

        return (
            <StandardPage
                title={'Shared'}
                icon={'globe'} canonical={'https://warfare.pikaoku.com/shared'}
                description={"Community created and shared assets for Matt Colville's Stronghold & Followers"}
                metaTitle={'Shared'}
            >
                <Tab
                    menu={{secondary: true, color: 'teal', pointing: true}}
                    activeIndex={this.state.activeIndex}
                    panes={panes}
                />
            </StandardPage>
        );
    }
}

const mapStateToProps = (state) => ({});

export default connect(
    mapStateToProps,
)(Browse);