const initState = {
    projects: [
        { id: '1', title: 'Namaiwa', content: 'Maxus Helios' },
        { id: '2', title: 'Karmbhoomi', content: 'Raipur' },
        { id: '3', title: 'JanmBHoomi', content: 'Raigarh' }
    ]
}

const projectReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_PROJECT' :
            console.log('created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR' : 
            console.log('create project error', action.e);
            return state;
        default :   
            return state;
    }
}

export default projectReducer;