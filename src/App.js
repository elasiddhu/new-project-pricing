
import './App.css';
import PriceCard from './PriceCard';

function App() {

  let data = [
    {
      plan:"Free",
      price:"0",
      User:"Single User",
      isUser:true,
      storage:"5GB Storage",
      isstorage:true,
      publicprojects:"unlimites public projects",
      ispublicprojects:true,
      communityAcess:"community Access",
      iscommunityAcess:true,
      privateprojects:"Unlimited Private Projects",
      isprivateprojects:true,
      phone:"Dedicated Phone Support",
      isphone:false,
      subdomain:"Free Sub Domain",
      issubdomain:false,
      reports:"Monthly Status Rports",
      isreports:false
    },
    {
      plan:"Plus",
      price:"9",
      User:"5 User",
      isUser:true,
      storage:"50GB Storage",
      isstorage:true,
      publicprojects:"unlimited public projects",
      ispublicprojects:true,
      communityAcess:"community Access",
      iscommunityAcess:true,
      privateprojects:"Unlimited Private Projects",
      isprivateprojects:true,
      phone:"Dedicated Phone Support",
      isphone:true,
      subdomain:"Free Sub Domain",
      issubdomain:true,
      reports:"Monthly Status Rports",
      isreports:false
    },
    {
      plan:"Pro",
      price:"49",
      User:"Unlimited Users",
      isUser:true,
      storage:"150GB Storage",
      isstorage:true,
      publicprojects:"unlimited public projects",
      ispublicprojects:true,
      communityAcess:"community Access",
      iscommunityAcess:true,
      privateprojects:"Unlimited Private Projects",
      isprivateprojects:true,
      phone:"Dedicated Phone Support",
      isphone:true,
      subdomain:"Unlimited Free Sub Domain",
      issubdomain:true,
      reports:"Monthly Status Reports",
      isreports:true
    }
  ]

  return <>
  <section className="pricing py-5">
  <div className="container">
    <div className="row">
     {
      data.map((e)=> <PriceCard data={e}/> )
     }
      
    
     
     
    </div>
  </div>
</section>
  </>
    
}

export default App;
