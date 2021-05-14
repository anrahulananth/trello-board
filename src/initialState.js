const initialState = {
    lists: [
            {
                id: 1,
                name: 'Teams'
            },
            {   
                id: 2,
                name: 'Products'
            }
    ],
    listItems: {
        '1': [
            {
                id: 1,
                name: 'Product',
                desc: '3 Pending task to be picked by Raj'
            },
            {
                id: 2,
                name: 'Sales',
                desc: 'Send Proposals to Puneet for Sale Prices'
            }
        ],
        '2': [
            {
                id: 1,
                name: 'UAT Testing',
                desc: 'Ask Engg to setup testing infra'
            }
        ]
    }
};

export default initialState;