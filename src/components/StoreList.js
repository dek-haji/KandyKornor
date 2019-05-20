import React, { Component } from 'react';

class StoreList extends Component {

    render() {
        return (
            <section className="stores">
                <h1>Stores</h1>
                {
                    this.props.stores.map(store =>(
                        <div key={store.id}>
                            Store name:{store.storeName} <br/>
                            Company name: {store.companyName}

                    </div>)
                    )
               }
                </section>
        )
    ;
    }
}

export default StoreList;
