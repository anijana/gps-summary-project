import React from 'react'
import { gpsData } from '../data';
import './Summary.css';
import { Link } from 'react-router-dom';

export default function Summary() {
  return (
    <>
    <Link to='/'><button style={{padding:'5px', cursor:'pointer'}}>back page</button></Link>
    <h1 style={{textAlign:'center'}}>GPS Summary</h1>

         <div style={{margin:'0 55px', border:'1px solid black'}}>
                        <table className='content-table'>
                            <thead>
                                <tr>
                                    <th>DeviceId</th>
                                    <th>Device Type</th>
                                    <th>Timestamp</th>
                                    <th>location</th>
                                </tr>
                            </thead>
                        </table>

                            {
                                gpsData.map((currElem) => {
                                    return (
                                        <table className='content-table'>
                                            <tbody>
                                            <tr>
                                                <td>{currElem.DeviceId}</td>
                                                <td>{currElem.DeviceType}</td>
                                                <td>{currElem.Timestamp}</td>
                                                <td>{currElem.location}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                        )
                                    })
                                }
                    </div>

    </>
  )
}
