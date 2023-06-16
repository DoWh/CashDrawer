import { React } from "react";
import Moment from 'react-moment';

function LogUnit({ date }){

    return (
       <tr>
            <td>
                <Moment format="YYYY/MM/DD hh:mm:ss">
                    {new Date(date)}
                </Moment>
            </td>
        </tr>
    )

}

export default LogUnit