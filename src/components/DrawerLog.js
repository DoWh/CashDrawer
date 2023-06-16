import { React, useEffect, useState } from "react";
import LogUnit from "./LogUnit";


function DrawerLog({ date }){

    const [actions, setActions] = useState([]);

    useEffect(()=>{

        fetch('http://localhost:3001/api/', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({date: date})
        })
        .then(data => data.json())
        .then(data => setActions(data))
    
    }, [date]);
    
    return (
        <section className="p-2 m-4 border-2 rounded-md">
            <table>
                <tbody>
                    {actions.length <= 0 && 
                        <tr>
                            <td>
                                Небыло открытий...
                            </td>
                        </tr>
                    }
                    {actions &&
                        actions.map(({ id, createdAt }) => (
                            <LogUnit key={id} date={createdAt} />
                    ))}
                </tbody>
            </table>
        </section>
    )
}

export default DrawerLog;
