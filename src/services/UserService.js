import axios from "axios";
//import environment from '../../environments/environment';

//const roadmapApiUrl = 'http://10.39.180.230/TrafficSystemSpeedMapAPI/api/v1/roadmap';
//const roadmapApiUrl = 'http://192.168.128.119/TrafficSystemSpeedMapAPI/api/v1/roadmap';
const ApiUrl = 'http://10.39.181.74/dailyworkApi/api/v1/user';
export default {

    UserSave(url = ApiUrl, data) {
        return {
            Save: () => axios.post(url, data)
        }
    }
}