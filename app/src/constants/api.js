// export const fetchMeetups = () =>
// fetch('http://localhost:3000/api/meetups')
// .then(res =>  res.json());

import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api';
const fakeGroupId = '5ced045f5d3fbf0f5b474e55';

class MeetupApi {
    constructor(){
        this.groupId = fakeGroupId;
        this.path = '/groups/${this.groupId}/meetups';
    }

    async fetchGroupMeetups(){
        const { data } = await axios.get(this.path);

        return data.meetups;
    }
}

export{
    MeetupApi
};