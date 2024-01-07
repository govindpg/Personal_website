import React from 'react'
import { Tabs } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import './tab.css'
function Tab() {
  return (
    <div >
 <Tabs  justify variant='pills' className='text-white ' defaultActiveKey='tab-1'>
<Tab  className="mt-3"  eventKey='tab-1'   title=" Skills">
<p style={{fontSize:'25PX'}} className='mt-2  text-white'>Frontend Development <br /><span style={{fontSize:'17PX'}} className='fw-light'>Creating visually appealing websites with a focus on user experience.</span> </p>
<p style={{fontSize:'25PX'}} className='mt-2 text-white'>UI/UX Designing <br /><span style={{fontSize:'17PX'}} className='fw-light'>Creating visually appealing websites with a focus on user experience.</span> </p>

</Tab>
<Tab eventKey='tab-2' title="Education">
<p style={{fontSize:'25PX'}}  className='mt-2  text-white'>B.Tech in Computer Science and Engineering <br /><span style={{fontSize:'12PX'}} className='fw-light'>College of Engineering Chengannur</span> </p>
<p style={{fontSize:'25PX'}}  className='mt-2  text-white'>Higher Secondary  <br /><span style={{fontSize:'17PX'}} className='fw-light'>V V H S S Thamarakulam  </span> </p>
<p style={{fontSize:'25PX'}}  className='mt-2  text-white'> Class X  <br /><span style={{fontSize:'17PX'}} className='fw-light'>All Saints Public School,Adoor  </span> </p>

</Tab>
<Tab eventKey='tab-3' title="Experience">
<p style={{fontSize:'25PX'}}  className='mt-2  text-white'> Mearn stack developer Intern <br /><span style={{fontSize:'17PX'}} className='fw-light'>Luminar technolab kakkanad (6 months) </span> </p>

</Tab>

 </Tabs>

    </div>
  )
}

export default Tab