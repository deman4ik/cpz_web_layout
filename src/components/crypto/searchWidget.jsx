import React from 'react';

export default class SearchWidget extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-8">
                    <div className="row">
                        <input type="text" placeholder={'Search…'} />
                        <button className={'search_button button_search_icon'}></button>
                    </div>
                </div>
                <div className="col-4">
                    <button className={'search_button_down arrow_data_down'}></button>
                    <span className={'search_text'}>
                        List of coins for which we have robots currently. New listings will be published here.
                    </span>
                </div>
            </div>
        )
    }
}
