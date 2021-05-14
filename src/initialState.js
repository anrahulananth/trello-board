import uuid from 'uuid/dist/v4'
const initialState = {
    lists: [
            {
                id: uuid(),
                name: 'Teams',
                items:  [
                    {
                        id: uuid(),
                        name: 'Product',
                        desc: '3 Pending task to be picked by Raj'
                    },
                    {
                        id: uuid(),
                        name: 'Sales',
                        desc: 'Send Proposals to Puneet for Sale Prices'
                    }
                ]
            },
            {   
                id: uuid(),
                name: 'Products',
                items: [
                    {
                        id: uuid(),
                        name: 'UAT Testing',
                        desc: 'Ask Engg to setup testing infra'
                    }
                ]
            }
    ]
};

export default initialState;