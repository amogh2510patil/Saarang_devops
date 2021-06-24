import { Redirect } from "react-router-dom";
import { useState } from 'react'

const Lastpage = ({userName}) => {
    
    let [redi,setRedirect] = useState(false)
    function homePage(e){
        e.preventDefault()
        setRedirect(redi=true)
    }

    if(redi === true){
        return <Redirect to='/'/>
    }

    return (
        <div>
            <nav id="nav-bar" >
                <div className="container rightAlign">
                    <button onClick={homePage} className='btn2'>Logout</button>
                </div>
            </nav>
            <div className="container centerAlign">
                <h1 className="head">Welcome {userName.user}  </h1>
                <table >
                    <tr>
                        <th>Course no</th>
                        <th>Credit</th>
                        <th>Grade</th>
                    </tr>
                    <tr>
                        <th colSpan='3'>First Semester</th>
                    </tr>
                    <tr>
                        <td>Ma1101</td>
                        <td>10</td>
                        <td>S</td>
                    </tr>
                    <tr>
                        <td>Ph101</td>
                        <td>10</td>
                        <td>S</td>
                    </tr>
                    <tr>
                        <td>Cy1001</td>
                        <td>10</td>
                        <td>S</td>
                    </tr>
                    <tr className="lastRow">
                        <td colSpan='2'>GPA : 10</td>
                        <td>CGPA : 10</td>
                        
                    </tr>
                    <tr>
                        <th colSpan='3'>Second Semester</th>
                    </tr>
                    <tr>
                        <td>EE1101</td>
                        <td>10</td>
                        <td>S</td>
                    </tr>
                    <tr>
                        <td>EE2001</td>
                        <td>16</td>
                        <td>S</td>
                    </tr>
                    <tr>
                        <td>MA1102</td>
                        <td>10</td>
                        <td>S</td>
                    </tr>
                    <tr className="lastRow">
                        <td colSpan='2'>GPA : 10</td>
                        <td>CGPA : 10</td>
                        
                    </tr>
                    <tr>
                        <th colSpan='3'>Third Semester</th>
                    </tr>
                    <tr>
                        <td>EE2015</td>
                        <td>11</td>
                        <td>S</td>
                    </tr>
                    <tr>
                        <td>EE2025</td>
                        <td>10</td>
                        <td>S</td>
                    </tr>
                    <tr>
                        <td>MA2020</td>
                        <td>9</td>
                        <td>S</td>
                    </tr>
                    <tr className="lastRow">
                        <td colSpan='2'>GPA : 10</td>
                        <td>CGPA : 10</td>
                        
                    </tr>
                    <tr>
                        <th colSpan='3'>Fourth Semester</th>
                    </tr>
                    <tr>
                        <td>EE3001</td>
                        <td>11</td>
                        <td>S</td>
                    </tr>
                    <tr>
                        <td>EE2019</td>
                        <td>17</td>
                        <td>S</td>
                    </tr>
                    <tr>
                        <td>EE2005</td>
                        <td>15</td>
                        <td>S</td>
                    </tr>
                    <tr className="lastRow">
                        <td colSpan='2'>GPA : 10</td>
                        <td>CGPA : 10</td>
                        
                    </tr>
                </table>
            </div>
            
        </div>
    )
}

export default Lastpage
