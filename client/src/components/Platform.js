import React, { Fragment } from 'react';
import { Carousel } from 'antd';
import PageSubHeader from './PageSubHeader';

const Platform = ({ className, children, ...rest }) => (
  <>
    <PageSubHeader />
    <div className="block" {...rest}>
      <h2>Platform Benefits</h2>
      <Carousel autoplay>
        <div>
          <h3>Enhanced Security and Data Integrity</h3>
          <div className="benefit">
            <img src="https://rprwyatt.com/wp-content/uploads/2017/02/internet-security.jpg" alt="Security" style={{ width: '80%' }} />
          </div>
        </div>
        <div>
          <h3>Cross-Cloud: One Chain, Many Clouds</h3>
          <div className="benefit">
            <img src="http://www.cbcomputers.net.au/wp-content/uploads/cloud-network-chart.jpg" alt="Cloud networks and computing" style={{ width: '80%' }} />
          </div>
        </div>
        <div>
          <h3>Reusable Business Components and Code Snippets</h3>
          <div className="benefit">
            <img src="https://www.appway.com/resource/object/appway-platform-reusable-components_Img1/LatestCommittedFilter/Appway-Platform-Visual-Reuseable-Components2.png" alt="Component Library" style={{ width: '80%' }} />
          </div>
        </div>
      </Carousel>
    </div>
  </>
)


export default Platform
