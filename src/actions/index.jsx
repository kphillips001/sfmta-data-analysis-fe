import axios from 'axios'

// http://datadriventransit-env.eba-f6pyasyj.us-east-1.elasticbeanstalk.com/

export const SET_DATE = "SET_DATE";
export const SET_TRANSIT_TYPE = "SET_TRANSIT_TYPE";
export const GET_ROUTE = "GET_ROUTE";
export const GET_COORDINATES = "GET_COORDINATES";
export const GET_REPORTS = "GET_REPORTS";


export const getType = () => dispatch => {
    axios.get("http://datadriventransit-env.eba-f6pyasyj.us-east-1.elasticbeanstalk.com/api/type")
        .then(res => {
            dispatch({ type: SET_TRANSIT_TYPE, payload: res.data })
        })
        .catch(error => {
            console.log(error, "cant get data");
        })
}

export const sendType = param => dispatch => {
    axios.post("http://datadriventransit-env.eba-f6pyasyj.us-east-1.elasticbeanstalk.com/api/route", param)
        .then(res => {
            dispatch({ type: GET_ROUTE, payload:res.data })
        })
        .catch(error => {
            console.log(error.message, "cant send data")
        })
}

export const getCoordinates = id => dispatch => {
    axios.get(`http://datadriventransit-env.eba-f6pyasyj.us-east-1.elasticbeanstalk.com/api/route/${id}`)
        .then(res => {
            console.log(res);
            dispatch({ type: GET_COORDINATES, payload:res.data })
        })
        .catch(error => {
            console.log(error, "couldnt get coord")
        })
}

export const getReport = () => dispatch => {
    axios.get('http://datadriventransit-env.eba-f6pyasyj.us-east-1.elasticbeanstalk.com/api/report')
        .then(res => {
            console.log(res);
            dispatch({ type: GET_REPORTS, payload:res.data})
        })
        .catch(error => {
            console.log(error, "couldn't get report")
        })
}