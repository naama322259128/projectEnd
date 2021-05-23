import './App.css';
import UserLogin from './UserLogin';
import AddUser from './AddUser';
import AuctionPricing from './new auction/auction pricing/AuctionPricing'
import AddGroup from './new auction/auction pricing/purchasing groups/AddGroup';
import UploadingProducts from './new auction/uploading products/UploadingProducts';
import 'semantic-ui-css/semantic.min.css'
import OrganizationInformation from "./new auction/OrganizationInformation";
import AuctionInformation from "./new auction/AuctionInformation";
import AddProduct from './new auction/uploading products/AddProduct';
import NewAuction from './new auction/NewAuction';


function App() {
  return (<>
    {/* <UserLogin /> */}
    {/* <AddUser/> */}
    <NewAuction/>
    </>
  );
}

export default App;
