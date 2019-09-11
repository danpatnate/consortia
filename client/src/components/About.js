import React, { Fragment } from 'react';
import PageSubHeader from './PageSubHeader';

const About = ({ className, children, ...rest }) => (
  <>
    <PageSubHeader />
    <div className="block" {...rest}>
      <h2>About Consortia</h2>
      <p>
        Tradional business models focus on 1-to-1 or at times, 1-to-many, if fortunate. With a Consortium,
        individuals and companies are able to join a network of secure, reliable and fast partnerships. Say goodbye
        to long negotiations or slow transactions. By joining our Consortia, you instantly gain access to the resources
        and services provided by the node of companies that are already using the group!
        <br />
        <br />
        Just like a painting is a blend
        and organized, living mixture, so too is our Consortia - <a href="/companies">join now</a>!
      </p>
      <img src="http://dannate.io/static/interest-4bf63ce1b9b2e44524af2ef8ced34223.jpg" style={{ width: '80%' }} />
    </div>
  </>
)


export default About
