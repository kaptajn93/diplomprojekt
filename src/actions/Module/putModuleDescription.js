import axios from 'axios'
import api from '../../apiUrlHelper'
var apiUrl = api.url;
import * as C from '../constants';

//Put module description

//export const PUT_API_MODULE_DESCRIPTION = 'PUT_API_MODULE_DESCRIPTION'
function putApiModuleDescription(moduleId, description) {
  return {
    type: C.PUT_API_MODULE_DESCRIPTION,
    moduleId,
    description
  }
}

export function putModuleDescription(moduleId, description){
  return function (dispatch){
    // First dispatch: the app state is updated to inform
    // that the API call is starting.
    //var foo = 2;
    dispatch(putApiModuleDescription(moduleId))

    return axios.put(apiUrl + '/module/' + moduleId + '/description', '=' + description)
      .then(response => response.data)

      .catch(response => {
        console.log(response);
      });
  }
}

