import React from 'react'
import Card from './components/card'
import { Bookmark } from 'lucide-react'
const App = () => {


  const jobOpenings = [
    {
      id: 1,
      company: "Google",
      logo: "https://cdn2.hubspot.net/hubfs/53/image8-2.jpg",
      daysPosted: "3 days ago",
      position: "Frontend Developer",
      tag1: "Full-Time",
      tag2: "Senior-Level",
      location: "Bangalore, India",
      payscale: "$140/hr"
    },
    {
      id: 2,
      company: "Amazon",
      logo: "https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg",
      daysPosted: "5 days ago",
      position: "UI/UX Designer",
      tag1: "Full-Time",
      tag2: "Mid-Level",
      location: "Mumbai, India",
      payscale: "$120/hr"
    },
    {
      id: 3,
      company: "Meta",
      logo: "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_1280.png",
      daysPosted: "2 days ago",
      position: "React Developer",
      tag1: "Part-Time",
      tag2: "Junior-Level",
      location: "Hyderabad, India",
      payscale: "$95/hr"
    },
    {
      id: 4,
      company: "Apple",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy8ivjh3jEgWs6uv7DMzADcxPcFaWP00H1hQ&s",
      daysPosted: "1 week ago",
      position: "iOS Developer",
      tag1: "Full-Time",
      tag2: "Senior-Level",
      location: "Delhi, India",
      payscale: "$160/hr"
    },
    {
      id: 5,
      company: "Netflix",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsZLFW9PjmQSTrcc-BfDZL_8ENLgsuz3Ov0g&s",
      daysPosted: "4 days ago",
      position: "Backend Developer",
      tag1: "Full-Time",
      tag2: "Senior-Level",
      location: "Chennai, India",
      payscale: "$150/hr"
    }
  ];

  return (
    <div className='parent'>
      {jobOpenings.map(function (elem) {
        return <Card company={elem.company} daysPosted={elem.daysPosted} position={elem.position} tag1={elem.tag1} tag2={elem.tag2} payscale={elem.payscale} logo={elem.logo} />
      })}
    </div>
  )
}

export default App
