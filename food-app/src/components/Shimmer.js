import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from 'react-loading-skeleton';

const Shimmer = () => {
    return(
        
        <div style={{display:'flex', flexWrap:'wrap'}}>
        {[...Array(15)].map((_, index) => (
          <div key={index} style={{ margin: '20px', backgroundColor: 'white', padding: '20px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <Skeleton height={150} width={250} />
            <Skeleton count={3} width={250} style={{ marginTop: '10px'}} />
          </div>
        ))}
      </div>
    ) 
}

export default Shimmer;